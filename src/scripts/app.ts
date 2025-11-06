/* ========= Tema claro/oscuro ========= */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Código TS asociado al layout
// 1) BaseLayout
import { init as initBaseLayout } from "../components/layout/BaseLayout/BaseLayout";
document.querySelectorAll<HTMLElement>('[data-module="BaseLayout"]').forEach(initBaseLayout);

// 2) Header
// import the correct member from Header module
import { initHeader } from "../components/layout/Header/Header";
const headerEl = document.querySelector<HTMLElement>('[data-module="Header"]');
if (headerEl) initHeader(headerEl);

// 3) Footer
import { init as initFooter } from "../components/layout/Footer/Footer";
document.querySelectorAll<HTMLElement>('[data-module="Footer"]').forEach(initFooter);

// Código TS asociado a secciones
// 4) Hero
import { init as initHero } from "../components/sections/Hero/Hero";
document.querySelectorAll<HTMLElement>('[data-module="Hero"]').forEach(initHero);

// 5) Headquarters
import { init as initHQ } from "../components/sections/Headquarters/Headquarters";
document.querySelectorAll<HTMLElement>('[data-module="Headquarters"]').forEach(initHQ);

// 6) ImpactStats
import { init as initImpact } from "../components/sections/ImpactStats/ImpactStats";
document.querySelectorAll<HTMLElement>('[data-module="ImpactStats"]').forEach(initImpact);

// 7) Partners
import { init as initPartners } from "../components/sections/Partners/Partners";
document.querySelectorAll<HTMLElement>('[data-module="Partners"]').forEach(initPartners);

// 8) WhatWeDo
import { init as initWhatWeDo } from "../components/sections/WhatWeDo/WhatWeDo";
document.querySelectorAll<HTMLElement>('[data-module="WhatWeDo"]').forEach(initWhatWeDo);

// 9) FbFeed
import { init as initFbFeed } from "../components/sections/FbFeed/FbFeed";
document.querySelectorAll<HTMLElement>('[data-module="FbFeed"]').forEach((el) => initFbFeed(el));


// Código TS asociado a quienes somos
import { init as initPillars } from "../components/sections/Pillars/Pillars";
document.querySelectorAll<HTMLElement>('[data-module="Pillars"]').forEach(initPillars);

import { init as initTimeline } from "../components/sections/Timeline/Timeline";
document.querySelectorAll<HTMLElement>('[data-module="Timeline"]').forEach(initTimeline);   

import { init as initOrgList } from "../components/sections/Org/Org";
document.querySelectorAll<HTMLElement>('[data-module="OrgList"]').forEach(initOrgList);

import { init as initServices } from "../components/sections/ServicesGrid/ServicesGrid";
document.querySelectorAll<HTMLElement>('[data-module="ServicesGrid"]').forEach(initServices);

import { init as initProjects } from "../components/sections/ProjectsList/ProjectsList";
document.querySelectorAll<HTMLElement>('[data-module="ProjectsList"]').forEach(initProjects);

import { init as initWorkshops } from "../components/sections/Workshops/Workshops";
document.querySelectorAll<HTMLElement>('[data-module="Workshops"]').forEach(initWorkshops);


// Código TS asociado a la página de contacto
import { init as initContactInfo } from "../components/sections/ContactInfo/ContactInfo";
document.querySelectorAll<HTMLElement>('[data-module="ContactInfo"]').forEach(initContactInfo);

import { init as initMapEmbed } from "../components/sections/MapEmbed/MapEmbed";
document.querySelectorAll<HTMLElement>('[data-module="MapEmbed"]').forEach(initMapEmbed);

import { init as initSocialLinks } from "../components/sections/SocialLinks/SocialLinks";
document.querySelectorAll<HTMLElement>('[data-module="SocialLinks"]').forEach(initSocialLinks);






