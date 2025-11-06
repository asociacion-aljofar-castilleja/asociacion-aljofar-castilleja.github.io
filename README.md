# 🚀 Proyecto Web Solidario - AlixarCoders

¡Bienvenido/a al proyecto de desarrollo web con **Astro**!  
Este repositorio forma parte de la comunidad **AlixarCoders**.  
Nuestro lema:  
> 🦄 ¡Somos Unicornios! ¡SOMOS FULL STACK WEB DEVELOPERS!

---

## 🧰 Requisitos previos

- Node.js (v18 o superior)
- Git
- Visual Studio Code
- Extensión recomendada: Astro (Language support for Astro)

---

## 🪄 Clonar el repositorio

```bash
git clone https://github.com/<organizacion>/<nombre-del-repo>.git
cd <nombre-del-repo>
```

Reemplaza `<organizacion>` y `<nombre-del-repo>` con el nombre real del repositorio.

### 📦 Instalar dependencias
```bash
npm install
```

### 🧑‍💻 Ejecutar en modo desarrollo
```bash
npm run dev
```

Abre: <http://localhost:4321>

### 🧩 Sincronizar templates/tipos de Astro (content collections)

Siempre que crees o modifiques colecciones de contenido (`src/content/**`) o su configuración, sincroniza los tipos/plantillas de Astro:

```bash
npx astro sync
```

**Consejo:** ejecútalo tras `npm install` o cuando cambies `src/content/config.ts`.

### 🌱 Flujo de ramas (base: `main`)

Cada desarrollador trabajará en su rama *feature* basada en `main`:

```bash
git checkout main
git pull origin main
git checkout -b feature/<tu-nombre-o-descripcion>
```

**Ejemplo:**
```bash
git checkout -b feature/javier-contact-page
```

Usa nombres de rama descriptivos y en minúsculas, separados por guiones.

### 💾 Guardar y publicar tus cambios

```bash
git add .
git commit -m "Añade sección de contacto y sincroniza templates (astro sync)"
git push origin feature/<tu-nombre-o-descripcion>
```

### 🧩 Crear un Pull Request hacia `main`

1. Abre el repositorio en GitHub.  
2. Haz clic en “Compare & pull request”.  
3. Verifica que:  
   - **Base:** `main`  
   - **Compare:** `feature/<tu-nombre-o-descripcion>`  
4. Describe claramente el cambio (qué, por qué, cómo probarlo).  
5. **Create pull request**.

### 🔍 Revisiones y *merge*

Si hay comentarios o cambios en `main`, actualiza tu rama:

```bash
git fetch origin
git checkout feature/<tu-nombre-o-descripcion>
git merge origin/main
# Resuelve conflictos si los hay
git push
```

Una vez aprobado, el PR se integrará en `main`.

### 🧹 Mantener tu entorno al día

```bash
git checkout main
git pull origin main
```

## 💙 AlixarCoders

Innovación, colaboración y código limpio. ¡Somos Unicornios! 🦄

---

## 📁 Estructura del proyecto (resumen)

Dentro de tu proyecto Astro encontrarás estas carpetas y archivos clave:

```text
/
├── LICENSE
├── README.md
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── location/sede.svg
│       └── social-media/*.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout/ (layout principal)
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   └── sections/
│   │       ├── ContactInfo/  ├── FbFeed/      ├── Headquarters/
│   │       ├── Hero/         ├── ImpactStats/ ├── MapEmbed/
│   │       ├── Org/          ├── Partners/    ├── Pillars/
│   │       ├── ProjectsList/ ├── ServicesGrid/├── SocialLinks/
│   │       ├── Timeline/     └── Workshops/
│   ├── content/
│   │   ├── components/**/ (textos por componente en en/es .yaml)
│   │   └── pages/
│   │       ├── en/ (about-us.yaml, contact.yaml, home.yaml, what-we-do.yaml)
│   │       └── es/ (quienes-somos.yaml, contacto.yaml, home.yaml, que-hacemos.yaml)
│   ├── content.config.ts
│   ├── pages/
│   │   ├── index.astro, noticias.astro, participa.astro, transparencia.astro…
│   │   └── en/ (index.astro, news.astro, get-involved.astro, transparency.astro…)
│   ├── scripts/
│   │   ├── app.ts, bootstrap.js
│   │   └── pages/ (lógica específica por página: about-us.ts, home.ts)
│   └── styles/
│       ├── _variables.scss, main.scss
│       └── pages/ (_about-us.scss, _index.scss)
└── tsconfig.json
```

## 🔑 ¿Qué hace cada parte?

- **\`astro.config.mjs\`**  
  Configuración global de Astro (integraciones, alias, base, etc.).

- **\`public/\`**  
  Activos estáticos servidos tal cual (imágenes, favicon, SVG de redes sociales).  
  👉 Accede con rutas absolutas desde las vistas, p. ej. \`/images/social-media/facebook_logo_icon.svg\`.

- **\`src/components/\`**  
  Componentes **UI**:
  - \`layout/\` → Estructura global (Header, Footer, \`BaseLayout.astro\`), estilos SCSS y helpers TS por bloque.
  - \`sections/\` → Secciones reutilizables de página (Hero, MapEmbed, ContactInfo, SocialLinks, etc.).  
    Cada sección sigue patrón **Astro + TS + SCSS** para separación clara de vista, lógica y estilos.

- **\`src/content/\` (Content Collections + i18n)**  
  Fuentes de contenido en **YAML**:
  - \`components/**/en.yaml|es.yaml\` → Textos por componente (copia, labels, descripciones).
  - \`pages/en|es/*.yaml\` → Datos de cada página por idioma.  
  ⚠️ Siempre que cambies colecciones o \`content.config.ts\`, ejecuta:

  ```bash
  npx astro sync
  ```

- **\`src/pages/\`**  
  Rutas del sitio. Astro expone cada \`.astro\` como **ruta** según su nombre:
  - Español en la raíz (\`/index.astro\`, \`/noticias.astro\`, \`/quienes-somos.astro\`, …).
  - Inglés anidado en \`/en/\` (\`/en/index.astro\`, \`/en/news.astro\`, …).
  Estas páginas consumen contenido desde \`src/content/pages/**\` y renderizan secciones desde \`src/components/sections/**\`.

- **\`src/scripts/\`**  
  JS/TS de comportamiento:
  - \`app.ts\` y \`bootstrap.js\` → inicialización global.
  - \`pages/\` → Scripts por página (p. ej. \`home.ts\`, \`about-us.ts\`) para lógica específica y *progressive enhancement*.

- **\`src/styles/\`**  
  SCSS global y por página:
  - \`_variables.scss\` → tokens de diseño (colores, tipografías, spacing).
  - \`main.scss\` → estilos base y layout general.
  - \`pages/**\` → estilos específicos por vista.

- **\`content.config.ts\`**  
  Esquemas/tipos de las colecciones (validación de YAML y tipado DX en el editor).

- **\`package.json\` / \`tsconfig.json\`**  
  Scripts (dev/build/preview/sync), dependencias, configuración TypeScript.

## 🧭 Cómo se resuelven las rutas y los datos

- **Rutas**: Astro busca archivos \`.astro\` dentro de \`src/pages/\`.  
- **Contenido**: Los datos vienen de YAML (\`src/content/**\`) y se inyectan en páginas/sections.  
- **Componentes**: No hay “magia” especial en \`src/components/\`, solo convención para mantener orden.

> En resumen: **páginas** definen rutas y ensamblan **secciones**; los **textos** e **imágenes** viven en \`content/\` y \`public/\`; la **lógica** por sección/página está en \`*.ts\`; los **estilos** en SCSS modulares. ¡Arquitectura limpia y lista para escalar! 💪🦄

## 🧞 Commandos de Astro

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Deseas aprender más?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
