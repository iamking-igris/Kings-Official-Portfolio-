export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

function validate(input: ContactInput): string | null {
  if (!input.name.trim() || input.name.trim().length < 2) {
    return "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    return "Please enter a valid email.";
  }
  if (input.message.trim().length < 12) {
    return "Add a little more detail so I can respond properly.";
  }
  return null;
}

/**
 * Real delivery via Web3Forms (no custom backend).
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in env after creating a key at web3forms.com
 * with destination michaelkm555@gmail.com
 */
export async function submitContact(
  input: ContactInput,
): Promise<ContactResult> {
  const error = validate(input);
  if (error) return { ok: false, error };

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      error:
        "Contact form is not configured yet. Email michaelkm555@gmail.com directly, or set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio contact from ${input.name.trim()}`,
        from_name: input.name.trim(),
        email: input.email.trim(),
        message: input.message.trim(),
        to: "michaelkm555@gmail.com",
      }),
    });

    const data = (await res.json()) as { success?: boolean; message?: string };

    if (!res.ok || !data.success) {
      return {
        ok: false,
        error: data.message || "Something went wrong. Please try again or email me directly.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please try again or email michaelkm555@gmail.com.",
    };
  }
}
