import CableField from "@/components/CableField";
import Motion from "@/components/Motion";
import Projects from "@/components/Projects";
import CopyEmail from "@/components/CopyEmail";
import repos from "@/data/repos.json";
import { person, experience, education, skills, practice, certificates } from "@/data/content";

const nav = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "record", label: "Record" },
  { id: "stack", label: "Stack" },
  { id: "repos", label: "Repos" },
  { id: "contact", label: "Contact" },
];

const own = repos.filter((r) => !r.fork).sort((a, b) => (a.pushed < b.pushed ? 1 : -1));

const langCount = own.reduce<Record<string, number>>((acc, r) => {
  if (r.lang) acc[r.lang] = (acc[r.lang] ?? 0) + 1;
  return acc;
}, {});
const langs = Object.entries(langCount).sort((a, b) => b[1] - a[1]);
const langTotal = langs.reduce((n, [, c]) => n + c, 0);
const tints = ["var(--cobalt)", "var(--orange)", "var(--yellow)", "var(--green)"];

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
                Full stack developer. I build the app, then get it running on a server people can reach.
              </p>
              <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                <a className="plug" href={person.resume} download>
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

        <section id="work" className="unit">
          <h2 className="display reveal" style={{ fontSize: "clamp(3rem,9vw,8rem)", margin: "0 0 3rem" }}>
            Four things I built and deployed
          </h2>
          <Projects />
        </section>

        <section id="record" className="unit">
          <div style={{ display: "grid", gap: "4rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))" }}>
            <div className="reveal">
              <h2 className="display" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: "0 0 2rem" }}>Where I work</h2>
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
              <h2 className="display" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", margin: "0 0 2rem" }}>Where I study</h2>
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
                      <td className="mono" style={{ whiteSpace: "nowrap" }}>{e.score}</td>
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
            What I plug in
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
          <h3 className="display reveal" style={{ fontSize: "2rem", margin: "3.5rem 0 1rem" }}>Certificates</h3>
          <ul className="reveal" style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.4rem" }}>
            {certificates.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>

        <section id="repos" className="unit">
          <h2 className="display reveal" style={{ fontSize: "clamp(3rem,9vw,8rem)", margin: "0 0 1.25rem" }}>
            {own.length} repos, all public
          </h2>
          <p className="reveal" style={{ maxWidth: "36rem", color: "var(--steel)", margin: "0 0 2.5rem" }}>
            Coursework, hackathon attempts, small tools and the projects above. Most small ones have no write-up yet, so the table lists only what GitHub shows: name, main language, last push.
          </p>
          <div className="reveal" role="img" aria-label={`Main language across ${langTotal} repos: ${langs.map(([l, c]) => `${l} ${c}`).join(", ")}`} style={{ display: "flex", height: 18, borderRadius: 2, overflow: "hidden", marginBottom: "0.75rem", gap: 2 }}>
            {langs.map(([l, c], i) => (
              <span key={l} style={{ flex: c, background: i < 4 ? tints[i] : "var(--steel-dim)", opacity: i < 4 ? 1 : 0.8 - Math.min(i - 4, 5) * 0.1 }} />
            ))}
          </div>
          <p className="mono reveal" style={{ color: "var(--steel)", margin: "0 0 2.5rem", display: "flex", flexWrap: "wrap", gap: "0.4rem 1.2rem" }}>
            {langs.map(([l, c]) => <span key={l}>{l} {c}</span>)}
          </p>
          <div className="reveal" style={{ overflowX: "auto" }}>
            <table className="data mono">
              <thead>
                <tr><th>Repo</th><th>Language</th><th>Last push</th><th>Live</th></tr>
              </thead>
              <tbody>
                {own.map((r) => (
                  <tr key={r.name}>
                    <td><a href={r.url} target="_blank" rel="noreferrer">{r.name}</a></td>
                    <td style={{ color: "var(--steel)" }}>{r.lang ?? "n/a"}</td>
                    <td style={{ color: "var(--steel)" }}>{r.pushed}</td>
                    <td>{r.live ? <a href={r.live} target="_blank" rel="noreferrer">open</a> : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="unit" style={{ minHeight: "80svh", display: "grid", alignContent: "end" }}>
          <h2 className="display reveal" style={{ fontSize: "clamp(4rem,15vw,15rem)", margin: "0 0 2.5rem", lineHeight: 0.82 }}>
            Open to roles
          </h2>
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", marginBottom: "3rem" }}>
            <a className="plug" href={`mailto:${person.email}`}>
              <span className="body">{person.email}</span>
              <span className="tip" />
            </a>
            <CopyEmail email={person.email} />
          </div>
          <p className="mono reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem", margin: 0 }}>
            <a href={person.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={person.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a href={person.resume} download>Resume (PDF)</a>
          </p>
        </section>
      </main>
      <Motion />
    </>
  );
}
