// Blog posts data
const postsData = [
  {
    "id": 1,
    "title": "Cómo optimizar el rendimiento web en 2025",
    "slug": "optimizar-rendimiento-web-2025",
    "excerpt": "Descubre las mejores prácticas para hacer que tu sitio web cargue más rápido y ofrezca una mejor experiencia de usuario.",
    "content": "<p>El rendimiento web es crucial para el éxito de cualquier sitio. Los usuarios esperan que las páginas carguen en menos de 3 segundos, y Google penaliza los sitios lentos en sus rankings. Un sitio lento no solo afecta la experiencia del usuario, sino que también impacta directamente en las conversiones y el posicionamiento SEO.</p><h2>Core Web Vitals: Las Métricas que Importan</h2><p>Los Core Web Vitals son métricas esenciales que Google utiliza para evaluar la experiencia del usuario. Estas métricas se han convertido en factores de ranking desde 2021:</p><ul><li><strong>LCP (Largest Contentful Paint):</strong> Mide el tiempo que tarda en renderizarse el elemento más grande visible. Debe ocurrir en menos de 2.5 segundos para una buena experiencia.</li><li><strong>FID (First Input Delay):</strong> Mide el tiempo desde que el usuario interactúa con la página hasta que el navegador responde. Debe ser menor a 100ms.</li><li><strong>CLS (Cumulative Layout Shift):</strong> Mide la estabilidad visual de la página. Debe ser menor a 0.1 para evitar cambios inesperados en el layout.</li></ul><h2>Optimización de Imágenes</h2><p>Las imágenes suelen ser el recurso más pesado de una página web. Usa formatos modernos como WebP (30% más ligero que JPEG) y AVIF (50% más ligero). Implementa responsive images con el atributo <code>srcset</code> y el elemento <code>&lt;picture&gt;</code> para servir diferentes tamaños según el dispositivo.</p><p>El lazy loading nativo con <code>loading=\"lazy\"</code> permite cargar imágenes solo cuando están a punto de entrar en el viewport, reduciendo significativamente el tiempo de carga inicial.</p><h3>Minificación y Compresión</h3><p>Elimina código innecesario, comprime archivos con Gzip o Brotli (20-30% mejor compresión que Gzip), y utiliza tree-shaking para remover JavaScript no utilizado. Herramientas como Webpack, Vite o Parcel automatizan este proceso.</p><h3>Estrategias de Caché</h3><p>Configura headers de caché apropiados para recursos estáticos. Usa <code>Cache-Control: max-age=31536000</code> para assets versionados y <code>stale-while-revalidate</code> para contenido que cambia ocasionalmente.</p><h2>Herramientas de Medición</h2><p>Utiliza Google PageSpeed Insights, Lighthouse, y WebPageTest para medir y monitorear el rendimiento. Establece un presupuesto de rendimiento y configura alertas cuando se exceda.</p>",
    "image": "blog-1.png",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2025-10-02",
    "author": "Enrique Contreras",
    "tags": ["Performance", "Core Web Vitals", "Optimización", "SEO"],
    "readingTime": 4
  },
  {
    "id": 2,
    "title": "Tendencias de diseño minimalista",
    "slug": "tendencias-diseno-minimalista",
    "excerpt": "El minimalismo sigue siendo una tendencia fuerte. Analizamos cómo aplicarlo correctamente en interfaces modernas.",
    "content": "<p>El diseño minimalista no se trata solo de usar menos elementos, sino de usar los elementos correctos de manera efectiva. Es una filosofía de diseño que prioriza la función sobre la forma, eliminando todo lo superfluo para crear experiencias limpias y enfocadas.</p><h2>Principios Fundamentales del Minimalismo</h2><p>El minimalismo se basa en tres pilares: simplicidad, funcionalidad y claridad visual. Cada elemento debe tener un propósito claro y justificable. Si un elemento no mejora la experiencia del usuario o no comunica información esencial, probablemente no debería estar ahí.</p><p>La regla de oro es: menos es más. Pero esto no significa crear diseños aburridos o carentes de personalidad. Se trata de ser intencional con cada decisión de diseño.</p><h2>El Poder del Espacio Negativo</h2><p>El espacio en blanco (o espacio negativo) es uno de los elementos más poderosos del diseño minimalista. No es espacio desperdiciado, sino una herramienta activa que:</p><ul><li>Mejora la legibilidad y comprensión del contenido</li><li>Crea jerarquía visual y guía la atención del usuario</li><li>Transmite elegancia y sofisticación</li><li>Reduce la carga cognitiva del usuario</li></ul><p>Apple y Google son maestros en el uso del espacio negativo. Sus interfaces permiten que el contenido respire y que los usuarios se enfoquen en lo importante.</p><h2>Tipografía Minimalista</h2><p>Usa fuentes limpias y legibles como Inter, Roboto, o SF Pro. Limita el número de familias tipográficas a 2-3 máximo: una para títulos y otra para cuerpo de texto. La tipografía debe ser invisible - el usuario debe leer el contenido sin notar la fuente.</p><h3>Paleta de Colores Reducida</h3><p>Limita tu paleta a 2-3 colores principales más variaciones tonales. Un color primario para la marca, uno para acentos, y tonos neutros para el fondo y texto. Esta restricción fuerza decisiones más deliberadas y crea coherencia visual.</p><h2>Navegación Intuitiva</h2><p>La navegación minimalista debe ser obvia sin ser intrusiva. Usa menús hamburguesa con moderación - solo cuando el espacio lo requiera. Prioriza la navegación visible y accesible.</p>",
    "image": "blog-2.png",
    "category": "design",
    "categoryName": "Diseño UI/UX",
    "date": "2025-09-25",
    "author": "Enrique Contreras",
    "tags": ["Diseño", "Minimalismo", "UI/UX", "Tendencias"],
    "readingTime": 3
  },
  {
    "id": 3,
    "title": "Creando temas personalizados en WordPress",
    "slug": "temas-personalizados-wordpress",
    "excerpt": "Una guía paso a paso para desarrolladores que quieren ir más allá de los temas prefabricados.",
    "content": "<p>Crear un tema de WordPress desde cero te da control total sobre el diseño y funcionalidad de tu sitio. Aunque existen miles de temas prefabricados, desarrollar tu propio tema te permite crear experiencias únicas, optimizadas y perfectamente adaptadas a las necesidades específicas de tu proyecto.</p><h2>Estructura Básica de un Tema</h2><p>Un tema de WordPress requiere al menos dos archivos obligatorios:</p><ul><li><strong>style.css:</strong> Contiene los estilos y la información del tema en el header</li><li><strong>index.php:</strong> El template principal que se usa como fallback</li></ul><p>Sin embargo, para un tema completo y profesional necesitarás muchos más archivos: header.php, footer.php, single.php, page.php, archive.php, functions.php, y más.</p><h2>Template Hierarchy: El Sistema de Plantillas</h2><p>WordPress sigue una jerarquía de plantillas específica para determinar qué archivo usar para cada tipo de contenido. Por ejemplo, para una entrada individual, WordPress busca en este orden:</p><ol><li>single-{post-type}-{slug}.php</li><li>single-{post-type}.php</li><li>single.php</li><li>singular.php</li><li>index.php</li></ol><p>Entender esta jerarquía es fundamental para crear temas flexibles y mantenibles.</p><h2>Functions.php: El Corazón del Tema</h2><p>Este archivo es donde registras funcionalidades del tema. Aquí puedes:</p><ul><li>Registrar menús de navegación con <code>register_nav_menus()</code></li><li>Añadir soporte para imágenes destacadas con <code>add_theme_support('post-thumbnails')</code></li><li>Registrar sidebars y widget areas</li><li>Encolar scripts y estilos con <code>wp_enqueue_script()</code> y <code>wp_enqueue_style()</code></li><li>Crear custom post types y taxonomías</li></ul><h3>Hooks y Filters</h3><p>WordPress usa un sistema de hooks (actions y filters) que te permite modificar el comportamiento sin editar archivos core. Los actions ejecutan código en momentos específicos, mientras que los filters modifican datos antes de mostrarlos.</p><h2>Mejores Prácticas</h2><p>Usa un child theme para modificaciones de temas existentes. Implementa lazy loading para imágenes. Minimiza las consultas a la base de datos usando transients para cachear datos. Siempre sanitiza y valida los inputs del usuario.</p><h3>Herramientas de Desarrollo</h3><p>Utiliza Underscores (_s) como starter theme, Local by Flywheel para desarrollo local, y Query Monitor para debugging. Estas herramientas aceleran significativamente el proceso de desarrollo.</p>",
    "image": "blog-3.png",
    "category": "wordpress",
    "categoryName": "WordPress",
    "date": "2025-09-10",
    "author": "Enrique Contreras",
    "tags": ["WordPress", "Temas", "PHP", "Desarrollo"],
    "readingTime": 5
  },
  {
    "id": 4,
    "title": "Diseño Responsive: Más allá del Mobile-First",
    "slug": "diseno-responsive-mobile-first",
    "excerpt": "Estrategias avanzadas para crear experiencias fluidas en todos los dispositivos y tamaños de pantalla.",
    "content": "<p>El diseño responsive moderno va más allá de simplemente adaptar el contenido a pantallas pequeñas. Se trata de crear experiencias fluidas y coherentes en todos los dispositivos, desde smartwatches hasta pantallas 4K, sin comprometer la usabilidad ni la estética.</p><h2>Mobile-First vs Desktop-First</h2><p>El enfoque mobile-first comienza diseñando para dispositivos móviles y luego expande para pantallas más grandes. Este enfoque tiene ventajas claras:</p><ul><li>Fuerza a priorizar contenido esencial</li><li>Mejora el rendimiento en dispositivos móviles</li><li>Facilita la progresión hacia diseños más complejos</li><li>Se alinea con el comportamiento de los usuarios (más del 60% del tráfico web es móvil)</li></ul><h2>Container Queries: El Futuro del Responsive Design</h2><p>Las container queries son un cambio de paradigma. En lugar de que los componentes respondan al tamaño del viewport, responden al tamaño de su contenedor. Esto permite crear componentes verdaderamente modulares y reutilizables.</p><p>Ejemplo: Un componente de tarjeta puede mostrar un layout horizontal cuando tiene espacio suficiente en su contenedor, independientemente del tamaño de la pantalla.</p><pre><code>@container (min-width: 400px) {\n  .card {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n  }\n}</code></pre><h2>Fluid Typography con clamp()</h2><p>La función <code>clamp()</code> permite crear tipografía que escala suavemente entre breakpoints sin necesidad de media queries:</p><pre><code>font-size: clamp(1rem, 2.5vw, 2rem);</code></pre><p>Esto establece un tamaño mínimo de 1rem, un tamaño preferido de 2.5vw, y un máximo de 2rem.</p><h2>CSS Grid y Flexbox</h2><p>Grid es ideal para layouts bidimensionales (filas y columnas), mientras que Flexbox brilla en layouts unidimensionales. Combínalos para crear diseños potentes y flexibles.</p><h3>Responsive Images</h3><p>Usa el atributo <code>srcset</code> para servir diferentes resoluciones de imagen según el dispositivo. El elemento <code>&lt;picture&gt;</code> permite art direction - servir imágenes completamente diferentes según el contexto.</p><h2>Testing y Debugging</h2><p>Prueba en dispositivos reales, no solo en emuladores. Usa Chrome DevTools para simular diferentes viewports y condiciones de red. Herramientas como BrowserStack permiten testing en múltiples dispositivos y navegadores simultáneamente.</p>",
    "image": "blog-4.jpg",
    "category": "design",
    "categoryName": "Diseño UI/UX",
    "date": "2025-11-15",
    "author": "Enrique Contreras",
    "tags": ["Responsive", "Mobile-First", "CSS", "Diseño"],
    "readingTime": 4
  },
  {
    "id": 5,
    "title": "Implementando Chatbots con IA en tu Sitio Web",
    "slug": "chatbots-ia-sitio-web",
    "excerpt": "Guía completa para integrar asistentes virtuales inteligentes que mejoren la experiencia del usuario.",
    "content": "<p>Los chatbots con IA pueden transformar la forma en que interactúas con tus usuarios, proporcionando soporte 24/7, respondiendo preguntas frecuentes instantáneamente, y liberando a tu equipo para enfocarse en tareas más complejas. La tecnología ha avanzado tanto que los chatbots modernos pueden mantener conversaciones naturales y contextuales.</p><h2>Plataformas y Tecnologías</h2><p>Existen varias plataformas para crear chatbots con diferentes niveles de complejidad:</p><ul><li><strong>Dialogflow (Google):</strong> Excelente para integraciones con Google Assistant y procesamiento de lenguaje natural</li><li><strong>Rasa:</strong> Open-source, ideal para proyectos que requieren control total y privacidad de datos</li><li><strong>OpenAI GPT:</strong> La opción más avanzada para conversaciones naturales y complejas</li><li><strong>Microsoft Bot Framework:</strong> Integración perfecta con ecosistema Microsoft</li></ul><h2>Casos de Uso Efectivos</h2><p>Los chatbots brillan en escenarios específicos:</p><h3>Atención al Cliente</h3><p>Responde preguntas frecuentes, rastrea pedidos, y escala problemas complejos a agentes humanos cuando es necesario. Puede reducir el volumen de tickets de soporte en un 40-60%.</p><h3>Generación de Leads</h3><p>Califica leads automáticamente haciendo preguntas relevantes, recopila información de contacto, y agenda demostraciones. Los chatbots pueden aumentar la conversión de visitantes a leads en un 30%.</p><h3>Recomendaciones Personalizadas</h3><p>Analiza preferencias del usuario y recomienda productos o servicios relevantes, aumentando el valor promedio de pedido.</p><h2>Implementación Técnica</h2><p>La integración típica involucra:</p><ol><li>Configurar el modelo de IA y entrenar con datos relevantes</li><li>Diseñar flujos de conversación y fallbacks</li><li>Integrar con tu sitio web mediante widget o API</li><li>Conectar con sistemas backend (CRM, base de datos, etc.)</li><li>Monitorear y mejorar continuamente basándose en interacciones reales</li></ol><h2>Mejores Prácticas</h2><p>Sé transparente - los usuarios deben saber que están hablando con un bot. Proporciona una opción fácil para hablar con un humano. Mantén las respuestas concisas y accionables. Usa botones de respuesta rápida para guiar la conversación. Y lo más importante: monitorea constantemente las conversaciones para identificar áreas de mejora.</p>",
    "image": "blog-5.jpg",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2025-11-08",
    "author": "Enrique Contreras",
    "tags": ["IA", "Chatbots", "Automatización", "UX"],
    "readingTime": 4
  },
  {
    "id": 6,
    "title": "Core Web Vitals: Alcanzando 100/100 en PageSpeed",
    "slug": "core-web-vitals-pagespeed",
    "excerpt": "Técnicas probadas para optimizar LCP, FID y CLS y mejorar tu posicionamiento en Google.",
    "content": "<p>Lograr una puntuación perfecta de 100/100 en PageSpeed Insights es el santo grial de la optimización web. Aunque no siempre es necesario alcanzar la perfección, entender cómo llegar ahí te enseña las mejores prácticas de rendimiento que beneficiarán a cualquier sitio.</p><h2>Entendiendo Core Web Vitals en Profundidad</h2><h3>LCP - Largest Contentful Paint</h3><p>El LCP mide cuánto tarda en renderizarse el elemento más grande visible en el viewport. Para optimizarlo:</p><ul><li>Optimiza y comprime imágenes hero</li><li>Usa preload para recursos críticos: <code>&lt;link rel=\"preload\" as=\"image\"&gt;</code></li><li>Implementa un CDN para reducir latencia</li><li>Minimiza el tiempo de respuesta del servidor (TTFB)</li></ul><h3>FID - First Input Delay</h3><p>Mide la capacidad de respuesta de la página. Para mejorarlo:</p><ul><li>Divide código JavaScript en chunks más pequeños</li><li>Usa web workers para procesamiento pesado</li><li>Implementa code splitting y lazy loading de JavaScript</li><li>Minimiza el trabajo del hilo principal</li></ul><h3>CLS - Cumulative Layout Shift</h3><p>Mide la estabilidad visual. Para eliminarlo:</p><ul><li>Siempre especifica dimensiones para imágenes y videos</li><li>Reserva espacio para ads y embeds</li><li>Evita insertar contenido dinámico sobre contenido existente</li><li>Usa <code>font-display: swap</code> con cuidado</li></ul><h2>Optimización Avanzada de Imágenes</h2><p>Las imágenes suelen ser el mayor cuello de botella. Estrategias avanzadas incluyen:</p><ul><li>Usar formatos next-gen: WebP (30% más ligero) y AVIF (50% más ligero que JPEG)</li><li>Implementar lazy loading nativo con <code>loading=\"lazy\"</code></li><li>Servir imágenes responsive con srcset basado en DPR y tamaño de viewport</li><li>Comprimir con herramientas como Squoosh o ImageOptim</li><li>Considerar usar un CDN de imágenes como Cloudinary o imgix</li></ul><h2>JavaScript y CSS Críticos</h2><p>Minimiza, comprime y carga de forma asíncrona los recursos no críticos. Extrae CSS crítico e ínlinealo en el <code>&lt;head&gt;</code>. Carga CSS no crítico de forma asíncrona. Usa <code>defer</code> o <code>async</code> para scripts no críticos.</p><h2>Herramientas de Medición</h2><p>No te bases solo en PageSpeed Insights. Usa también Lighthouse CI para testing automatizado, WebPageTest para análisis detallado, y Chrome DevTools Performance panel para debugging específico.</p>",
    "image": "blog-6.jpg",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2025-11-01",
    "author": "Enrique Contreras",
    "tags": ["PageSpeed", "Performance", "SEO", "Optimización"],
    "readingTime": 5
  },
  {
    "id": 7,
    "title": "Principios de UX que Todo Desarrollador Debe Conocer",
    "slug": "principios-ux-desarrolladores",
    "excerpt": "Cómo aplicar fundamentos de experiencia de usuario para crear interfaces intuitivas y efectivas.",
    "content": "<p>Los desarrolladores que entienden UX crean mejores productos. No se trata solo de hacer que las cosas se vean bien, sino de crear experiencias intuitivas, eficientes y agradables que resuelvan problemas reales de los usuarios. Aquí están los principios fundamentales que todo desarrollador debe dominar.</p><h2>Leyes Fundamentales de UX</h2><h3>Ley de Hick</h3><p>El tiempo que toma tomar una decisión aumenta logarítmicamente con el número de opciones. Simplifica las opciones y agrupa elementos relacionados. Por ejemplo, en lugar de mostrar 50 categorías de productos, agrúpalas en 5-7 categorías principales con subcategorías.</p><h3>Ley de Fitts</h3><p>El tiempo para alcanzar un objetivo es función de la distancia y el tamaño del objetivo. Haz los botones importantes más grandes y colócalos cerca de donde el usuario está enfocado. Los botones de acción primaria deben ser prominentes.</p><h3>Ley de Jakob</h3><p>Los usuarios pasan la mayor parte de su tiempo en otros sitios, por lo que prefieren que tu sitio funcione de la misma manera. No reinventes patrones establecidos sin una buena razón. Los usuarios esperan que el logo lleve al inicio, que el carrito esté arriba a la derecha, etc.</p><h2>Feedback Visual Efectivo</h2><p>Los usuarios necesitan confirmación inmediata de sus acciones. Implementa:</p><ul><li><strong>Estados hover:</strong> Indica que un elemento es interactivo</li><li><strong>Estados loading:</strong> Muestra que el sistema está procesando</li><li><strong>Estados de éxito/error:</strong> Confirma el resultado de una acción</li><li><strong>Disabled states:</strong> Indica cuándo una acción no está disponible y por qué</li></ul><h2>Jerarquía Visual</h2><p>Usa tamaño, color, contraste y espaciado para crear una jerarquía clara. Los elementos más importantes deben destacar visualmente. Usa el principio de Gestalt - los elementos relacionados deben estar agrupados visualmente.</p><h3>Accesibilidad como Fundamento</h3><p>La accesibilidad no es opcional. Usa contraste suficiente (mínimo 4.5:1 para texto normal), proporciona alternativas de texto para imágenes, asegura navegación por teclado, y usa ARIA labels apropiadamente. Un sitio accesible es mejor para todos.</p><h2>Principio de Proximidad</h2><p>Los elementos relacionados deben estar cerca unos de otros. Los labels deben estar junto a sus inputs. Los botones de acción deben estar cerca del contenido al que afectan.</p><h2>Testing con Usuarios Reales</h2><p>Ninguna cantidad de teoría reemplaza observar a usuarios reales interactuar con tu producto. Realiza tests de usabilidad regularmente, incluso informales. Cinco usuarios pueden identificar el 85% de los problemas de usabilidad.</p>",
    "image": "blog-7.jpg",
    "category": "design",
    "categoryName": "Diseño UI/UX",
    "date": "2025-10-22",
    "author": "Enrique Contreras",
    "tags": ["UX", "Diseño", "Usabilidad", "Principios"],
    "readingTime": 4
  },
  {
    "id": 8,
    "title": "SEO para WordPress: Plugins y Mejores Prácticas",
    "slug": "seo-wordpress-plugins",
    "excerpt": "Optimiza tu sitio WordPress para motores de búsqueda con estas herramientas y técnicas esenciales.",
    "content": "<p>WordPress es excelente para SEO out-of-the-box gracias a su estructura semántica y código limpio, pero con las herramientas y configuraciones correctas puedes llevarlo al siguiente nivel y competir con sitios de cualquier plataforma. El SEO moderno requiere un enfoque holístico que combine contenido de calidad, optimización técnica y experiencia de usuario.</p><h2>Plugins Esenciales de SEO</h2><h3>Yoast SEO vs Rank Math</h3><p>Ambos son excelentes opciones:</p><ul><li><strong>Yoast SEO:</strong> Interfaz más simple, ideal para principiantes, análisis de legibilidad incluido</li><li><strong>Rank Math:</strong> Más características gratuitas, integración con Google Search Console, análisis de palabras clave múltiples</li></ul><p>Elige uno y configúralo correctamente. Nunca uses ambos simultáneamente.</p><h3>Plugins de Rendimiento</h3><p>El rendimiento es un factor de ranking crucial:</p><ul><li><strong>WP Rocket:</strong> Caché, minificación, lazy loading - todo en uno (premium)</li><li><strong>LiteSpeed Cache:</strong> Excelente alternativa gratuita si tu hosting usa LiteSpeed</li><li><strong>Autoptimize:</strong> Gratuito, enfocado en optimización de assets</li></ul><h2>Optimización On-Page</h2><h3>Estructura de URLs</h3><p>Usa permalinks descriptivos: <code>/%postname%/</code> es la mejor opción. Evita fechas en las URLs para contenido evergreen. URLs cortas y descriptivas funcionan mejor: <code>/seo-wordpress/</code> es mejor que <code>/guia-completa-definitiva-seo-wordpress-2024/</code>.</p><h3>Meta Títulos y Descripciones</h3><p>Escribe títulos únicos de 50-60 caracteres que incluyan la palabra clave principal. Las meta descripciones deben ser de 150-160 caracteres, persuasivas y con call-to-action. Aunque no afectan el ranking directamente, mejoran el CTR.</p><h2>SEO Técnico para WordPress</h2><h3>Schema Markup</h3><p>Implementa datos estructurados para ayudar a Google entender tu contenido. Usa plugins como Schema Pro o la funcionalidad integrada de Rank Math para añadir markup de artículos, productos, FAQs, etc.</p><h3>XML Sitemaps</h3><p>Yoast y Rank Math generan sitemaps automáticamente. Envíalos a Google Search Console y asegúrate de que se actualicen cuando publiques contenido nuevo.</p><h2>Optimización de Contenido</h2><p>Usa headings jerárquicamente (H1 → H2 → H3). Incluye la palabra clave en el primer párrafo. Usa variaciones y sinónimos naturalmente. Añade enlaces internos a contenido relacionado. Optimiza imágenes con alt text descriptivo.</p><h3>Core Web Vitals</h3><p>Google usa Core Web Vitals como factor de ranking. Optimiza LCP con imágenes comprimidas y CDN. Mejora FID minimizando JavaScript. Reduce CLS especificando dimensiones de imágenes y evitando shifts de layout.</p>",
    "image": "blog-8.jpg",
    "category": "wordpress",
    "categoryName": "WordPress",
    "date": "2025-10-18",
    "author": "Enrique Contreras",
    "tags": ["WordPress", "SEO", "Plugins", "Optimización"],
    "readingTime": 5
  },
  {
    "id": 9,
    "title": "Seguridad Web: Protegiendo tu Sitio de Amenazas",
    "slug": "seguridad-web-amenazas",
    "excerpt": "Implementa medidas de seguridad esenciales para proteger tu aplicación web de ataques comunes.",
    "content": "<p>La seguridad web no es opcional - es una responsabilidad fundamental. Un sitio comprometido puede resultar en pérdida de datos, daño a la reputación, pérdidas financieras y problemas legales. Protege tu sitio y los datos de tus usuarios implementando estas prácticas esenciales de seguridad.</p><h2>HTTPS: La Base de la Seguridad Web</h2><p>Siempre usa HTTPS, no HTTP. HTTPS encripta la comunicación entre el navegador y el servidor, protegiendo datos sensibles de interceptación. Los certificados SSL/TLS son gratuitos con Let's Encrypt y la mayoría de los hostings los ofrecen con un clic.</p><p>Configura HSTS (HTTP Strict Transport Security) para forzar conexiones HTTPS: <code>Strict-Transport-Security: max-age=31536000; includeSubDomains</code></p><h2>Vulnerabilidades Comunes y Cómo Prevenirlas</h2><h3>XSS - Cross-Site Scripting</h3><p>Ocurre cuando un atacante inyecta scripts maliciosos en tu sitio. Prevención:</p><ul><li>Escapa todo output con funciones como <code>esc_html()</code> en WordPress</li><li>Usa Content Security Policy (CSP) headers</li><li>Valida y sanitiza inputs del usuario</li></ul><h3>SQL Injection</h3><p>Atacantes inyectan código SQL malicioso en queries. Prevención:</p><ul><li>Usa prepared statements siempre</li><li>En WordPress, usa <code>$wpdb->prepare()</code></li><li>Nunca concatenes strings directamente en queries SQL</li></ul><h3>CSRF - Cross-Site Request Forgery</h3><p>Engaña a usuarios autenticados para ejecutar acciones no deseadas. Prevención:</p><ul><li>Usa nonces en WordPress: <code>wp_nonce_field()</code></li><li>Verifica nonces antes de procesar formularios</li><li>Implementa SameSite cookies</li></ul><h2>Validación y Sanitización</h2><p>Nunca confíes en los datos del usuario. Valida que los datos sean del tipo y formato esperado. Sanitiza removiendo o escapando caracteres peligrosos. En WordPress:</p><pre><code>$email = sanitize_email($_POST['email']);\n$text = sanitize_text_field($_POST['name']);</code></pre><h2>Actualizaciones y Mantenimiento</h2><p>Mantén WordPress, plugins y temas actualizados. El 90% de los hacks de WordPress explotan vulnerabilidades conocidas en versiones desactualizadas. Habilita actualizaciones automáticas para parches de seguridad.</p><h3>Backups Regulares</h3><p>Implementa backups automáticos diarios. Almacena backups off-site (no en el mismo servidor). Prueba la restauración regularmente - un backup que no se puede restaurar es inútil.</p><h2>Seguridad de WordPress Específica</h2><p>Cambia el prefijo de tabla de base de datos del default <code>wp_</code>. Limita intentos de login con plugins como Limit Login Attempts. Usa autenticación de dos factores. Deshabilita la edición de archivos desde el admin: <code>define('DISALLOW_FILE_EDIT', true);</code></p><h3>Headers de Seguridad</h3><p>Implementa headers de seguridad importantes:</p><ul><li><code>X-Frame-Options: SAMEORIGIN</code> - previene clickjacking</li><li><code>X-Content-Type-Options: nosniff</code> - previene MIME sniffing</li><li><code>Referrer-Policy: strict-origin-when-cross-origin</code></li></ul>",
    "image": "blog-9.jpg",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2025-10-05",
    "author": "Enrique Contreras",
    "tags": ["Seguridad", "HTTPS", "WordPress", "Protección"],
    "readingTime": 6
  },
  {
    "id": 10,
    "title": "JavaScript Moderno: ES2025 y Nuevas Características",
    "slug": "javascript-moderno-es2025",
    "excerpt": "Explora las últimas funcionalidades de JavaScript y cómo pueden mejorar tu código.",
    "content": "<p>JavaScript continúa evolucionando a un ritmo impresionante con nuevas características que hacen el código más limpio, eficiente y expresivo. ES2025 trae mejoras significativas que todo desarrollador frontend debe conocer. Estas características no solo mejoran la productividad, sino que también hacen el código más mantenible y menos propenso a errores.</p><h2>Temporal API: Adiós a Date</h2><p>El objeto Date de JavaScript ha sido problemático desde siempre - mutable, confuso con zonas horarias, y con una API inconsistente. Temporal API es su reemplazo moderno:</p><pre><code>// Antes con Date\\nconst now = new Date();\\n\\n// Ahora con Temporal\\nconst now = Temporal.Now.plainDateTimeISO();\\nconst tomorrow = now.add({ days: 1 });\\nconst formatted = tomorrow.toLocaleString();</code></pre><p>Temporal es inmutable, maneja zonas horarias correctamente, y tiene una API intuitiva. Soporta diferentes calendarios y sistemas de tiempo.</p><h2>Pattern Matching: Expresividad Mejorada</h2><p>Pattern matching permite escribir código más declarativo y legible, similar a switch pero mucho más poderoso:</p><pre><code>const result = match (value) {\\n  when ({ type: 'circle', radius: r }) -> Math.PI * r * r,\\n  when ({ type: 'rectangle', width: w, height: h }) -> w * h,\\n  when ({ type: 'triangle', base: b, height: h }) -> 0.5 * b * h,\\n  else -> 0\\n};</code></pre><p>Esto es más conciso y menos propenso a errores que múltiples if/else o switch statements.</p><h2>Records y Tuples: Inmutabilidad Nativa</h2><p>Estructuras de datos inmutables nativas que se comparan por valor, no por referencia:</p><pre><code>// Record (objeto inmutable)\\nconst user = #{\\n  name: 'Ana',\\n  age: 28\\n};\\n\\n// Tuple (array inmutable)\\nconst coords = #[40.7128, -74.0060];\\n\\n// Comparación por valor\\n#{a: 1} === #{a: 1} // true!</code></pre><p>Esto elimina bugs comunes relacionados con mutación accidental y facilita la programación funcional.</p><h2>Otras Características Destacadas</h2><h3>Array Grouping</h3><p>Agrupa elementos de arrays fácilmente:</p><pre><code>const grouped = array.groupBy(item => item.category);</code></pre><h3>Top-level await</h3><p>Usa await en el nivel superior de módulos sin necesidad de funciones async wrapper:</p><pre><code>const data = await fetch('/api/data').then(r => r.json());</code></pre><h3>Private Fields y Methods</h3><p>Encapsulación real en clases con el prefijo #:</p><pre><code>class User {\\n  #password;\\n  \\n  #validatePassword() {\\n    // método privado\\n  }\\n}</code></pre><h2>Compatibilidad y Transpilación</h2><p>Muchas de estas características aún están en propuesta. Usa Babel para transpilar a JavaScript compatible con navegadores actuales. Consulta caniuse.com para verificar soporte en navegadores antes de usar en producción.</p>",
    "image": "blog-10.svg",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2025-09-28",
    "author": "Enrique Contreras",
    "tags": ["JavaScript", "ES2025", "Desarrollo", "Frontend"],
    "readingTime": 5
  }
];

// Blog functionality
function loadPosts() {
  return Promise.resolve(postsData);
}

function createPostCard(post) {
  return `
        <article class="blog-card flex flex-col bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:-translate-y-1 transition-transform duration-300" data-category="${post.category}">
            <img src="images/${post.image}" alt="${post.title}" class="h-48 w-full object-cover">
            <div class="p-6 flex flex-col flex-grow">
                <div class="text-sm text-slate-400 mb-2">
                    <span>${new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span> • <span class="text-red-500 font-medium">${post.categoryName}</span>
                </div>
                <h2 class="text-xl font-bold mb-3 leading-tight"><a href="single.html?id=${post.id}" class="hover:text-red-500 transition-colors">${post.title}</a></h2>
                <p class="text-slate-400 text-sm mb-6 flex-grow">${post.excerpt}</p>
                <a href="single.html?id=${post.id}" class="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm mt-auto w-max font-medium">Leer más →</a>
            </div>
        </article>
    `;
}

// Pagination variables
let postsPerPage = 6;
let currentPage = 1;
let filteredPosts = [];
let currentFilter = 'all';
let isLoading = false;

function renderPosts(posts, append = false) {
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;

  const html = posts.map(post => createPostCard(post)).join('');

  if (append) {
    postsContainer.innerHTML += html;
  } else {
    postsContainer.innerHTML = html;
  }
}

function showLoadMoreButton() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'block';
  }
}

function hideLoadMoreButton() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = 'none';
  }
}

function loadMorePosts() {
  if (isLoading) return;

  const start = currentPage * postsPerPage;
  const end = start + postsPerPage;

  if (start >= filteredPosts.length) {
    hideLoadMoreButton();
    return;
  }

  isLoading = true;
  const postsToShow = filteredPosts.slice(start, end);

  // Simulate slight delay for smooth UX
  setTimeout(() => {
    renderPosts(postsToShow, true);
    currentPage++;
    isLoading = false;

    // Hide button if no more posts
    if (end >= filteredPosts.length) {
      hideLoadMoreButton();
    }
  }, 300);
}

function handleInfiniteScroll() {
  if (isLoading) return;

  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // Load more when 300px from bottom
  if (scrollPosition >= pageHeight - 300) {
    const start = currentPage * postsPerPage;
    if (start < filteredPosts.length) {
      loadMorePosts();
    }
  }
}

async function initBlog() {
  const postsContainer = document.getElementById('posts-container');
  if (!postsContainer) return;

  const posts = await loadPosts();
  filteredPosts = posts;

  // Show first 6 posts
  const initialPosts = filteredPosts.slice(0, postsPerPage);
  renderPosts(initialPosts, false);

  // Show/hide load more button
  if (filteredPosts.length > postsPerPage) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }

  // Initialize filters after posts are loaded
  setTimeout(() => {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active classes from all buttons
        filterBtns.forEach(b => {
          b.classList.remove('bg-red-600', 'text-white', 'border-red-600');
          b.classList.add('text-slate-400', 'border-slate-700');
        });
        // Add active classes to clicked button
        btn.classList.remove('text-slate-400', 'border-slate-700');
        btn.classList.add('bg-red-600', 'text-white', 'border-red-600');

        const filterValue = btn.getAttribute('data-filter');
        currentFilter = filterValue;
        currentPage = 1;

        // Filter posts
        if (filterValue === 'all') {
          filteredPosts = posts;
        } else {
          filteredPosts = posts.filter(post => post.category === filterValue);
        }

        // Show first 6 filtered posts
        const initialPosts = filteredPosts.slice(0, postsPerPage);
        renderPosts(initialPosts, false);

        // Show/hide load more button
        if (filteredPosts.length > postsPerPage) {
          showLoadMoreButton();
        } else {
          hideLoadMoreButton();
        }

        // Scroll to top of posts
        postsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Load More button click handler
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', loadMorePosts);
    }

    // Infinite scroll handler with throttle
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleInfiniteScroll, 150);
    });
  }, 100);
}

async function initSinglePost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  if (!postId) return;

  const posts = await loadPosts();
  const post = posts.find(p => p.id === postId);

  if (!post) return;

  // Update page title
  document.title = `${post.title} | Enrique Contreras`;

  // Update featured image
  const featuredImage = document.getElementById('featured-image');
  if (featuredImage) {
    featuredImage.src = `images/${post.image}`;
    featuredImage.alt = post.title;
  }

  // Update post title
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.textContent = post.title;
  }

  // Update post meta with reading time
  const postMeta = document.getElementById('post-meta');
  if (postMeta) {
    postMeta.innerHTML = `
      <span>${new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
      <span>•</span>
      <span class="text-red-500 font-medium">${post.categoryName}</span>
      <span>•</span>
      <span><i class="far fa-clock"></i> ${post.readingTime} min de lectura</span>
      <span>•</span>
      <span>Por ${post.author}</span>
    `;
  }

  // Update post tags
  const postTags = document.getElementById('post-tags');
  if (postTags && post.tags) {
    postTags.innerHTML = post.tags.map(tag =>
      `<span class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-red-500 transition-colors">${tag}</span>`
    ).join('');
  }

  // Update post content
  const postContent = document.getElementById('post-content');
  if (postContent) {
    postContent.innerHTML = post.content;
  }

  // Load related posts (same category, exclude current post)
  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 6);
  const relatedPostsCarousel = document.getElementById('related-posts-carousel');

  if (relatedPostsCarousel && relatedPosts.length > 0) {
    relatedPostsCarousel.innerHTML = relatedPosts.map(relatedPost => `
      <div class="px-3">
        <article class="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:-translate-y-1 transition-transform duration-300">
          <img src="images/${relatedPost.image}" alt="${relatedPost.title}" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="text-sm text-slate-400 mb-2">
              <span>${new Date(relatedPost.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <h3 class="text-lg font-bold mb-3 leading-tight">
              <a href="single.html?id=${relatedPost.id}" class="hover:text-red-500 transition-colors">${relatedPost.title}</a>
            </h3>
            <p class="text-slate-400 text-sm mb-4">${relatedPost.excerpt.substring(0, 100)}...</p>
            <a href="single.html?id=${relatedPost.id}" class="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium">Leer más →</a>
          </div>
        </article>
      </div>
    `).join('');

    // Initialize Slick Slider for related posts
    setTimeout(() => {
      if (typeof jQuery !== 'undefined' && jQuery.fn.slick) {
        jQuery('#related-posts-carousel').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    }, 100);
  } else if (relatedPostsCarousel) {
    document.getElementById('related-posts-section').style.display = 'none';
  }

  // Store current post data for social sharing
  window.currentPost = {
    title: post.title,
    url: window.location.href
  };
}

// Social sharing functions
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function shareOnWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(window.currentPost?.title || 'Check out this post!');
  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('¡Link copiado al portapapeles!');
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, initializing blog...');

  if (document.getElementById('posts-container')) {
    console.log('Posts container found, loading posts...');
    initBlog();
  }

  if (window.location.pathname.includes('single.html')) {
    console.log('Single post page detected, loading post...');
    initSinglePost();
  }
});
