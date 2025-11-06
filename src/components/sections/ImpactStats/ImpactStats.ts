function format(n: number, locale: string) {
  return new Intl.NumberFormat(locale).format(n);
}

function animateTo(el: HTMLElement, target: number, locale: string, duration = 1200) {
  // Respeta reduced motion
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    el.textContent = format(target, locale);
    return;
  }

  const start = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const current = Math.round(target * eased);
    el.textContent = format(current, locale);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = format(target, locale);
  };
  requestAnimationFrame(tick);
}

export function init(root: HTMLElement) {
  const cards = Array.from(root.querySelectorAll<HTMLElement>(".impact-card"));
  if (!cards.length) return;

  const once = new WeakSet<Element>();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || once.has(e.target)) return;
        once.add(e.target);

        const counter = e.target.querySelector<HTMLElement>(".impact-counter");
        if (!counter) return;

        const target = Number(counter.getAttribute("data-target") || "0");
        const locale = counter.getAttribute("data-locale") || "es-ES";
        if (!Number.isFinite(target)) {
          counter.textContent = "0";
          return;
        }
        animateTo(counter, target, locale);
      });
    },
    { threshold: 0.35 }
  );

  cards.forEach((c) => io.observe(c));
}
