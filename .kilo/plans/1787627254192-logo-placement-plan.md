# Plan: Auditoría y correcciones front-end

## Hallazgos de auditoría

### SEO / Metadatos

- `lang="en"` en `src/routes/__root.tsx:112` debería ser `"es"` para contenido en español.
- Falta `<link rel="canonical">` en las rutas.
- Falta `lang="es"` y mejoras de accesibilidad básica.

### Accesibilidad

- No hay skip link para navegación por teclado.
- El nav no tiene `aria-label`.
- Los íconos de redes tienen `aria-label` (bien), pero el logo del header no tiene `aria-label` explícito (el alt está, pero el enlace no describe destino).

### UX / Diseño

- Header fixed sin `backdrop-blur`; sobre fondos claros puede perder legibilidad.
- El botón del formulario "Escribir por WhatsApp" es un `<a>` dentro de un `<form>`, lo cual es confuso semánticamente.
- Footer sin enlace al inicio.
- Algunas imágenes above-the-fold sin `loading="lazy"` (correcto), pero faltan `fetchpriority="high"` en el hero.

### Formulario

- Sin `autoComplete`, sin validación y sin `required`.
- El `onSubmit` solo previene default; no hay feedback ni envío real.

### Imágenes

- Falta `fetchpriority="high"` en hero.
- Varias secciones con imágenes estáticas podrían usar `sizes` para optimización (opcional).

## Acciones propuestas

1. **Idioma**: cambiar `lang="en"` a `lang="es"` en `src/routes/__root.tsx`.
2. **Skip link**: agregar en `src/routes/__root.tsx` un skip link oculto hasta focus.
3. **Header**: agregar `backdrop-blur` al header (`src/routes/index.tsx:186`).
4. **Formulario**: agregar `autoComplete`, `required` y feedback visual básico en `src/routes/index.tsx:560-595`.
5. **Footer**: agregar enlace al inicio con `href="#inicio"` en `src/routes/index.tsx:601-613`.
6. **Hero**: agregar `fetchpriority="high"` en `src/routes/index.tsx:236-242`.
7. **Nav**: agregar `aria-label="Navegación principal"` en `src/routes/index.tsx:188`.
8. **Canonical**: agregar `<link rel="canonical" href="/" />` en `src/routes/index.tsx`.

## Validación

- Recargar en `http://localhost:8081/` y verificar idioma, navegación por teclado, legibilidad del header y formulario.
