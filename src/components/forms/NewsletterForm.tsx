"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface NewsletterFormValues {
  email: string;
  consent: true;
  token: string;
}

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { token: "placeholder" },
  });

  const onSubmit: SubmitHandler<NewsletterFormValues> = async (data) => {
    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token: "dev-bypass" }),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Subscription failed");
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
        className="neo-surface rounded-xl border border-[var(--color-green)]/30 bg-[var(--color-green)]/5 p-4 text-center text-sm"
        role="status"
        aria-live="polite"
      >
        <p className="font-medium text-[var(--color-green)]">
          Subscribed successfully!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate aria-label="Newsletter signup">
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className={cn(
            "neo-input w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-green)]",
            errors.email && "border-red-500"
          )}
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email && (
          <p id="newsletter-email-error" className="mt-1 text-xs text-red-500" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <label className="flex items-start gap-2 text-xs text-text-secondary">
        <input
          type="checkbox"
          className="mt-0.5 accent-[var(--color-green)]"
          aria-invalid={!!errors.consent}
          {...register("consent")}
        />
        <span>
          I agree to receive sustainability insights and updates from SusNex.
          {errors.consent && (
            <span className="ml-1 text-red-500" role="alert">{errors.consent.message}</span>
          )}
        </span>
      </label>

      {serverError && (
        <p className="text-xs text-red-500" role="alert">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="neo-button-primary w-full rounded-xl bg-[var(--color-green)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)] disabled:opacity-50"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
