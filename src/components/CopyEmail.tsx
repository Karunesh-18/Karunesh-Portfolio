"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="mono"
      style={{ background: "none", border: "1px solid var(--line)", color: "var(--ink)", padding: "0.7rem 1rem", cursor: "pointer" }}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      aria-live="polite"
    >
      {done ? "Copied" : "Copy address"}
    </button>
  );
}
