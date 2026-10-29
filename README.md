# Cofradía de San Crispín y San Crispiniano

Web de la cofradía, construida con Astro. Incluye las páginas de inicio, cofradía, historia, hazte hermano y contacto. El portal es un enlace directo al área privada de tesorería.

## Desarrollo

```sh
npm install
npm run dev
```

El servidor arranca en `http://localhost:4321`.

## Configuración

Los datos de contacto y el enlace del portal están en `src/config.ts`:

```ts
export const site = {
  name: 'Cofradía de San Crispín y San Crispiniano',
  city: 'León',
  email: 'sancrispinleon@hotmail.com',
  instagram: 'https://www.instagram.com/sancrispinleon/',
  facebook: 'https://www.facebook.com/sancrispinleon',
  portalUrl: 'https://adminsancrispin.adiezdev.duckdns.org/tesoreria',
};
```

El enlace del portal se usa directamente en el menú, el pie, la portada y el contacto.

## Contenido

- El escudo oficial está en `public/escudo.webp`; el favicon, en `public/favicon.png`.
- La ficha de alta de hermano está en `public/ficha-hermano.pdf`.
- La portada de la *Regla y Hordenanza* está en `public/reglas-antiguas.jpg` y los vídeos del Corpus en `public/videos/`.
- Los textos históricos son una síntesis divulgativa basada en la tradición y en la bibliografía sobre la cofradía de León. Conviene revisarlos con la secretaría antes de publicar.
- Las fechas de agenda de la portada son orientativas. Actualízalas cada año en `src/pages/index.astro`.

## Producción

```sh
npm run build
npm run preview
```

El resultado se genera en `dist/`.
