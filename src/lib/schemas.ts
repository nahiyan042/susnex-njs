import { z } from "zod";

export const contactSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
    phone: z.string().max(30).optional(),
    subject: z.string().min(2, "Subject is required").max(200),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(5000),
    token: z.string().min(1, "reCAPTCHA token required"),
  })
  .strict();

export const serviceInquirySchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    company: z.string().max(200).optional(),
    email: z.string().email("Invalid email address"),
    serviceInterest: z.string().min(2, "Please select a service").max(200),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(5000),
    token: z.string().min(1, "reCAPTCHA token required"),
  })
  .strict();

export const newsletterSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    consent: z.literal(true, "You must agree to receive newsletters"),
    token: z.string().min(1, "reCAPTCHA token required"),
  })
  .strict();

/**
 * Job application — text payload only.
 *
 * The CV file is *not* part of this schema because Zod has no idea what to do
 * with a Node `File` object across the network boundary; the API route reads
 * the file directly from `request.formData()` and validates type/size there.
 *
 * `position` is included so a single endpoint can later serve other openings
 * without growing a new route. Currently only the Sustainability Development
 * Intern role posts to it.
 *
 * `businessAreas` is a comma-joined string from a checkbox group rather than
 * an array because `FormData` only carries strings; the API splits + sanitises
 * each entry before it lands in the email.
 */
export const jobApplicationSchema = z
  .object({
    position: z.string().min(2).max(200),
    fullName: z.string().min(2, "Full name is required").max(120),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(6, "Please share a contact number we can reach you on")
      .max(30),
    location: z
      .string()
      .min(2, "Where are you currently based?")
      .max(120),
    education: z
      .string()
      .min(2, "Please select your highest qualification")
      .max(80),
    fieldOfStudy: z
      .string()
      .min(2, "Field of study is required")
      .max(120),
    university: z
      .string()
      .min(2, "University / institution is required")
      .max(150),
    graduationYear: z
      .string()
      .regex(/^(19|20)\d{2}$/u, "Enter a valid 4-digit graduation year"),
    yearsExperience: z
      .string()
      .min(1, "Select your years of experience")
      .max(40),
    businessAreas: z.string().max(500).optional().default(""),
    portfolioUrl: z
      .string()
      .url("Enter a valid URL (LinkedIn, portfolio, GitHub, etc.)")
      .max(300)
      .optional()
      .or(z.literal("")),
    motivation: z
      .string()
      .min(50, "Tell us a little more (at least 50 characters)")
      .max(3000, "Please keep it under 3000 characters"),
    consent: z.literal("true", "You must agree before we can review your application"),
    token: z.string().min(1, "reCAPTCHA token required"),
  })
  .strict();

export type ContactFormData = z.infer<typeof contactSchema>;
export type ServiceInquiryFormData = z.infer<typeof serviceInquirySchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
