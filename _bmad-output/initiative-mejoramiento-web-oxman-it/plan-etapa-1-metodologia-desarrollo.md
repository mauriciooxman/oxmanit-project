---
title: 'Etapa 1 — Metodología de desarrollo'
type: 'feature'
ticket: ''
created: '2026-10-12'
status: 'done'
baseline_revision: '5f0540de7e4c5de3d6a2a3027bc0d38c55c69f21'
route: 'oneshot'
route_source: 'auto'
risk: 'low'
review: 'quick'
review_source: 'pinned'
lenses_ran: ['quick']
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

Ampliar exclusivamente «Cómo trabajamos» en Somos.jsx con cinco etapas en orden: Análisis, Planificación, Arquitectura, Desarrollo y Pruebas y validación. Cada etapa explica su propósito con lenguaje profesional orientado a clientes. Presentar discretamente BMAD como herramienta de apoyo para organizar proyectos y aclarar que su uso no implica certificación ni asociación oficial con sus creadores.

Reutilizar la lista semántica, FlowDiagram y los estilos existentes en Somos.css. Conservar colores, tipografía, jerarquía de encabezados y navegación por teclado. Adaptar la distribución y conectores a cinco etapas sin desbordamiento a 320, 768, 1024 y 1440 px; respetar prefers-reduced-motion. No añadir dependencias, tocar .env, backend, SEO, servicios, proyectos, formulario ni WhatsApp. No iniciar Etapa 2, hacer commit, push ni despliegue. El usuario revisará esta entrega antes de continuar.

</frozen-after-approval>

## Implementation Notes

- Ruta oneshot: cambio localizado estimado en menos de 100 líneas entre dos archivos de producto; riesgo bajo por limitarse a contenido y presentación.
- Investigación: Somos.jsx contiene process, ol/li y FlowDiagram decorativo reutilizable. Somos.css define cuatro columnas, dos bajo 900px y una bajo 600px. Ajustar a cinco en escritorio amplio, dos en tablet/escritorio estrecho y una en móvil, ocultando conectores al final de cada fila. FlowDiagram ya detiene su scheduler y oculta partículas con reducción de movimiento; completar la supresión de transformaciones de hover localmente.
- Mantener los archivos generados del flujo BMAD como evidencia, separados de los dos archivos de producto.
- Implementación: cinco etapas, nota BMAD, ciclo derivado de la cantidad de conectores, cinco/dos/una columnas según ancho, conectores de final de fila ocultos, etiquetas con color muted y hover estático bajo reducción de movimiento. role=list preserva la lista accesible al eliminar marcadores CSS.
- Validación: npm.cmd run lint pasó (exit 0). npm.cmd run build bloqueado por esbuild: acceso denegado al directorio superior durante carga de vite.config.js. Solicitada autorización separada para build fuera del sandbox. El inventario de navegador devolvió browsers=[]; revisión visual no disponible.
- git diff --check pasó; únicamente Somos.jsx y Somos.css modificados entre los archivos de producto. Sin commit por restricción explícita del usuario.
- Validación final: build con cargador nativo pasó dentro del sandbox; tras autorización explícita, npm.cmd run build estándar también pasó fuera del sandbox. La corrección responsive quedó incluida en este último build. No se modificó configuración ni se añadieron dependencias.
- Revisión visual pendiente: no hay superficies de navegador disponibles. Los cuatro anchos y reducción de movimiento se revisaron en CSS/semántica, sin afirmar comprobación visual.

## Cierre de Etapa 1 — 2026-10-12

- El usuario confirmó que la implementación fue revisada visualmente y aprobada; queda resuelta la revisión visual pendiente del registro anterior.
- Etapa 1 finalizada. La Etapa 2 no se inició y permanece fuera de este cierre.
- El usuario autorizó expresamente el commit `feat(web): incorporar metodologia de desarrollo con BMAD` y el push exclusivamente a `origin/feature/bmad-web-promocion`. Esta autorización reemplaza la restricción de commit y push de la fase de implementación, conservada arriba como contexto histórico.
- Se versiona este plan como evidencia de implementación, validaciones y aprobación. Los snapshots regenerables de `_bmad/render/` se excluyen mediante `.gitignore`; no se incluyen configuraciones personales ni archivos sensibles.

## Plan Change Log

## Review Triage Log

- medium / patch: la regla nth-child(2n) tenía mayor especificidad que la restauración móvil y ocultaba conectores 02→03 y 04→05. Comprobado en los selectores de Somos.css; corregido limitando el bloque de dos columnas a 601–1200px. Se conservan los conectores verticales en 320px y la ocultación al final de fila en 768/1024px.

## Verification

- Desde oxmanit-frontend: npm run lint y npm run build; éxito sin errores nuevos.
- Revisar diff de Git y confirmar alcance de archivos.
- Si hay navegador utilizable, inspeccionar las cuatro resoluciones, conectores, orden, legibilidad, ausencia de desbordamiento, teclado y reducción de movimiento. Informar cualquier limitación real del entorno.
