"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const inputClass =
  "neo-input w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green)]";
const errorClass = "mt-1 text-xs text-red-500";

interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  token: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { phone: "", token: "placeholder" },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="font-heading text-lg font-semibold">Message Sent</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Thank you for contacting us. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-[var(--color-green)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
          Name <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={cn(inputClass, errors.name && "border-red-500")}
          placeholder="Your name"
          {...register("name")}
        />
        {errors.name && (
          <p id="contact-name-error" className={errorClass} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
          Email <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={cn(inputClass, errors.email && "border-red-500")}
          placeholder="you@company.com"
          {...register("email")}
        />
        {errors.email && (
          <p id="contact-email-error" className={errorClass} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium">
          Phone <span className="font-normal text-text-secondary">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+880 …"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          className={cn(inputClass, errors.subject && "border-red-500")}
          placeholder="How can we help?"
          {...register("subject")}
        />
        {errors.subject && (
          <p id="contact-subject-error" className={errorClass} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          Message <span aria-hidden="true" className="text-red-500">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="contact-message"
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(inputClass, "min-h-[140px] resize-y", errors.message && "border-red-500")}
          placeholder="Tell us about your sustainability goals…"
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass} role="alert">
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
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
