import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number;
    stagger?: number;
    duration?: number;
    delay?: number;
    start?: string;
  }
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    const anim = gsap.from(elements, {
      y: options?.y ?? 40,
      opacity: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.1,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: options?.start ?? "top 80%",
        once: true,
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === containerRef.current) t.kill();
      });
    };
  }, [selector, options?.y, options?.stagger, options?.duration, options?.delay, options?.start]);

  return containerRef;
}
