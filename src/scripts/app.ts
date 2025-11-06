// src/scripts/app.ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// --- módulos propios ---
import { init as initBaseLayout } from '../components/layout/BaseLayout/BaseLayout';
import { initHeader } from '../components/layout/Header/Header';
import { init as initFooter } from '../components/layout/Footer/Footer';

import { init as initHero } from '../components/sections/Hero/Hero';
import { init as initHQ } from '../components/sections/Headquarters/Headquarters';
import { init as initImpact } from '../components/sections/ImpactStats/ImpactStats';
import { init as initPartners } from '../components/sections/Partners/Partners';
import { init as initWhatWeDo } from '../components/sections/WhatWeDo/WhatWeDo';
import { init as initFbFeed } from '../components/sections/FbFeed/FbFeed';
import { init as initPillars } from '../components/sections/Pillars/Pillars';
import { init as initTimeline } from '../components/sections/Timeline/Timeline';
import { init as initOrgList } from '../components/sections/Org/Org';
import { init as initServices } from '../components/sections/ServicesGrid/ServicesGrid';
import { init as initProjects } from '../components/sections/ProjectsList/ProjectsList';
import { init as initWorkshops } from '../components/sections/Workshops/Workshops';

import { init as initContactInfo } from '../components/sections/ContactInfo/ContactInfo';
import { init as initMapEmbed } from '../components/sections/MapEmbed/MapEmbed';
import { init as initSocialLinks } from '../components/sections/SocialLinks/SocialLinks';

function initAll() {
  document.querySelectorAll<HTMLElement>('[data-module="BaseLayout"]').forEach(initBaseLayout);

  const headerEl = document.querySelector<HTMLElement>('[data-module="Header"]');
  if (headerEl) initHeader(headerEl);

  document.querySelectorAll<HTMLElement>('[data-module="Footer"]').forEach(initFooter);

  document.querySelectorAll<HTMLElement>('[data-module="Hero"]').forEach(initHero);
  document.querySelectorAll<HTMLElement>('[data-module="Headquarters"]').forEach(initHQ);
  document.querySelectorAll<HTMLElement>('[data-module="ImpactStats"]').forEach(initImpact);
  document.querySelectorAll<HTMLElement>('[data-module="Partners"]').forEach(initPartners);
  document.querySelectorAll<HTMLElement>('[data-module="WhatWeDo"]').forEach(initWhatWeDo);
  document.querySelectorAll<HTMLElement>('[data-module="FbFeed"]').forEach(el => initFbFeed(el));

  document.querySelectorAll<HTMLElement>('[data-module="Pillars"]').forEach(initPillars);
  document.querySelectorAll<HTMLElement>('[data-module="Timeline"]').forEach(initTimeline);
  document.querySelectorAll<HTMLElement>('[data-module="OrgList"]').forEach(initOrgList);
  document.querySelectorAll<HTMLElement>('[data-module="ServicesGrid"]').forEach(initServices);
  document.querySelectorAll<HTMLElement>('[data-module="ProjectsList"]').forEach(initProjects);
  document.querySelectorAll<HTMLElement>('[data-module="Workshops"]').forEach(initWorkshops);

  document.querySelectorAll<HTMLElement>('[data-module="ContactInfo"]').forEach(initContactInfo);
  document.querySelectorAll<HTMLElement>('[data-module="MapEmbed"]').forEach(initMapEmbed);
  document.querySelectorAll<HTMLElement>('[data-module="SocialLinks"]').forEach(initSocialLinks);
}

// Ejecuta cuando el DOM esté listo…
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => queueMicrotask(initAll), { once: true });
} else {
  queueMicrotask(initAll);
}

// …y también tras navegación con View Transitions (Astro)
document.addEventListener('astro:page-load', () => queueMicrotask(initAll));
