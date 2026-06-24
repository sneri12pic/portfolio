"use client";

import { FormEvent, useState } from "react";
import { Check, Copy, Send } from "lucide-react";
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

// Public access key from web3forms.com — safe to expose client-side.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "copied"
  >("idle");

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          // surfaced as the email's reply-to so you can reply directly
          replyto: form.email
        })
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function handleCopyMessage() {
    if (!validate()) return;
    await navigator.clipboard.writeText(
      `To: ${contact.email}\nSubject: ${form.subject}\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
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
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send aria-hidden size={17} />
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
        <Button type="button" variant="ghost" onClick={handleCopyMessage}>
          {status === "copied" ? (
            <Check aria-hidden size={17} />
          ) : (
            <Copy aria-hidden size={17} />
          )}
          Copy message
        </Button>
        <p
          className={cn(
            "text-sm",
            status === "error" ? "text-rose" : "text-warm-gray"
          )}
        >
          {status === "success"
            ? "Thanks — your message was sent. I'll reply to your email soon."
            : status === "copied"
              ? "Message copied. Paste it into any email app."
              : status === "error"
                ? `Sending failed. Please email me directly at ${contact.email}.`
                : "Fill in the form and your message will be sent straight to my inbox."}
        </p>
      </div>
    </form>
  );
}
