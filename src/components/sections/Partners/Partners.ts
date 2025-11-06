export function init(root: HTMLElement) {
  // Nada crítico que hacer: el pause on hover/focus lo resuelve CSS.
  // Si quieres ajustar la velocidad según cantidad de logos, podrías:
  const marquee = root.querySelector<HTMLElement>(".partners-marquee");
  if (!marquee) return;

  const items = marquee.querySelectorAll(".partners-marquee__item").length;
  // Heurística: más items => algo más de velocidad
  const base = 40; // segundos
  const speed = Math.max(20, Math.min(60, base + (items - 12)));
  marquee.style.setProperty("--speed", `${speed}s`);
}
