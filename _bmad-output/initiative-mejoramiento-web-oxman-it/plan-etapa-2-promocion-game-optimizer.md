---
title: 'Etapa 2 — Promoción de Oxman Game Optimizer'
type: 'feature'
ticket: ''
created: '2026-10-12'
status: 'built'
baseline_revision: 'a10d77b81a5fa30c2ff60a44788c0c7773c7b3ff'
route: 'full'
route_source: 'auto'
risk: 'medium'
review: 'quick'
review_source: 'pinned'
lenses_ran: ['quick']
review_loop_iteration: 0
context: []
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** El banner existente necesita mostrar la captura auténtica de Game Optimizer y permitir examinarla sin salir de la página. La vista ampliada requiere navegación accesible y foco controlado.

**Approach:** Conservar el banner entre Servicios y Proyectos y su CTA «Explorar Game Optimizer». En escritorio, texto/CTA a la izquierda y captura real a la derecha; en móvil, apilarlos sin recortar la imagen. Marco cyan/violeta exterior, interfaz negra/dorada intacta. Un botón sobre la vista previa abre un diálogo modal ampliado. Mantener únicamente capacidades documentadas y la aclaración conceptual de la tarjeta existente.

## Boundaries & Constraints

**Always:** Usar exclusivamente `public/oxman-game-optimizer-dashboard.png`; conservar colores, proporción, texto y contenido originales. Responsive a 320/768/1024/1440px, foco visible y reduced-motion. CTA conserva href al artículo y offset. Modal con nombre accesible, Escape, cierre visible y clic exterior; foco inicial en cierre, contenido exterior inerte y devolución al disparador. Imagen completa con ajuste contain, dimensiones reservadas y carga diferida en miniatura. Mantener una versión nítida para ampliación; optimizar solo sin pérdida verificable. Aclarar que es una captura puntual, no datos del visitante ni garantía de rendimiento.

**Never:** Alterar Etapa 1, ejecutable Java, backend, formulario, WhatsApp, SEO o navegación global; acceder a .env; agregar dependencias, rutas, descargas o capturas adicionales. No recolorear, recrear o recortar la captura ni inventar FPS, mejoras garantizadas, disponibilidad pública, compatibilidad o funcionalidades. Solo se autoriza el modal de la vista ampliada. Sin commit, push, merge ni despliegue.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|---|---|---|---|
| CTA | Clic o Enter | Fragmento apunta al único artículo destino, visible bajo navbar | Sin rutas nuevas |
| Móvil | 320px | Texto y CTA dentro del contenedor | Layout vertical flexible |
| Movimiento | Preferencia reduce | Efectos estáticos y navegación sin animación | Regla global y override local |
| Dashboard | CPU/RAM ilustrativos | Aclaración visible: interfaz conceptual, sin mediciones reales | Sin promesas de rendimiento |
| Abrir captura | Clic/Enter/Espacio en botón de vista previa | Diálogo con imagen auténtica, nombre accesible y foco inicial en cierre | Sin navegación nueva |
| Cerrar captura | Escape, botón o clic exterior | Modal cerrado y foco devuelto al disparador | Clic dentro de imagen no cierra |
| Foco modal | Tab/Shift+Tab con diálogo abierto | Foco contenido en diálogo; exterior inerte | No trampa tras cerrar |
| Captura móvil | Pantalla estrecha o baja | Imagen completa, cierre visible, scroll accesible si hace falta | Sin recorte ni overflow de página |

</frozen-after-approval>

## Code Map

- `oxmanit-frontend/src/pages/Home.jsx`: insertar componente entre Servicios y Proyectos; preservar resto.
- `oxmanit-frontend/src/components/GameOptimizerPromo.jsx` y `.css`: banner existente; añadir botón de imagen y diálogo nativo con showModal/close, foco inicial y retorno, cierre exterior y limpieza al desmontar. Grid de dos columnas, imagen contain, marco cyan/violeta y reglas móviles/movimiento reducido. Reutilizar container, button y button--primary.
- `oxmanit-frontend/public/oxman-game-optimizer-dashboard.png`: captura suministrada, 1392×463px y 97.620 bytes; preservar original y evaluar compresión sin pérdida con herramientas ya instaladas. No crear versiones adicionales salvo derivación optimizada necesaria en este alcance.
- `oxmanit-frontend/src/components/Proyectos.jsx`: artículo optimizer; añadir id y tabIndex=-1. OptimizerVisual contiene CPU42%, RAM61%, GHz/GB y etiquetas System active/Live monitoring/Last 60 seconds. Sustituir etiquetas de actividad real y aclarar valores conceptuales. No tocar Platform.
- `oxmanit-frontend/src/components/Proyectos.css`: offset y aclaración específicos de Optimizer.
- `oxmanit-frontend/src/styles/global.css`: solo referencia. Tokens accent/muted, container-width, section-space; foco global y reducción de smooth scroll existentes.
- `oxmanit-frontend/src/components/Navbar.css`: solo referencia; sticky de 68px escritorio/64px móvil. Offset global existente: 80px.

## Tasks & Acceptance

**Execution:**
- [x] `oxmanit-frontend/src/components/GameOptimizerPromo.jsx` — crear contenido respaldado y enlace — facilitar descubrimiento.
- [x] `oxmanit-frontend/src/components/GameOptimizerPromo.css` — panel oscuro, acentos discretos, responsive y movimiento reducido — conservar identidad.
- [x] `oxmanit-frontend/src/pages/Home.jsx` — insertar import/render en posición solicitada.
- [x] `oxmanit-frontend/src/components/Proyectos.jsx` y `Proyectos.css` — ancla, offset y aclaración conceptual visible — evitar métricas engañosas.
- [x] Validar comandos y diff; revisión manual del navegador confirmada expresamente por el usuario para los casos enumerados.
- [x] `oxmanit-frontend/src/components/GameOptimizerPromo.jsx` — incorporar captura auténtica y modal accesible con tres cierres y foco controlado.
- [x] `oxmanit-frontend/src/components/GameOptimizerPromo.css` — reorganizar columnas y marco exterior; imagen completa y modal responsive sin recolorear.
- [x] `oxmanit-frontend/public/oxman-game-optimizer-dashboard.png` — verificar tamaño/dimensiones y optimización sin pérdida; conservar nitidez y registrar decisión.

**Acceptance Criteria:**
- Given Home, when se recorre, then el banner aparece entre Servicios y Proyectos con título/CTA solicitados.
- Given banner/tarjeta, when se leen, then solo contienen capacidades documentadas, sin resultados garantizados ni descargas; métricas claramente ilustrativas.
- Given teclado, when se activa CTA con Enter, then conduce al artículo único con encabezado visible y foco accesible.
- Given los cuatro anchos, when se renderizan, then no hay desbordamiento nuevo y la aclaración es legible.
- Given reduced-motion, when se interactúa, then contenido/foco se conservan sin movimiento decorativo.
- Given diff contra HEAD, when se revisa, then Etapa 1 y funcionalidades ajenas siguen intactas.
- Given escritorio/móvil, when se muestra el banner, then texto/CTA e imagen están en dos columnas/apilados, conservando imagen completa y colores negros/dorados.
- Given la miniatura, when se activa por clic/Enter/Espacio, then abre el diálogo con captura auténtica y foco en cierre.
- Given el modal abierto, when se usa Tab/Shift+Tab, then el foco permanece dentro y no se interactúa con el fondo.
- Given el modal abierto, when se usa Escape/cierre/clic exterior, then se cierra y devuelve foco; clic en imagen no cierra.
- Given apertura/cierre repetidos y viewport bajo, when se navega, then el cierre es accesible y no quedan bloqueos de foco/scroll.
- Given la imagen original, when se compara la versión usada, then no cambian sus píxeles o se conserva directamente el original, sin métricas añadidas ni promesas extraídas de botones de la captura.

## Implementation Notes

- 2026-10-12 — Solicitud de cierre/integración/despliegue: el propietario confirmó aprobación visual y funcional en localhost. Esta declaración general se registra como aprobación, sin atribuir pruebas específicas de Escape, Tab, inercia, reduced-motion o los cuatro anchos que no cuentan con resultados individualizados.
- Revisión previa de publicación: fetch origin exitoso; main y feature sincronizadas con sus respectivas referencias. Etapa 2 aún sin commit/push. Lint, build estándar y diff --check pasaron; captura incluida en dist con hash idéntico al asset de public. SSR y pruebas aisladas de manejadores volvieron a pasar; no verifican comportamiento nativo/visual.
- Seguridad: .env está seguido en HEAD/main/origin/main; revisión heurística del contenido y de su historial disponible no detectó posibles credenciales. Revisión adicional de archivos de texto en origin/main identificó una clave de prueba en configuración de tests, sin formato de clave real y con marcador de prueba. No se imprimieron valores ni se modificó configuración.
- Bloqueo de integración/publicación: README referencia Vercel, pero no hay configuración versionada que confirme producción desde main, root del frontend o mecanismo de despliegue. No se asume despliegue automático. Se requiere verificar/documentar estos ajustes reales antes de integrar y publicar. Plan permanece in-progress por auditoría de matriz pendiente; sin revisión formal, commit, push, merge ni despliegue en esta solicitud.

- 2026-10-12 — El usuario aprobó el plan completo actualizado y autorizó continuar con la mejora de vista previa/modal; baseline de Etapa 1 preservado. Las notas anteriores registran la primera versión del banner.
- Mejora implementada: dos columnas/apilado bajo 980px, captura completa con dimensiones y alt, marco cyan/violeta, caption de captura puntual y diálogo nativo. Cierre por botón/backdrop; Escape, inercia y contención de foco se delegan al diálogo nativo. Foco inicial en cierre y retorno al disparador. Scroll de html/body restaurado con prioridad original; limpieza al desmontar.
- Rendimiento: miniatura lazy; imagen ampliada solo se monta al abrir para evitar que una imagen oculta provoque descarga anticipada. PNG recomprimido en el mismo archivo: 97.620→85.200 bytes (12,7% menos), dimensiones 1392×463; datos IDAT inflados idénticos y chunks ajenos a IDAT intactos. SHA256 original 4055cf5d20204bdbe8ffd06070a167a87cdd9b2da808233ace860c6cdeabe60d; final 4c11a9e1b630185b1b3d482ec0e1c0b18ef0bdac4a287b28bddf30f94f2cccc5. Sin variantes adicionales, recorte ni recoloreado.
- Validación de la mejora: npm.cmd run lint y build estándar pasaron (build fuera del sandbox con autorización previa para el mismo comando). Tests temporales fuera del repo pasaron: SSR de CTA/id/orden/caption; manejadores aislados con diálogo simulado de apertura/foco inicial, cierre visible/exterior, clic interior, restauración de overflow/prioridad/foco, reapertura y desmontaje. No equivalen a prueba de diálogo nativo en navegador.
- Matriz aún pendiente: no hay navegador controlable (apps=[]/browsers=[]). Escape, Tab/Shift+Tab, inercia real, responsive/reduced-motion y scrolling del CTA requieren pruebas en navegador; workflow permanece en paso 3/in-progress antes de revisión formal. El usuario revisará localhost antes de aprobación final. No se declara auditoría completa.

- Implementación terminada en los cinco archivos previstos; banner oscuro con trama y luz cyan/violeta, sin animación continua ni dashboard nuevo. Reutiliza container y button; CTA real y artículo con tabIndex=-1, foco visible y scroll-margin-top de 80px.
- Dashboard conserva sus números explícitamente ilustrativos; sustituye etiquetas de actividad real por Concepto/Vista ilustrativa/Sin datos reales. Se permite ajuste de línea en sus encabezados para los anchos pequeños. Overrides locales de reduced-motion eliminan transformaciones del botón y tarjeta Optimizer sin modificar Platform.
- Validación: npm.cmd run lint pasó; npm.cmd run build estándar pasó con autorización explícita fuera del sandbox tras bloqueo de esbuild. Build con cargador nativo también pasó dentro del sandbox. git diff --check pasó.
- Comprobación temporal de SSR con React/esbuild existentes, fuera del repo: pasó orden Servicios→banner→Proyectos, href hacia id único y artículo tabindex=-1, aclaración conceptual renderizada y ausencia de etiquetas live/claims FPS en banner. Sin dependencias ni tests añadidos al repositorio.
- Vite disponible en http://127.0.0.1:5173/ con configLoader native, enlazado únicamente a loopback; página y módulo del banner responden HTTP200.
- Auditoría de matriz del paso 3: SSR cubre estructura del CTA y aclaración del dashboard. No hay navegador disponible (apps=[]/browsers=[]); quedan sin prueba en navegador scrolling/Enter/foco, ausencia de overflow a 320/768/1024/1440 y reduced-motion. No se declara aprobada esa auditoría ni se avanza al paso 4 hasta completar dichas pruebas. Código/CSS revisados estáticamente; el usuario solicitó revisión visual en localhost antes de aprobación definitiva.
- Sin cambios en Somos, backend, formulario, WhatsApp, SEO ni dependencias. Sin staging, commit, push, merge o despliegue. Plan permanece in-progress por validación visual pendiente.

## Plan Change Log

- 2026-10-12 — Cambio solicitado por el usuario antes de aprobación final: vista previa auténtica y ampliación interactiva. Se renegocia el bloque de intención para autorizar exclusivamente este modal, se añaden AC de foco/cierre/responsive y se vuelve a draft para CHECKPOINT 1. KEEP: ubicación, texto respaldado, CTA, tarjeta conceptual y cambios existentes de Etapa 2. Baseline de Etapa 1 preservado. Riesgo medium por interacción modal y gestión de foco. No se implementa la mejora antes de nueva aprobación.

## Review Triage Log

- 2026-10-12 / quick / low / patch — Proyectos.css:351: los selectores de reduced-motion tenían menor especificidad que hover/focus-within de tarjeta, resplandor y ventana. Verificado contra reglas de interacción del mismo archivo: podían aplicar translate/scale pese a preferencia reduce. Corrección trivial de selectores, limitada a Optimizer; mantener Platform intacto. Sin intent_gap, bad_plan ni hallazgos diferidos.

## Design Notes

Panel oscuro cyan/violeta que enmarca una captura negra/dorada sin filtros. Usar diálogo nativo para contención de foco e inercia del fondo, con cierre visible y manejo del backdrop sin cerrar al pulsar la imagen. Caption distingue captura real puntual del dashboard conceptual en Proyectos. El PNG ya pesa aproximadamente 95KiB: conservarlo si recomprimir no mejora tamaño y nitidez. Ruta full; riesgo medium por foco, cierres y comportamiento móvil. Mantener historial de implementación como evidencia; sus validaciones preceden a esta mejora.

Botón de vista previa: «Ampliar captura de Oxman Game Optimizer». Diálogo: «Vista ampliada de Oxman Game Optimizer»; cierre: «Cerrar». Alt: «Interfaz real de Oxman Game Optimizer con paneles de CPU y memoria, en negro y dorado». Caption: «Captura real de la aplicación. Los valores corresponden al momento de la captura; no son mediciones de tu equipo ni una garantía de rendimiento». Bloquear scroll del fondo al abrir y restaurarlo en todos los cierres/desmontaje; conservar valores anteriores. Detectar clic fuera del rectángulo del diálogo, no sobre padding/imagen. Evitar que la regla global mobile button width100% amplíe innecesariamente el cierre. Apilar columnas bajo 980px; ancho/alto explícitos en imagen y altura automática.

## Verification

### Evidencia de cierre de matriz — 2026-10-12

El usuario respondió «Sí, probé todos y pasaron» a una pregunta explícita que enumeró los casos manuales de CTA, apertura, tres cierres, clic interior, teclado/fondo inerte, retorno de foco/reapertura/scroll, cuatro anchos/pantalla baja y reduced-motion. Se registra como evidencia reportada por el usuario en localhost, no como ejecución del agente ni como prueba en producción. Las limitaciones anteriores son historial y quedan resueltas para esta auditoría por dicha confirmación. No se inventa navegador, versión ni capturas de prueba.

| Fila de matriz | Resultado | Evidencia |
|---|---|---|
| CTA | PASS | Usuario confirmó clic/Enter y encabezado visible; SSR ejecutado confirmó href/id único, tabindex y orden en Home |
| Móvil | PASS | Usuario confirmó ausencia de recortes/desbordamiento a 320/768/1024/1440px |
| Movimiento | PASS | Usuario confirmó prueba con prefers-reduced-motion |
| Dashboard | PASS | SSR ejecutado confirmó aclaración conceptual y eliminación de etiquetas live; revisión del contenido sin promesas ni FPS |
| Abrir captura | PASS | Usuario confirmó clic/Enter/Espacio; test aislado ejecutado comprobó showModal y foco inicial en cierre; JSX declara nombre accesible |
| Cerrar captura | PASS | Usuario confirmó Escape/botón/exterior, clic interior sin cierre y retorno del foco; tests de manejadores ejecutados verificaron botón/exterior/interior y retorno |
| Foco modal | PASS | Usuario confirmó Tab/Shift+Tab contenido y fondo inerte; no se atribuye a mocks esa verificación nativa |
| Captura móvil | PASS | Usuario confirmó pantalla baja, ausencia de recorte/overflow y reapertura sin bloqueo de scroll; tests ejecutados verificaron restauración del overflow y limpieza |

Auditoría de paso 3 satisfecha con pruebas ejecutadas y confirmación manual explícita del propietario. Proceder a revisión formal de paso 4. El usuario autoriza ahora commit independiente y push exclusivamente a origin/feature/bmad-web-promocion si la revisión y validaciones pasan; main y despliegue siguen fuera de alcance. Esta autorización posterior reemplaza la restricción histórica de commit/push de la fase de implementación.

- En `oxmanit-frontend`: `npm.cmd run lint` y `npm.cmd run build`, ambos exit 0. Solicitar autorización específica si esbuild requiere ejecución fuera del sandbox; no cambiar configuración.
- `git diff --check` y diff: sin whitespace ni cambios ajenos; sin commit/push.
- Inspeccionar href/id único, offset80px y orden. En navegador disponible: Tab/Enter, foco, cuatro anchos y reduced-motion. Si no hay navegador, distinguir revisión estática y visual pendiente.
- Tras aprobación: probar apertura por ratón/teclado, tres cierres, clic interior, ciclo Tab/Shift+Tab, retorno de foco, reapertura, cierre visible y scroll en móvil. Comprobar proporción, no recorte, carga diferida y nitidez; comparar píxeles si se recomprime. Revisar cuatro anchos y reduced-motion. Si no hay navegador, mantener pendientes los casos interactivos/visuales, sin declararlos cubiertos por SSR.

### Cierre técnico y revisión formal — 2026-10-12

- Checkpoints de planificación aprobados por el propietario; auditoría de matriz satisfecha con evidencia ejecutada y confirmación manual explícita en localhost.
- Revisión formal quick completada. Único hallazgo low/patch corregido en Proyectos.css: los overrides de reduced-motion para hover/focus tienen especificidad suficiente. El revisor confirmó el cierre; sin hallazgos diferidos ni impedimentos pendientes.
- Validaciones posteriores a la corrección: npm.cmd run lint, npm.cmd run build estándar, prueba SSR y pruebas aisladas de manejadores finalizaron con exit 0. git diff --check sin errores. La captura del build conserva el SHA256 del asset de public.
- Las pruebas nativas de teclado, responsive y reduced-motion fueron reportadas por el usuario, no ejecutadas por el agente en navegador. No hay navegador controlable disponible; no se atribuyen resultados visuales a SSR o mocks.
- Alcance de versionado: seis archivos de producto de Etapa 2 y este plan. Sin cambios en Etapa 1 ni dependencias. Artefactos de render BMAD, dist, node_modules y scripts temporales excluidos. Sin archivos sensibles ni configuraciones personales añadidos.
- Estado oficial final del flujo: built. Commit y push de esta rama autorizados expresamente por el usuario; sin merge a main ni despliegue. La configuración de producción mencionada en el historial queda fuera de este cierre de feature.
