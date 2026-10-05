"use client";

import { useState } from "react";
import { projects } from "@/data/content";

export default function Projects() {
  const [open, setOpen] = useState<string>(projects[0].id);

  return (
    <div>
      {projects.map((p) => {
        const isOpen = open === p.id;
        return (
          <div key={p.id} className="port" data-open={isOpen} style={{ ["--c" as string]: p.cable }}>
            <button
              className="port-head"
              aria-expanded={isOpen}
              aria-controls={`panel-${p.id}`}
              onClick={() => setOpen(isOpen ? "" : p.id)}
              onMouseEnter={() => setOpen(p.id)}
            >
              <span className="label-strip" style={{ justifySelf: "start" }}>{p.port}</span>
              <span style={{ display: "grid", gap: "0.9rem" }}>
                <span className="port-name display" style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}>
                  {p.name}
                </span>
                <span className="cable" />
              </span>
            </button>
            <div className="port-body" id={`panel-${p.id}`} role="region" aria-label={p.name}>
              <div>
                <div style={{ display: "grid", gap: "1.1rem", padding: "0 0 2rem calc(4rem + 1.25rem)", maxWidth: "46rem" }}>
                  <p style={{ fontSize: "1.25rem", margin: 0, textWrap: "pretty" }}>{p.line}</p>
                  <p style={{ margin: 0, color: "var(--steel)", textWrap: "pretty" }}>{p.detail}</p>
                  <p className="mono" style={{ margin: 0, color: "var(--steel)" }}>
                    {p.stack.join("  /  ")}
                  </p>
                  <p style={{ margin: 0, display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        Live site
                      </a>
                    )}
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Source on GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
