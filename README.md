# Front-End Test Práctico – MercaCommerce

¡Bienvenido/a al test práctico para aspirantes al área de Front-End de **MercaCommerce**!

Este proyecto consiste en desarrollar una pequeña aplicación basada en el diseño y requerimientos funcionales provistos. La aplicación simula el flujo de búsqueda y visualización de productos en un ecommerce.

---

## 🛠 Stack Tecnológico

Esta implementación utiliza el siguiente stack:

- **Cliente:**
  - React
  - Next.js
  - JavaScript + TypeScript
  - HTML & CSS Modules / Sass

- **Servidor:**
  - Node.js (>= 16)
  - Express.js
  - API RESTful

---

## 🎯 Objetivos del Proyecto

Desarrollar una aplicación compuesta por tres vistas principales:

1. **Caja de Búsqueda** (`/`)
2. **Resultados de Búsqueda** (`/items?search=...`)
3. **Detalle del Producto** (`/items/:id`)

La aplicación debe ser:

- Usable y accesible
- Optimizada para SEO (gracias a Next.js)
- Rápida y performante
- Escalable y mantenible

---

## 📄 Requerimientos Técnicos

### Endpoints Backend

- **GET `/api/items?q=:query`**
  - Consulta a: `https://api.mercadolibre.com/sites/MLA/search?q=:query`
  - Devuelve:
    ```json
    {
      "author": {
        "name": "TuNombre",
        "lastname": "TuApellido"
      },
      "categories": ["Electrónica", "Celulares", "Smartphones"],
      "items": [
        {
          "id": "MLA12345",
          "title": "iPhone 11",
          "price": {
            "currency": "ARS",
            "amount": 99999,
            "decimals": 0
          },
          "picture": "url_imagen",
          "condition": "new",
          "free_shipping": true
        }
      ]
    }
    ```

- **GET `/api/items/:id`**
  - Consulta a:
    - `https://api.mercadolibre.com/items/:id`
    - `https://api.mercadolibre.com/items/:id/description`
  - Devuelve:
    ```json
    {
      "author": {
        "name": "TuNombre",
        "lastname": "TuApellido"
      },
      "item": {
        "id": "MLA12345",
        "title": "iPhone 11",
        "price": {
          "currency": "ARS",
          "amount": 99999,
          "decimals": 0
        },
        "picture": "url_imagen",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 20,
        "description": "Descripción larga del producto"
      }
    }
    ```

---

## 🧭 Navegación

- `/` → Caja de Búsqueda
- `/items?search=ipad` → Resultados de búsqueda (solo mostrar 4 resultados)
- `/items/MLA12345` → Detalle del producto

---

## 📌 Consideraciones

- El **breadcrumb** debe construirse a partir de:
  - La categoría con más resultados (en búsqueda)
  - La categoría del ítem (en detalle)
- No es necesario implementar paginación ni filtros
- Puedes usar la imagen 90x90 provista por la API (aunque se vea pixelada)
- Asegúrate de firmar todas las respuestas con tu nombre y apellido en el campo `author`

---

## 🚀 Cómo correr el proyecto

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/mercacommerce-challenge.git
cd mercacommerce-challenge

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000
