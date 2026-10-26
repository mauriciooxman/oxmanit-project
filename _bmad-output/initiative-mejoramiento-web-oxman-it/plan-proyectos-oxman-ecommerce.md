---
title: 'Proyectos y Oxman Ecommerce'
type: 'feature'
ticket: ''
created: '2026-10-26'
status: 'built'
baseline_revision: 'd487dc1cc56da9e923d6bdb07323a0edd604e5d9'
route: 'oneshot'
route_source: 'pinned'
risk: 'medium'
review: 'quick'
review_source: 'pinned'
lenses_ran: ['quick']
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Home repite una promoción y el catálogo completo de proyectos, lo que alarga la página; además, Oxman Ecommerce todavía no tiene presencia en Proyectos ni un servicio relacionado. No existen en el repositorio tecnologías, capacidades, URL o material gráfico verificables de Ecommerce.

**Approach:** Mantener una sola aplicación React sin dependencias nuevas y usar el hash como navegación entre Home y una vista independiente de Proyectos. `#proyectos` abrirá el catálogo; `#proyectos/oxman-ecommerce` abrirá y enfocará Ecommerce; `#oxman-game-optimizer` seguirá siendo compatible. `#top`, `#servicios`, `#nosotros` y `#contacto` mostrarán Home y llevarán a su sección; hashes desconocidos caerán de forma segura en Home. Atrás/adelante, recarga, cierre del menú móvil, scroll y foco programático deben funcionar, respetando `prefers-reduced-motion`.

Home conservará un adelanto compacto de Game Optimizer, Oxman IT Platform y Oxman Ecommerce con un CTA común «Ver todos los proyectos»; retirará el banner completo y las fichas extensas. La vista de Proyectos compartirá Navbar, Footer y WhatsApp, tendrá un encabezado principal enfocable y mostrará Ecommerce primero, seguido de Game Optimizer y Platform. La captura real existente de Game Optimizer se integrará en su ficha sin duplicar el banner ni requerir popup.

Ecommerce usará exactamente los textos «Descripción pendiente de validación», «Tecnologías por confirmar», «Capacidades por confirmar» y «Vista previa pendiente»: no se inventarán clientes, ventas, métricas, stack, pagos, stock, integraciones ni funcionalidades. Servicios añadirá una quinta tarjeta de ancho completo, número 05, titulada «Tiendas e-commerce», con el texto «Diseño de tiendas e-commerce, organización del catálogo, experiencia de compra e integración técnica según el alcance acordado.» y CTA interno hacia `#proyectos/oxman-ecommerce`; no atribuirá esas capacidades al producto como funciones existentes.

Conservar identidad visual, foco visible, semántica, reducción de movimiento y comportamiento responsive a 320, 768, 1024 y 1440 px. No modificar backend, formulario, API, `.env`, SEO, sitemap, robots, producción o dependencias; no crear rutas History API, modales nuevos, commit, push, merge ni despliegue.

</frozen-after-approval>

## Implementation Notes

- Ruta `oneshot` fijada por el workflow. El usuario decidió mantener Proyectos y el nuevo servicio en una sola implementación y trabajar directamente en `main`.
- Riesgo medio: el cambio es solo frontend, pero afecta selección de vista, historial, foco, scroll y varios breakpoints.
- La navegación se resolvió con hashes y sin dependencias nuevas; Navbar, Footer y WhatsApp se comparten entre Home y Proyectos.
- Home conserva un adelanto compacto y la vista independiente reúne Ecommerce, Game Optimizer y Platform.
- La captura real de Ecommerce se incorporó como recurso público accesible; la captura existente de Game Optimizer reemplazó el concepto ilustrativo y se retiró el popup.
- Archivos principales: `App.jsx`, `Navbar.jsx`, `Home.jsx`, `ProyectosPage.jsx`, `Proyectos.jsx`, `ProyectosPreview.jsx`, `Servicios.jsx` y sus estilos asociados.
- La automatización visual del navegador no pudo completar todos los breakpoints porque no confirmó con seguridad la URL activa; el usuario revisó y aprobó la vista local antes del cierre.

## Plan Change Log

- 2026-10-26: el usuario aportó y aprobó una captura real de la demo Oxman Ecommerce. Se reemplazaron los marcadores pendientes por información comprobable del catálogo local: búsqueda, categorías, precios por cantidad, existencias y carro. Se mantienen fuera de alcance pagos, pedidos, despacho, ventas y métricas comerciales.

## Review Triage Log

- `low` → `patch`: la captura declaraba `1897×922`, pero el PNG real mide `1897×890`; se corrigió el atributo `height` para evitar desplazamiento de diseño durante la carga diferida.

## Verification

**Commands:**
- `npm run lint` desde `oxmanit-frontend` -- ejecutado con salida 0.
- `npm run build` desde `oxmanit-frontend` -- ejecutado con salida 0; Vite 7.3.1 transformó 64 módulos.
- `git diff --check` -- ejecutado sin errores.

**Manual checks:**
- Verificar Home y Proyectos a 320, 768, 1024 y 1440 px sin desbordamiento ni recortes.
- Verificar `#top`, `#servicios`, `#nosotros`, `#contacto`, `#proyectos`, `#proyectos/oxman-ecommerce` y `#oxman-game-optimizer` con recarga, atrás/adelante, teclado, foco y menú móvil.
- Verificar que Ecommerce use solo las capacidades confirmadas en el cambio aprobado y que no cambien formulario, API, SEO, backend ni archivos de producción.
