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

export type ContactFormData = z.infer<typeof contactSchema>;
export type ServiceInquiryFormData = z.infer<typeof serviceInquirySchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
