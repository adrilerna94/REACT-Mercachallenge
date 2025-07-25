// next.config.js

// ✅ Configuración de Next.js para permitir imágenes externas optimizadas
// ----------------------------------------------------------------------------
// 🖼️ Next.js optimiza automáticamente las imágenes usando su componente `Image`.
// 🔐 Por razones de seguridad, solo permite cargar imágenes desde dominios autorizados.
//
// 🌐 Estás usando imágenes desde: https://cdn.dummyjson.com
// ⚠️ Si no agregás este dominio, vas a recibir un error como:
//     "Invalid src prop on `next/image`, hostname not configured..."
//
// 🛠️ Solución: agregar el dominio externo en `images.domains`
// ---------------------------------------------------------------------------



/*

versión CommonJs--> next.config.js
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // agregá el dominio aquí
  },
};

module.exports = nextConfig;

*/
// versión module

// ✅ next.config.js — Compatible con CommonJS y Turbopack

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

module.exports = nextConfig;