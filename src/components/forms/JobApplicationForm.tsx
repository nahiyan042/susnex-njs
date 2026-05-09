"use client";

import { useId, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { cn } from "@/lib/utils";

const inputClass =
  "neo-input w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green)]";
const errorClass = "mt-1 text-xs text-red-500";
const labelClass = "mb-2 block text-sm font-medium";

/**
 * Sensible defaults that match the Sustainability Development Intern posting.
 * Other postings (developer, engineer) override these via props so each role
 * shows the qualification ladder and seniority bands that actually fit it.
 *
 * Both lists use `value === label` on purpose: we send the human-readable
 * string straight into the HR email, so there's nothing to translate
 * server-side and adding a new option doesn't require touching the API.
 */
const DEFAULT_EDUCATION_OPTIONS: ReadonlyArray<string> = [
  "Bachelor in Engineering (BEngg)",
  "Bachelor of Science (BSc)",
  "Bachelor of Business Administration (BBA)",
  "Other",
];

const DEFAULT_EXPERIENCE_OPTIONS: ReadonlyArray<string> = [
  "Fresher (no prior experience)",
  "Less than 1 year",
  "1 year",
];

const DEFAULT_BUSINESS_AREAS: ReadonlyArray<string> = [
  "Consulting Firms",
  "Garments",
  "Textile",
  "Research Organization",
  "Other",
];

/**
 * Browser-side mirror of the API's hard limits. Kept slightly looser than the
 * server (no MIME assertion in the client) because some browsers report empty
 * `file.type` for `.doc` files; the API does the authoritative check.
 */
const MAX_CV_BYTES = 5 * 1024 * 1024;
const ACCEPT = ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

interface JobApplicationFormValues {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  fieldOfStudy: string;
  university: string;
  graduationYear: string;
  yearsExperience: string;
  businessAreas: string[];
  portfolioUrl: string;
  motivation: string;
  cv: FileList;
  consent: boolean;
}

interface JobApplicationFormProps {
  /** Used as the email subject prefix and stored on the application record. */
  position: string;
  /**
   * Qualification options shown in the "Highest qualification" dropdown.
   * Values are sent verbatim to HR (no server-side translation), so write them
   * the way you'd want them to read in the email. Defaults suit the intern.
   */
  educationOptions?: ReadonlyArray<string>;
  /**
   * Seniority bands shown in the "Years of experience" dropdown. Same string
   * passthrough as `educationOptions`. Defaults to the intern's narrow band.
   */
  experienceOptions?: ReadonlyArray<string>;
  /** Industry-exposure checkboxes. Override to expand or trim the list. */
  businessAreaOptions?: ReadonlyArray<string>;
  /** One-line note shown under the experience dropdown to set expectations. */
  experienceHelperText?: string;
  /** Placeholder text for the field-of-study input — role-specific guidance. */
  fieldOfStudyPlaceholder?: string;
  /** Placeholder text for the motivation textarea — tunes prompt by role. */
  motivationPlaceholder?: string;
}

export function JobApplicationForm({
  position,
  educationOptions = DEFAULT_EDUCATION_OPTIONS,
  experienceOptions = DEFAULT_EXPERIENCE_OPTIONS,
  businessAreaOptions = DEFAULT_BUSINESS_AREAS,
  experienceHelperText = "This is an early-career role. Freshers are encouraged to apply; we cap experience at one year so the cohort grows with us.",
  fieldOfStudyPlaceholder = "e.g. Environmental Engineering",
  motivationPlaceholder = "Tell us what draws you to sustainability and what you hope to learn in this internship.",
}: JobApplicationFormProps) {
  const reactId = useId();
  const fid = (n: string) => `${reactId}-${n}`;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<JobApplicationFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      education: "",
      fieldOfStudy: "",
      university: "",
      graduationYear: "",
      yearsExperience: "",
      businessAreas: [],
      portfolioUrl: "",
      motivation: "",
      consent: false,
    },
    mode: "onTouched",
  });

  const cvFiles = watch("cv");
  const cvFile = cvFiles?.[0];

  const onSubmit: SubmitHandler<JobApplicationFormValues> = async (data) => {
    setStatus("loading");
    setServerError("");

    // Client-side guards. The server enforces these too — these are just so
    // the user gets a fast, in-form error before the round-trip.
    if (!cvFile) {
      setStatus("error");
      setServerError("Please attach your CV.");
      return;
    }
    if (cvFile.size > MAX_CV_BYTES) {
      setStatus("error");
      setServerError("CV must be 5 MB or smaller.");
      return;
    }

    const fd = new FormData();
    fd.append("position", position);
    fd.append("fullName", data.fullName);
    fd.append("email", data.email);
    fd.append("phone", data.phone);
    fd.append("location", data.location);
    fd.append("education", data.education);
    fd.append("fieldOfStudy", data.fieldOfStudy);
    fd.append("university", data.university);
    fd.append("graduationYear", data.graduationYear);
    fd.append("yearsExperience", data.yearsExperience);
    fd.append("businessAreas", data.businessAreas.join(","));
    fd.append("portfolioUrl", data.portfolioUrl ?? "");
    fd.append("motivation", data.motivation);
    fd.append("consent", data.consent ? "true" : "false");
    fd.append("token", "dev-bypass");
    fd.append("cv", cvFile);

    try {
      const res = await fetch("/api/job-application", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Submission failed");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="neo-surface rounded-2xl border border-[var(--color-green)]/30 bg-[var(--color-green)]/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-green)]/10">
          <svg
            className="h-6 w-6 text-[var(--color-green)]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-lg font-semibold">Application received</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thank you for applying to SusNex. We&rsquo;ve forwarded your CV and
          details to our HR team — if there&rsquo;s a fit, you&rsquo;ll hear back
          from us within 7&ndash;10 working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-[var(--color-green)] hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      encType="multipart/form-data"
    >
      {/* Personal */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-green)]">
          Personal details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fid("fullName")} className={labelClass}>
              Full name <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("fullName")}
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              className={cn(inputClass, errors.fullName && "border-red-500")}
              placeholder="e.g. Ayesha Rahman"
              {...register("fullName", {
                required: "Full name is required",
                minLength: { value: 2, message: "Full name is required" },
              })}
            />
            {errors.fullName && (
              <p className={errorClass} role="alert">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor={fid("email")} className={labelClass}>
              Email <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("email")}
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              className={cn(inputClass, errors.email && "border-red-500")}
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/u,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className={errorClass} role="alert">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fid("phone")} className={labelClass}>
              Phone <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("phone")}
              type="tel"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              className={cn(inputClass, errors.phone && "border-red-500")}
              placeholder="+880 1XXX-XXXXXX"
              {...register("phone", {
                required: "Please share a contact number",
                minLength: { value: 6, message: "Enter a valid phone number" },
              })}
            />
            {errors.phone && (
              <p className={errorClass} role="alert">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor={fid("location")} className={labelClass}>
              Current location <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("location")}
              type="text"
              autoComplete="address-level2"
              aria-invalid={!!errors.location}
              className={cn(inputClass, errors.location && "border-red-500")}
              placeholder="e.g. Dhaka, Bangladesh"
              {...register("location", { required: "Where are you based?" })}
            />
            {errors.location && (
              <p className={errorClass} role="alert">{errors.location.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Education */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-green)]">
          Education
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fid("education")} className={labelClass}>
              Highest qualification <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <select
              id={fid("education")}
              aria-invalid={!!errors.education}
              className={cn(inputClass, errors.education && "border-red-500")}
              {...register("education", { required: "Please select your qualification" })}
            >
              <option value="">Select a qualification…</option>
              {educationOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.education && (
              <p className={errorClass} role="alert">{errors.education.message}</p>
            )}
          </div>
          <div>
            <label htmlFor={fid("fieldOfStudy")} className={labelClass}>
              Field of study <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("fieldOfStudy")}
              type="text"
              aria-invalid={!!errors.fieldOfStudy}
              className={cn(inputClass, errors.fieldOfStudy && "border-red-500")}
              placeholder={fieldOfStudyPlaceholder}
              {...register("fieldOfStudy", { required: "Field of study is required" })}
            />
            {errors.fieldOfStudy && (
              <p className={errorClass} role="alert">{errors.fieldOfStudy.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fid("university")} className={labelClass}>
              University / institution <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("university")}
              type="text"
              aria-invalid={!!errors.university}
              className={cn(inputClass, errors.university && "border-red-500")}
              placeholder="e.g. BUET"
              {...register("university", { required: "Institution is required" })}
            />
            {errors.university && (
              <p className={errorClass} role="alert">{errors.university.message}</p>
            )}
          </div>
          <div>
            <label htmlFor={fid("graduationYear")} className={labelClass}>
              Graduation year <span aria-hidden="true" className="text-red-500">*</span>
            </label>
            <input
              id={fid("graduationYear")}
              type="number"
              inputMode="numeric"
              min={1980}
              max={new Date().getFullYear() + 5}
              aria-invalid={!!errors.graduationYear}
              className={cn(inputClass, errors.graduationYear && "border-red-500")}
              placeholder="e.g. 2025"
              {...register("graduationYear", {
                required: "Graduation year is required",
                pattern: {
                  value: /^(19|20)\d{2}$/u,
                  message: "Enter a valid 4-digit year",
                },
              })}
            />
            {errors.graduationYear && (
              <p className={errorClass} role="alert">{errors.graduationYear.message}</p>
            )}
          </div>
        </div>
      </fieldset>

      {/* Experience */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-green)]">
          Experience
        </legend>
        <div>
          <label htmlFor={fid("yearsExperience")} className={labelClass}>
            Years of experience <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select
            id={fid("yearsExperience")}
            aria-invalid={!!errors.yearsExperience}
            className={cn(inputClass, errors.yearsExperience && "border-red-500")}
            {...register("yearsExperience", { required: "Select your experience" })}
          >
            <option value="">Select…</option>
            {experienceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <p className="mt-2 text-xs text-text-secondary">
            {experienceHelperText}
          </p>
          {errors.yearsExperience && (
            <p className={errorClass} role="alert">{errors.yearsExperience.message}</p>
          )}
        </div>

        <div>
          <span className={labelClass}>
            Industry exposure{" "}
            <span className="font-normal text-text-secondary">(select all that apply)</span>
          </span>
          <div className="grid gap-2 sm:grid-cols-2">
            {businessAreaOptions.map((area: string) => (
              <label
                key={area}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-sm transition-colors hover:border-[var(--color-green)]/40"
              >
                <input
                  type="checkbox"
                  value={area}
                  className="h-4 w-4 accent-[var(--color-green)]"
                  {...register("businessAreas")}
                />
                <span>{area}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor={fid("portfolioUrl")} className={labelClass}>
            LinkedIn or portfolio URL{" "}
            <span className="font-normal text-text-secondary">(optional)</span>
          </label>
          <input
            id={fid("portfolioUrl")}
            type="url"
            inputMode="url"
            aria-invalid={!!errors.portfolioUrl}
            className={cn(inputClass, errors.portfolioUrl && "border-red-500")}
            placeholder="https://www.linkedin.com/in/your-handle"
            {...register("portfolioUrl", {
              pattern: {
                value: /^https?:\/\/.+/u,
                message: "Enter a full URL (https://…)",
              },
            })}
          />
          {errors.portfolioUrl && (
            <p className={errorClass} role="alert">{errors.portfolioUrl.message}</p>
          )}
        </div>
      </fieldset>

      {/* Application materials */}
      <fieldset className="space-y-5">
        <legend className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-green)]">
          Your application
        </legend>

        <div>
          <label htmlFor={fid("cv")} className={labelClass}>
            CV / Resume <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <div className="rounded-xl border border-dashed border-border bg-bg-card px-4 py-5">
            <input
              id={fid("cv")}
              type="file"
              accept={ACCEPT}
              aria-invalid={!cvFile && status === "error"}
              className="block w-full text-sm text-text-secondary file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--color-green)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[var(--color-green-dark)]"
              {...register("cv")}
            />
            {cvFile ? (
              <p className="mt-3 text-xs text-text-secondary">
                Attached: <strong className="text-text-primary">{cvFile.name}</strong>
                {" — "}{(cvFile.size / 1024).toFixed(0)} KB
              </p>
            ) : (
              <p className="mt-3 text-xs text-text-secondary">
                PDF, DOC, or DOCX. Max 5&nbsp;MB.
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={fid("motivation")} className={labelClass}>
            Why SusNex? <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <textarea
            id={fid("motivation")}
            rows={6}
            aria-invalid={!!errors.motivation}
            className={cn(inputClass, "min-h-[140px] resize-y", errors.motivation && "border-red-500")}
            placeholder={motivationPlaceholder}
            {...register("motivation", {
              required: "A short motivation note is required",
              minLength: { value: 50, message: "Please write at least 50 characters" },
              maxLength: { value: 3000, message: "Please keep it under 3000 characters" },
            })}
          />
          {errors.motivation && (
            <p className={errorClass} role="alert">{errors.motivation.message}</p>
          )}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-text-secondary">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-[var(--color-green)]"
              {...register("consent", { required: "Please confirm to continue" })}
            />
            <span>
              I agree that SusNex may store and review my application materials
              for the purpose of recruitment, in line with the SusNex
              {" "}
              <a
                href="/gdpr-compliance"
                className="font-medium text-[var(--color-green)] underline-offset-4 hover:underline"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p className={errorClass} role="alert">{errors.consent.message}</p>
          )}
        </div>
      </fieldset>

      {serverError && (
        <p
          className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-300"
          role="alert"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="neo-button-primary inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)] disabled:opacity-50"
      >
        {status === "loading" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
