import CableField from "@/components/CableField";
import Motion from "@/components/Motion";
import Projects from "@/components/Projects";
import CopyEmail from "@/components/CopyEmail";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { GitHub, LinkedIn, LeetCode, Resume } from "@/components/Icons";
import { person, experience, education, skills, practice } from "@/data/content";

const nav = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "record", label: "Record" },
  { id: "stack", label: "Stack" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

function HeroName({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((c, i) =>
        c === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <span className="hero-char" style={{ display: "inline-block" }}>{c}</span>
          </span>
        ),
      )}
    </>
  );
}

export default function Home() {
  return (
    <>
      <aside className="rail">
        <span className="screw" aria-hidden="true" />
        <nav aria-label="Sections">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              <span className="led" aria-hidden="true" />
              {n.label}
            </a>
          ))}
        </nav>
        <span className="screw" aria-hidden="true" />
      </aside>

      <main className="page">
        <section id="top" style={{ position: "relative", minHeight: "100svh", display: "grid", gridTemplateColumns: "minmax(0,1fr)", alignContent: "end", overflow: "hidden", padding: "clamp(1.25rem,5vw,5rem)", paddingBottom: "clamp(2rem,6vw,5rem)" }}>
          <CableField />
          <div style={{ position: "relative", display: "grid", gap: "2rem", minWidth: 0 }}>
            <h1 className="display hero-name" style={{ margin: 0, lineHeight: 0.8 }} aria-label={person.name}>
              <span aria-hidden="true"><HeroName text="Karunesh" /></span>
              <br />
              <span aria-hidden="true" style={{ color: "var(--steel)" }}><HeroName text="A R" /></span>
            </h1>
            <div className="hero-fade" style={{ display: "flex", flexWrap: "wrap", gap: "2rem 3rem", alignItems: "end", justifyContent: "space-between" }}>
              <p style={{ margin: 0, maxWidth: "30rem", fontSize: "1.35rem", textWrap: "balance" }}>
                CSE student and full stack developer. I write React, Node and FastAPI apps, and I deploy them myself.
              </p>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                <a className="plug" href={person.resume} target="_blank" rel="noreferrer">
                  <span className="body">Resume</span>
                  <span className="tip" />
                </a>
                <a className="plug alt" href={`mailto:${person.email}`}>
                  <span className="body">Email</span>
                  <span className="tip" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="unit">
          <div className="about-grid">
            <div className="reveal about-photo">
              <Image src="/placeholders/portrait.svg" alt="Portrait of Karunesh" width={1000} height={1250} priority />
            </div>
            <div className="reveal" style={{ display: "grid", gap: "1.25rem", alignContent: "end", maxWidth: "38rem" }}>
              <h2 className="display" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: 0 }}>About me</h2>
              <p style={{ margin: 0, textWrap: "pretty" }}>
                I study computer science at Sri Eshwar College of Engineering and work as a full stack developer at EFIQ Solutions.
              </p>
              <p style={{ margin: 0, color: "var(--steel)", textWrap: "pretty" }}>
                Most of what I know about running software came from Thiran, the platform for a big technical event. I put it on a server with HTTPS, then had to keep it up while people were signing in.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="unit">
          <h2 className="display reveal" style={{ fontSize: "clamp(3rem,9vw,8rem)", margin: "0 0 3rem" }}>
            Four projects, all live
          </h2>
          <Projects />
        </section>

        <section id="record" className="unit">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
            <div className="reveal">
              <h2 className="display" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: "0 0 2rem" }}>Work</h2>
              {experience.map((e) => (
                <div key={e.role} style={{ marginBottom: "2.25rem" }}>
                  <p className="mono" style={{ margin: 0, color: "var(--steel)" }}>{e.when}</p>
                  <h3 style={{ margin: "0.3rem 0 0.2rem", fontSize: "1.4rem", fontWeight: 600 }}>{e.role}</h3>
                  <p style={{ margin: "0 0 0.6rem", color: "var(--steel)" }}>{e.org}</p>
                  <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.35rem", maxWidth: "36rem" }}>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="reveal">
              <h2 className="display" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: "0 0 2rem" }}>Education</h2>
              <table className="data">
                <tbody>
                  {education.map((e) => (
                    <tr key={e.what}>
                      <td className="mono" style={{ color: "var(--steel)", whiteSpace: "nowrap" }}>{e.when}</td>
                      <td>
                        {e.what}
                        <br />
                        <span style={{ color: "var(--steel)" }}>{e.where}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="display" style={{ fontSize: "2rem", margin: "3rem 0 1rem" }}>Practice</h3>
              <table className="data">
                <tbody>
                  {practice.map((p) => (
                    <tr key={p.what}>
                      <td>{p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.what}</a> : p.what}</td>
                      <td className="mono" style={{ color: "var(--steel)" }}>{p.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="stack" className="unit">
          <h2 className="display reveal" style={{ fontSize: "clamp(3rem,9vw,8rem)", margin: "0 0 3rem" }}>
            Tools I use
          </h2>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 24rem), 1fr))", columnGap: "4rem" }}>
            <table className="data" style={{ gridColumn: "1 / -1" }}>
              <tbody>
                {skills.map((s) => (
                  <tr key={s.layer}>
                    <td style={{ width: "9rem" }}><span className="label-strip">{s.layer}</span></td>
                    <td style={{ fontSize: "1.1rem" }}>{s.items.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="life" className="unit">
          <h2 className="display reveal" style={{ fontSize: "clamp(3rem,9vw,8rem)", margin: "0 0 3rem" }}>
            Off the keyboard
          </h2>
          <Gallery />
        </section>

        <section id="contact" className="unit" style={{ minHeight: "80svh", display: "grid", alignContent: "end" }}>
          <h2 className="display reveal" style={{ fontSize: "clamp(4rem,15vw,15rem)", margin: "0 0 2.5rem", lineHeight: 0.82 }}>
            Looking for work
          </h2>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", marginBottom: "3rem" }}>
            <a className="plug" href={`mailto:${person.email}`}>
              <span className="body">{person.email}</span>
              <span className="tip" />
            </a>
            <CopyEmail email={person.email} />
          </div>
          <p className="mono reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem", margin: 0 }}>
            <a className="icon-link" href={person.github} target="_blank" rel="noreferrer"><GitHub />GitHub</a>
            <a className="icon-link" href={person.linkedin} target="_blank" rel="noreferrer"><LinkedIn />LinkedIn</a>
            <a className="icon-link" href={person.leetcode} target="_blank" rel="noreferrer"><LeetCode />LeetCode</a>
            <a className="icon-link" href={person.resume} target="_blank" rel="noreferrer"><Resume />Resume (PDF)</a>
          </p>
        </section>
      </main>
      <Motion />
    </>
  );
}
