"use client";

import { FormEvent, useMemo, useState } from "react";
import { Check, Copy, Mail, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { contact, cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "copied" | "opened">("idle");

  const emailBody = useMemo(() => {
    return `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
  }, [form]);

  const mailto = useMemo(() => {
    return `mailto:${contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(emailBody)}`;
  }, [emailBody, form.subject]);

  const gmailCompose = useMemo(() => {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: contact.email,
      su: form.subject,
      body: emailBody
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  }, [emailBody, form.subject]);

  function validate() {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (form.message.trim().length < 20) {
      nextErrors.message = "Please write at least 20 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    window.location.href = mailto;
    setStatus("opened");
  }

  function handleOpenGmail() {
    if (!validate()) return;

    window.open(gmailCompose, "_blank", "noopener,noreferrer");
    setStatus("opened");
  }

  async function handleCopyMessage() {
    if (!validate()) return;

    await navigator.clipboard.writeText(
      `To: ${contact.email}\nSubject: ${form.subject}\n\n${emailBody}`
    );
    setStatus("copied");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-petal bg-white/84 p-6 shadow-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ["name", "Name", "Your name"],
          ["email", "Email", "you@example.com"],
          ["subject", "Subject", "Graduate software engineering role"]
        ].map(([id, label, placeholder]) => (
          <div key={id} className={id === "subject" ? "sm:col-span-2" : ""}>
            <label className="text-sm font-semibold text-charcoal" htmlFor={id}>
              {label}
            </label>
            <input
              id={id}
              name={id}
              type={id === "email" ? "email" : "text"}
              value={form[id as keyof FormState]}
              onChange={(event) =>
                setForm((current) => ({ ...current, [id]: event.target.value }))
              }
              placeholder={placeholder}
              aria-invalid={Boolean(errors[id as keyof FormState])}
              aria-describedby={errors[id as keyof FormState] ? `${id}-error` : undefined}
              className={cn(
                "mt-2 w-full rounded-2xl border bg-cream px-4 py-3 text-sm text-charcoal transition placeholder:text-warm-gray/70 focus:border-rose",
                errors[id as keyof FormState] ? "border-rose" : "border-petal"
              )}
            />
            {errors[id as keyof FormState] ? (
              <p id={`${id}-error`} className="mt-2 text-sm font-medium text-rose">
                {errors[id as keyof FormState]}
              </p>
            ) : null}
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="text-sm font-semibold text-charcoal" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Tell me a little about the role or opportunity."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(
              "mt-2 w-full resize-y rounded-2xl border bg-cream px-4 py-3 text-sm text-charcoal transition placeholder:text-warm-gray/70 focus:border-rose",
              errors.message ? "border-rose" : "border-petal"
            )}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm font-medium text-rose">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit">
          <Send aria-hidden size={17} /> Send with email app
        </Button>
        <Button type="button" variant="secondary" onClick={handleOpenGmail}>
          <Mail aria-hidden size={17} /> Open in Gmail
        </Button>
        <Button type="button" variant="ghost" onClick={handleCopyMessage}>
          {status === "copied" ? (
            <Check aria-hidden size={17} />
          ) : (
            <Copy aria-hidden size={17} />
          )}
          Copy message
        </Button>
        <p className="text-sm text-warm-gray">
          {status === "copied"
            ? "Message copied. Paste it into any email app."
            : status === "opened"
              ? "Your email app should open with the message prefilled."
              : "No backend is connected yet, so this prepares an email for you to send."}
        </p>
      </div>
    </form>
  );
}
