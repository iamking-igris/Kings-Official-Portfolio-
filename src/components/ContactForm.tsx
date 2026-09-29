"use client";

import { useState, type FormEvent } from "react";
import { submitContact, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fields: Array<{
  name: keyof ContactInput;
  label: string;
  as: "input" | "textarea";
  type?: string;
  autoComplete?: string;
}> = [
  { name: "name", label: "Name", as: "input", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", as: "input", type: "email", autoComplete: "email" },
  { name: "message", label: "Project / message", as: "textarea" },
];

export function ContactForm({ invert = false }: { invert?: boolean }) {
  const [values, setValues] = useState<ContactInput>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const next: Partial<Record<keyof ContactInput, string>> = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (values.message.trim().length < 12) {
      next.message = "Add a little more detail so I can respond properly.";
    }
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("submitting");
    const result = await submitContact(values);
    if (result.ok) {
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setFormError(result.error);
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-current/20 p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="kicker">Sent</p>
        <p className="headline mt-4">I&apos;ll read it.</p>
        <p className="mt-4 max-w-[42rem] text-body opacity-70">
          Thanks for writing. I respond to real projects and clear questions.
        </p>
        <button
          type="button"
          className="mt-8 min-h-11 text-sm uppercase tracking-[0.14em]"
          onClick={() => setStatus("idle")}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {fields.map((field) => {
        const error = errors[field.name];
        const id = `contact-${field.name}`;
        const errorId = `${id}-error`;
        const className = cn(
          "w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-body outline-none transition-[border-color] duration-150",
          invert ? "border-[var(--color-invert-line)]" : "border-[var(--color-line)]",
          "focus:border-current",
        );

        return (
          <div key={field.name}>
            <label htmlFor={id} className="kicker mb-3 block">
              {field.label}
            </label>
            {field.as === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                rows={5}
                value={values[field.name]}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                onChange={(e) =>
                  setValues((c) => ({ ...c, [field.name]: e.target.value }))
                }
                className={cn(className, "min-h-32 resize-y")}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                onChange={(e) =>
                  setValues((c) => ({ ...c, [field.name]: e.target.value }))
                }
                className={className}
              />
            )}
            {error ? (
              <p id={errorId} className="mt-2 text-sm">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      {formError ? (
        <p role="alert" className="text-sm">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex min-h-12 items-center justify-center px-8 text-sm uppercase tracking-[0.16em] transition-transform duration-150 active:not-disabled:scale-[0.96] disabled:opacity-60",
          invert
            ? "bg-[var(--color-paper)] text-[var(--color-ink)]"
            : "bg-[var(--color-ink)] text-[var(--color-paper)]",
        )}
      >
        {status === "submitting" ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}
