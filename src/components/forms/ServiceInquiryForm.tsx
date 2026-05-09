"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceInquirySchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const inputClass =
  "neo-input w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green)]";
const errorClass = "mt-1 text-xs text-red-500";

const services = [
  "ESG & Sustainability Reporting",
  "Energy & Carbon Management",
  "Chemical & Wastewater Management",
  "Sustainable Materials & Circularity",
  "Gender Equality & Inclusion",
  "Structural Engineering Assessment",
  "SusNex Academy Training",
  "Other",
];

interface ServiceInquiryFormValues {
  name: string;
  company?: string;
  email: string;
  serviceInterest: string;
  message: string;
  token: string;
}

interface ServiceInquiryFormProps {
  preselectedService?: string;
}

export function ServiceInquiryForm({ preselectedService }: ServiceInquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceInquiryFormValues>({
    resolver: zodResolver(serviceInquirySchema),
    defaultValues: {
      company: "",
      serviceInterest: preselectedService ?? "",
      token: "placeholder",
    },
  });

  const onSubmit: SubmitHandler<ServiceInquiryFormValues> = async (data) => {
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/service-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token: "dev-bypass" }),
      });

      if (!res.ok) {
        const json = await res.json();
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
          <svg className="h-6 w-6 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-lg font-semibold">Inquiry Submitted</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thank you for your interest. Our team will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className="mb-2 block text-sm font-medium">
            Name <span aria-hidden="true" className="text-red-500">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="inquiry-name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "inquiry-name-error" : undefined}
            className={cn(inputClass, errors.name && "border-red-500")}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p id="inquiry-name-error" className={errorClass} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="inquiry-company" className="mb-2 block text-sm font-medium">
            Company <span className="font-normal text-text-secondary">(optional)</span>
          </label>
          <input
            id="inquiry-company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Your company"
            {...register("company")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-email" className="mb-2 block text-sm font-medium">
          Email <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="inquiry-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "inquiry-email-error" : undefined}
          className={cn(inputClass, errors.email && "border-red-500")}
          placeholder="you@company.com"
          {...register("email")}
        />
        {errors.email && (
          <p id="inquiry-email-error" className={errorClass} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiry-service" className="mb-2 block text-sm font-medium">
          Service Interest <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="inquiry-service"
          aria-invalid={!!errors.serviceInterest}
          aria-describedby={errors.serviceInterest ? "inquiry-service-error" : undefined}
          className={cn(inputClass, errors.serviceInterest && "border-red-500")}
          {...register("serviceInterest")}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.serviceInterest && (
          <p id="inquiry-service-error" className={errorClass} role="alert">
            {errors.serviceInterest.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="inquiry-message" className="mb-2 block text-sm font-medium">
          Message <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="inquiry-message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "inquiry-message-error" : undefined}
          className={cn(inputClass, "min-h-[120px] resize-y", errors.message && "border-red-500")}
          placeholder="Tell us about your project or requirements…"
          {...register("message")}
        />
        {errors.message && (
          <p id="inquiry-message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="neo-button-primary inline-flex items-center justify-center rounded-full bg-[var(--color-green)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)] disabled:opacity-50"
      >
        {status === "loading" ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
