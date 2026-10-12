# Mejoramiento web Oxman IT

## Objetivo

Mejorar el frontend de Oxman IT con dos entregas independientes: una explicación clara de la metodología de desarrollo y una promoción responsable de Oxman Game Optimizer. Los cambios deben conservar la identidad visual, la accesibilidad, el comportamiento responsive y la navegación existentes.

## Orden de implementación

1. Etapa 1: metodología de desarrollo.
2. Revisión y aprobación de la Etapa 1.
3. Etapa 2: promoción de Oxman Game Optimizer.
4. Verificación integral de ambas etapas.

Las etapas son independientes y deben implementarse y revisarse por separado.

## Etapa 1: metodología de desarrollo

### Alcance

- Ampliar el bloque existente "Cómo trabajamos" en `oxmanit-frontend/src/components/Somos.jsx`.
- Presentar cinco etapas, en este orden: Análisis, Planificación, Arquitectura, Desarrollo y Pruebas.
- Explicar brevemente el propósito de cada etapa.
- Presentar BMAD como una herramienta de apoyo para estructurar el trabajo.
- Declarar sin ambigüedad que el uso de BMAD no implica certificación ni asociación oficial con sus creadores.
- Adaptar el layout y los conectores existentes para cinco etapas sin romper la experiencia responsive.

### Criterios de aceptación

- Las cinco etapas aparecen en el orden definido y utilizan una lista semántica.
- Cada etapa tiene un título y una descripción comprensible.
- La referencia a BMAD no contiene afirmaciones de certificación, asociación, respaldo ni afiliación oficial.
- No existe desbordamiento horizontal a 320, 768, 1024 y 1440 píxeles de ancho.
- La sección sigue siendo comprensible con `prefers-reduced-motion: reduce`.
- Se mantienen el foco visible, el contraste y la jerarquía de encabezados.
- No cambian la navegación, Servicios, Proyectos, el formulario, WhatsApp ni el backend.

## Etapa 2: promoción de Oxman Game Optimizer

### Alcance

- Incorporar un banner promocional después de Servicios y antes de Proyectos.
- Mantener el banner breve y coherente con los tokens visuales, botones y contenedores existentes.
- Añadir `id="oxman-game-optimizer"` a la tarjeta existente del proyecto.
- Incluir un CTA accesible que enlace a `#oxman-game-optimizer` y respete el desplazamiento de la barra fija.
- Mantener la tarjeta de Proyectos como destino de la información detallada.
- Identificar como conceptual cualquier métrica o interfaz ilustrativa.
- Evitar modales, ventanas emergentes, rutas nuevas y dependencias adicionales.

### Criterios de aceptación

- El banner aparece exactamente entre Servicios y Proyectos.
- El CTA es accesible por teclado y lleva a la tarjeta correcta sin ocultar su encabezado tras la barra de navegación.
- El banner y la tarjeta no presentan aumentos de FPS, porcentajes de mejora ni resultados garantizados.
- No se anuncian funcionalidades que no estén verificadas en el producto.
- La interfaz conceptual no se interpreta como evidencia de rendimiento real.
- No existe desbordamiento horizontal a 320, 768, 1024 y 1440 píxeles de ancho.
- No se añaden dependencias, ventanas emergentes ni cambios de backend.
- El resto de Proyectos, el formulario, WhatsApp, SEO y la navegación conservan su comportamiento.

## Fuera de alcance

- Backend y contratos de API.
- Formulario de contacto y persistencia de solicitudes.
- SEO, metadatos, sitemap y robots.
- Nuevas rutas o páginas de detalle.
- Instalación o actualización de dependencias.
- Promesas comerciales o técnicas no verificadas.
- Refactorizaciones generales de componentes o estilos no necesarias para estas dos etapas.

## Verificación

- Ejecutar `npm run lint` dentro de `oxmanit-frontend`.
- Ejecutar `npm run build` dentro de `oxmanit-frontend`.
- Revisar manualmente escritorio, tablet y móvil.
- Comprobar navegación por teclado, foco visible y reducción de movimiento.
- Inspeccionar el diff para confirmar que cada etapa se mantiene dentro de su alcance.

## Restricciones de entrega

- Implementar una etapa por sesión de `bmad-build`.
- Revisar la Etapa 1 antes de comenzar la Etapa 2.
- No realizar commit ni push sin autorización expresa del usuario.
