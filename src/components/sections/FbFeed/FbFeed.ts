export function init(root: HTMLElement) {
  const container = root.querySelector<HTMLElement>(".fbfeed-embed");
  if (!container) return;

  const iframe = container.querySelector<HTMLIFrameElement>("iframe[data-fb-embed]");
  const skeleton = container.querySelector<HTMLElement>(".skeleton");

  if (!iframe) return;

  // Al cargar el iframe, quita el skeleton
  const onLoad = () => {
    if (skeleton && skeleton.parentElement) skeleton.parentElement.removeChild(skeleton);
    iframe.removeEventListener("load", onLoad);
  };
  iframe.addEventListener("load", onLoad);

  // Si por cualquier razón el iframe ya está cargado (navegación bfcache/instant)
  if ((iframe as any).complete) {
    onLoad();
  }
}
