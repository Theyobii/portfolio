# Mi Portafolio Personal (Astro, React & Tailwind CSS)

[![Astro](https://img.shields.io/badge/Astro-B354FF?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS v3](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

> **¡Hola! Soy Theyobii.** Este es el repositorio de mi portafolio web personal, construido para mostrar mis habilidades y proyectos de desarrollo frontend. El sitio está diseñado para ser ultrarrápido y SEO-friendly, aprovechando la arquitectura de "islas" de Astro.

### 🖼️ Previsualización del Sitio

### 🌐 Demo en Vivo

Puedes ver la versión desplegada en:


---

## 🚀 Tecnologías Clave

Este proyecto combina lo mejor del desarrollo web moderno para un rendimiento excepcional:

* **Astro:** Como *framework* principal, para el *Server-Side Rendering* (SSR) y la generación de sitios estáticos, asegurando cero JavaScript por defecto y una velocidad de carga máxima.
* **React:** Se utiliza en componentes específicos ("Astro Islands") donde se requiere interactividad, estado o lógica compleja (ej. el formulario de contacto).
* **Tailwind CSS v3:** Para un diseño rápido, *utility-first* y completamente *responsive*.
---

## ⚙️ Configuración y Desarrollo Local

Sigue estos pasos para obtener una copia del proyecto y ejecutarlo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado:

* [Node.js](https://nodejs.org/en/) (versión 18+)
* npm (viene con Node.js) o yarn / pnpm.

### Instalación

1.  **Clonar el Repositorio:**
    ```bash
    git clone [https://github.com/Theyobii/portfolio.git](https://github.com/Theyobii/portfolio.git)
    cd portfolio
    ```

2.  **Instalar Dependencias:**
    ```bash
    npm install  # o yarn install / pnpm install
    ```

### Ejecutar en Modo Desarrollo

Ejecuta el servidor de desarrollo en modo local. Esto abrirá el sitio en `http://localhost:4321`.

```bash
npm run dev
```
### estructura del proyecto

├── public/
│   ├── tu-foto.jpg           # Archivos estáticos (imágenes, favicons)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx   # Componente React (ej. formulario con estado)
│   │   ├── Header.astro      # Componente Astro (elementos estáticos y de layout)
│   │   └── Card.astro        # Componentes reusables de la interfaz
│   ├── layouts/
│   │   └── Layout.astro      # Estructura principal, meta tags, importación de Tailwind
│   ├── pages/
│   │   └── index.astro       # Página de inicio (donde se combinan Astro y React)
│   └── styles/
│       └── global.css        # Archivo principal para @tailwind directives
├── .gitignore
├── astro.config.mjs          # Archivo de configuración principal (incluye integración de React)
├── package.json
└── tailwind.config.cjs       # Configuración de Tailwind


