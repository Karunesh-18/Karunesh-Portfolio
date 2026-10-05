"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Smooth scroll, hero name entrance, reveals, cable draw-in, rail LED tracking.
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    // rail LED follows the section in view (works with or without motion)
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".rail a[href^='#']"));
    const sections = links.map((a) => document.querySelector(a.getAttribute("href")!)).filter(Boolean) as Element[];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((l) => l.setAttribute("aria-current", String(l.getAttribute("href") === `#${e.target.id}`)));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    if (reduced) return () => spy.disconnect();

    document.documentElement.classList.add("js");
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    links.forEach((a) =>
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        lenis.scrollTo(a.getAttribute("href")!, { offset: 0, duration: 1.2 });
      }),
    );

    const ctx = gsap.context(() => {
      gsap.from(".hero-char", {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.035,
        delay: 0.15,
      });
      gsap.from(".hero-fade", { opacity: 0, y: 16, duration: 0.9, ease: "expo.out", stagger: 0.12, delay: 0.7 });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".cable").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      spy.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
