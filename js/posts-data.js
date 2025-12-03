// Expanded blog posts with detailed content, tags, and reading time
const expandedPostsData = [
  {
    "id": 1,
    "title": "Cómo optimizar el rendimiento web en 2024",
    "slug": "optimizar-rendimiento-web-2024",
    "excerpt": "Descubre las mejores prácticas para hacer que tu sitio web cargue más rápido y ofrezca una mejor experiencia de usuario.",
    "content": `
      <p class="lead">El rendimiento web es crucial para el éxito de cualquier sitio en 2024. Los usuarios esperan que las páginas carguen en menos de 3 segundos, y Google penaliza los sitios lentos en sus rankings de búsqueda. En este artículo, exploraremos las técnicas más efectivas para optimizar tu sitio web.</p>

      <h2>Core Web Vitals: Las Métricas que Importan</h2>
      <p>Google ha establecido tres métricas fundamentales conocidas como Core Web Vitals que evalúan la experiencia del usuario:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> Mide el tiempo que tarda en cargarse el elemento más grande visible en la pantalla. Debe ocurrir en menos de 2.5 segundos para una buena experiencia.</li>
        <li><strong>FID (First Input Delay):</strong> Evalúa la interactividad midiendo el tiempo desde que un usuario interactúa con tu página hasta que el navegador responde. Debe ser menor a 100ms.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Mide la estabilidad visual de la página. Un CLS menor a 0.1 indica que los elementos no se mueven inesperadamente.</li>
      </ul>

      <h2>Optimización de Imágenes</h2>
      <p>Las imágenes suelen ser el recurso más pesado en una página web. Aquí están las mejores prácticas:</p>
      <h3>Formatos Modernos</h3>
      <p>Utiliza formatos de imagen de próxima generación como WebP y AVIF. Estos formatos ofrecen una compresión superior sin pérdida significativa de calidad. WebP puede reducir el tamaño de archivo hasta un 30% comparado con JPEG.</p>
      
      <h3>Lazy Loading</h3>
      <p>Implementa lazy loading para imágenes que están fuera del viewport inicial. Esto se puede lograr fácilmente con el atributo <code>loading="lazy"</code> en HTML5, o mediante bibliotecas como Intersection Observer API para mayor control.</p>

      <h3>Responsive Images</h3>
      <p>Usa el elemento <code>&lt;picture&gt;</code> y el atributo <code>srcset</code> para servir imágenes optimizadas según el tamaño de pantalla del dispositivo.</p>

      <h2>Minimización y Compresión de Recursos</h2>
      <p>Reducir el tamaño de tus archivos CSS y JavaScript es esencial:</p>
      <ul>
        <li><strong>Minificación:</strong> Elimina espacios en blanco, comentarios y caracteres innecesarios de tu código.</li>
        <li><strong>Tree Shaking:</strong> Remueve código JavaScript no utilizado de tus bundles finales.</li>
        <li><strong>Compresión Gzip/Brotli:</strong> Configura tu servidor para comprimir recursos antes de enviarlos al navegador.</li>
      </ul>

      <h2>Caché y CDN</h2>
      <p>Implementa una estrategia de caché efectiva utilizando headers HTTP apropiados como <code>Cache-Control</code> y <code>ETag</code>. Considera usar un CDN (Content Delivery Network) para servir recursos estáticos desde servidores geográficamente cercanos a tus usuarios.</p>

      <h2>Critical CSS y Carga Asíncrona</h2>
      <p>Extrae el CSS crítico necesario para renderizar el contenido above-the-fold e inclúyelo inline en el <code>&lt;head&gt;</code>. Carga el resto del CSS de forma asíncrona para no bloquear el renderizado inicial.</p>

      <h2>Conclusión</h2>
      <p>La optimización del rendimiento web es un proceso continuo que requiere monitoreo constante. Utiliza herramientas como Google PageSpeed Insights, Lighthouse y WebPageTest para medir y mejorar continuamente tu sitio. Recuerda que cada milisegundo cuenta cuando se trata de la experiencia del usuario y las conversiones.</p>
    `,
    "image": "blog-1.jpg",
    "category": "web",
    "categoryName": "Desarrollo Web",
    "date": "2024-10-02",
    "author": "Enrique Contreras",
    "tags": ["Performance", "Core Web Vitals", "Optimización", "SEO", "PageSpeed"],
    "readingTime": 5
  }
];
