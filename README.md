# Hola! 👋

# Tecnologías utilizadas

- Next.js
- Tailwindcss
- Sweetalert2

##  Guía de despliegue

- Asegúrate de que tu proyecto Next.js esté listo para el despliegue. Ejecuta el siguiente comando para construir la versión optimizada de producción de tu aplicación:

```bash
  npm run dev
```
- Selección de Plataforma de Despliegue:

Hay varias opciones para el despliegue de aplicaciones Next.js. Algunas opciones comunes incluyen:
- Vercel: Una plataforma de despliegue con integración directa con Next.js.
- Netlify: Otra plataforma que facilita el despliegue de aplicaciones frontend.

## Despliegue en Vercel:
Si decides utilizar Vercel, el proceso es bastante sencillo:
- Regístrate en Vercel.
- En el tablero de Vercel, haz clic en "Importar Proyecto".
- Selecciona tu repositorio de GitHub y sigue los pasos para configurar tu proyecto.
- Vercel automáticamente detectará que es una aplicación Next.js y configurará el proceso de implementación.

##  Despliegue en Netlify:
Si prefieres Netlify, sigue estos pasos:
- Regístrate en Netlify.
- En el dashboard de Netlify, haz clic en "Nuevo sitio desde Git".
- Conecta tu repositorio y configura los detalles del proyecto.
- En la sección "Configuración de Build Command", ingresa npm run build y en "Publish Directory", ingresa out (esto puede variar según tu configuración).