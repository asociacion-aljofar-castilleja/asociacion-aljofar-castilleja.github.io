export function init(root: HTMLElement) {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const carousels = Array.from(root.querySelectorAll<HTMLElement>(".hq-carousel"));

  const pauseIfNeeded = () => {
    if (!reduceMotion.matches) return;
    // Si usas bootstrap.bundle en app.ts, la clase estará en window.bootstrap
    const bs = (window as any).bootstrap;
    carousels.forEach((el) => {
      if (bs?.Carousel) {
        const inst = bs.Carousel.getOrCreateInstance(el);
        inst.pause();
      }
    });
  };

  pauseIfNeeded();
  reduceMotion.addEventListener("change", pauseIfNeeded);
}
