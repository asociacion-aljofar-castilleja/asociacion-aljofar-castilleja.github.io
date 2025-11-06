export function init(root: HTMLElement) {
  const bg = root.querySelector<HTMLElement>(".hero__bg");
  if (!bg) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let ticking = false;

  const setParallax = (y: number) => {
    // factor 0.2 -> ajusta si quieres más/menos efecto
    const value = prefersReduced.matches ? 0 : Math.round(y * 0.2);
    root.style.setProperty("--hero-parallax", `${value}px`);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setParallax(window.scrollY || 0);
      ticking = false;
    });
  };

  // initial
  setParallax(window.scrollY || 0);

  // listeners
  window.addEventListener("scroll", onScroll, { passive: true });
  const onChange = () => setParallax(window.scrollY || 0);
  prefersReduced.addEventListener("change", onChange);

  // cleanup (opcional si usas islands; aquí lo dejamos por si navegas con frameworks que rehídratan)
  (root as any)._cleanup = () => {
    window.removeEventListener("scroll", onScroll);
    prefersReduced.removeEventListener("change", onChange);
  };
}
