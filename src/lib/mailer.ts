import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Single attachment shape we pass through to nodemailer. Kept narrow on
 * purpose so callers in the route handlers can build a buffer from a
 * `File` (`await file.arrayBuffer()` → `Buffer.from(...)`) and forward it
 * here without taking a direct dependency on nodemailer types.
 */
export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
}) {
  return transporter.sendMail({
    from: process.env.EMAIL_FROM ?? `"SusNex Website" <${process.env.EMAIL_USER}>`,
    ...options,
  });
}
