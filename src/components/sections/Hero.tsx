"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/content";
import { registerGsap, gsap } from "@/lib/gsap";
import Magnetic from "@/components/motion/Magnetic";
import Button from "@/components/ui/Button";

const previews = [
  { name: "EazyShop", type: "Commerce, end to end", image: "/images/eazyshop/eazyshop_home.png", href: "https://django-react-ecommerce-platform.vercel.app/", position: "left" },
  { name: "CYPHR", type: "Your documents. Grounded answers.", image: "/images/cyphr/light/6_chat_response.png", href: "https://cyphr-rag.vercel.app/", position: "center" },
  { name: "AI House Price", type: "Machine learning, made usable", image: "/images/aihouseprice/home.png", href: "https://aihouseprice.vercel.app/", position: "right" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from("[data-intro]", { y: 44, opacity: 0, duration: 0.85, stagger: 0.09, ease: "power3.out" });
        gsap.from(".studio-preview", {
          y: 140, opacity: 0, scale: 0.8, duration: 1.25, stagger: 0.12,
          delay: 0.25, ease: "power3.out", clearProps: "transform,opacity",
        });
        gsap.to(".studio-flight-left", {
          xPercent: -16, y: -55, rotation: -5, ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.35 },
        });
        gsap.to(".studio-flight-right", {
          xPercent: 16, y: -55, rotation: 5, ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.35 },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="top" className="studio-hero">
      <div className="studio-copy">
        <div data-intro className="studio-availability"><span /> Open to full-time engineering roles</div>
        <p data-intro className="studio-byline">VITTAL J G — FULL-STACK ENGINEER</p>
        <h1 data-intro>Big ideas.<br /><span className="studio-highlight">Built for real.</span></h1>
        <p data-intro className="studio-description">Thoughtful interfaces. Serious engineering. I build web applications and AI systems — from the first database table to the final interaction.</p>
        <div data-intro className="studio-actions">
          <Magnetic><Button href="#work" variant="accent" className="px-7 py-3.5">Explore my work <ArrowDown size={16} /></Button></Magnetic>
          <Button href={PROFILE.resume} external variant="outline" className="px-7 py-3.5">View résumé <ArrowUpRight size={16} /></Button>
        </div>
      </div>

      <div className="studio-showcase" aria-label="Explore three featured projects">
        <div className="studio-disc" aria-hidden />
        <span className="studio-side-note" aria-hidden>IDEA → INTERFACE → IMPACT</span>
        {previews.map((preview) => (
          <div key={preview.name} className={`studio-flight studio-flight-${preview.position}`}>
            <a className="studio-preview" href={preview.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${preview.name} live project`}>
              <div className="studio-browser-bar"><span className="studio-browser-dots" aria-hidden>● ● ●</span><span>{preview.name}</span><ArrowUpRight size={13} /></div>
              <img src={preview.image} alt={`${preview.name} application preview`} width={960} height={600} decoding="async" loading={preview.position === "center" ? "eager" : "lazy"} />
              <div className="studio-preview-caption"><strong>{preview.name}</strong><span>{preview.type}</span></div>
            </a>
          </div>
        ))}
        <span className="studio-sticker" aria-hidden>Not just<br /><strong>pretty pixels.</strong><ArrowUpRight size={22} /></span>
      </div>
      <div className="studio-bottom"><span>BASED IN BENGALURU · BUILDING END TO END</span><a href="#work">Scroll to the details <ArrowDown size={13} /></a></div>
    </section>
  );
}
