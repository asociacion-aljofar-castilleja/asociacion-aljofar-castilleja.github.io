// src/components/layout/Header/Header.ts
type ThemeValue = "light" | "dark" | "auto";

function resolveTheme(v: ThemeValue): "light" | "dark" {
  if (v === "auto") {
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return v;
}

function setThemeAttr(theme: ThemeValue) {
  document.documentElement.setAttribute("data-bs-theme", resolveTheme(theme));
}

function updateThemeIcon(theme: ThemeValue) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  icon.className = "bi";
  if (theme === "dark") icon.classList.add("bi-moon");
  else if (theme === "light") icon.classList.add("bi-sun");
  else icon.classList.add("bi-circle-half");
}

function markActiveTheme(theme: ThemeValue) {
  document.querySelectorAll<HTMLElement>("[data-theme-value]").forEach((el) => {
    el.classList.toggle("active", el.dataset.themeValue === theme);
  });
}

function applyTheme(theme: ThemeValue) {
  setThemeAttr(theme);
  updateThemeIcon(theme);
  markActiveTheme(theme);
  localStorage.setItem("theme", theme);
}

function readSavedTheme(): ThemeValue {
  const raw = localStorage.getItem("theme") as ThemeValue | null;
  return raw === "light" || raw === "dark" || raw === "auto" ? raw : "auto";
}

function applySavedFont() {
  const saved = localStorage.getItem("fontSizePx");
  if (saved) document.documentElement.style.setProperty("--base-font-size", `${parseInt(saved, 10)}px`);
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function initHeader(root: HTMLElement) {
  // Inicial: tema + fuente
  const initialTheme = readSavedTheme();
  applyTheme(initialTheme);
  applySavedFont();

  // Reaccionar a cambios del sistema cuando estamos en auto
  const prefersDark = matchMedia("(prefers-color-scheme: dark)");
  const onPrefChange = () => {
    if (readSavedTheme() === "auto") applyTheme("auto");
  };
  prefersDark.addEventListener("change", onPrefChange);

  // Delegación de clicks
  root.addEventListener("click", (e) => {
    const target = e.target as Element | null;
    if (!target) return;

    // Tema
    const themeBtn = target.closest<HTMLElement>("[data-theme-value]");
    if (themeBtn) {
      const val = themeBtn.getAttribute("data-theme-value") as ThemeValue | null;
      if (val && (val === "light" || val === "dark" || val === "auto")) {
        applyTheme(val);
      }
      return;
    }

    // Tipografía
    const fontBtn = target.closest<HTMLElement>("[data-font]");
    if (fontBtn) {
      const key = "fontSizePx";
      const steps = [15, 16, 18, 20];
      const base = 16;
      let current = parseInt(localStorage.getItem(key) || String(base), 10);
      if (!steps.includes(current)) current = base;

      const action = fontBtn.dataset.font as "dec" | "inc" | "reset" | undefined;
      if (action === "reset") {
        current = base;
      } else if (action === "inc" || action === "dec") {
        const delta = action === "inc" ? +1 : -1;
        const idx = steps.indexOf(current);
        const nextIdx = clamp(idx + delta, 0, steps.length - 1);
        current = steps[nextIdx];
      }
      localStorage.setItem(key, String(current));
      document.documentElement.style.setProperty("--base-font-size", `${current}px`);
    }
  });
}
