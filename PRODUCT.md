# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Karunesh, an early-career/student developer, for full-time or contract roles.

## Product Purpose

A personal portfolio site supporting an active job search: showcase real skills and real projects, and give recruiters a way to make contact. Success means a recruiter can quickly see what Karunesh has actually built and how to reach him.

## Positioning

An early-career developer with breadth across many stacks and project types (JavaScript/TypeScript, Python, Java, Kotlin, C++), evidenced by a real GitHub account with 33 repositories. Positioning should lean on real, shipped breadth and curiosity rather than fabricated years of experience or invented metrics — the site should read as "early-career, genuinely broad, verifiably real," not "senior generalist."

## Operating Context

Single-page static site (Next.js App Router, React, vanilla CSS), no backend or auth, deployed to Vercel. Content is currently placeholder and is being replaced with real information.

## Capabilities and Constraints

- Static content only; no CMS, no backend. Contact is a mailto link plus a copy-address button (no form).
- Resume lives at `public/Karunesh-A-R-Resume.pdf`; all facts in `src/data/content.ts` come from it or from GitHub.
- GitHub repo list is a snapshot in `src/data/repos.json` (refresh with `gh repo list`).

## Brand Commitments

- Name: Karunesh A R
- GitHub: https://github.com/Karunesh-18, LinkedIn: https://www.linkedin.com/in/karuneshar/
- Contact email: karunesh.ar2024cse@sece.ac.in (from resume)

## Evidence on Hand

- Resume (confirmed): B.E. CSE at Sri Eshwar College of Engineering (CGPA 7.5); Full Stack Developer at EFIQ Solutions since May 2026; MERN internship at Better Tomorrow, March 2026; projects Thiran, HustleGuard AI, RescueIQ; skills incl. AWS, Docker, networking.
- GitHub: 44 repos (43 non-fork). Featured four have live Vercel URLs. VoxMentor description comes from its README.
- Unverified: anything about the non-featured repos beyond name, language and push date.

## Product Principles

1. Never state unverified experience, metrics, or project details as fact — mark placeholders explicitly instead of inventing plausible-sounding numbers.
2. Prefer real, shipped GitHub repos over invented project copy once details are confirmed.
3. Keep the site truthful for a job-search audience — recruiters are the audience of record, so credibility matters more than sounding impressive.
4. Breadth across stacks is the honest positioning for this stage of career, not depth/seniority claims.
