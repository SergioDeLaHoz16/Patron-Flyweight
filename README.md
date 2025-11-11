# Patrón Flyweight - Infografía Interactiva

Una infografía interactiva y animada sobre el patrón de diseño Flyweight, creada con HTML y TailwindCSS.

## Características

- ✨ Animaciones suaves y transiciones
- 📱 Diseño completamente responsive
- 🎨 Interfaz moderna con gradientes y efectos visuales
- 📊 Diagramas UML interactivos
- 🎯 Secciones bien organizadas y componentes modulares
- 📁 Estructura de archivos organizada siguiendo buenas prácticas

## Estructura del Proyecto

```
Patron-Flyweight/
├── index.html              # Archivo HTML principal
├── diagrama-flyweight.png  # Imagen del diagrama UML
├── README.md              # Documentación del proyecto
├── css/
│   └── styles.css         # Estilos CSS personalizados y animaciones
└── js/
    └── animations.js      # JavaScript para animaciones y efectos interactivos
```

## Secciones

El proyecto incluye las siguientes secciones:

1. **Hero Section**: Introducción al patrón Flyweight con ilustración de balancín
2. **Estados**: Explicación de estados intrínseco y extrínseco
3. **Objetivos**: 5 objetivos principales del patrón
4. **Soluciones y Beneficios**: Problemas que resuelve y ventajas
5. **Desafíos**: 7 desafíos del patrón Flyweight
6. **Diagrama**: Diagrama UML interactivo con explicaciones numeradas
7. **Casos de Uso**: 5 casos de uso comunes
8. **Conclusión**: Resumen y conclusión del patrón

## Uso

Simplemente abre el archivo `index.html` en tu navegador web. No se requiere instalación adicional ya que TailwindCSS se carga desde CDN.

```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar un servidor local (recomendado)
python -m http.server 8000
# Luego visita http://localhost:8000
```

## Tecnologías

- **HTML5**: Estructura semántica
- **TailwindCSS** (CDN): Framework CSS utility-first
- **CSS3**: Animaciones personalizadas y efectos visuales
- **JavaScript (ES6+)**: Intersection Observer API para animaciones al scroll

## Archivos y Responsabilidades

### `index.html`
Archivo HTML principal que contiene toda la estructura y contenido de la infografía.

### `css/styles.css`
Contiene:
- Definiciones de animaciones (@keyframes)
- Clases de animación personalizadas
- Efectos hover y transiciones
- Estilos específicos para componentes (balancín, números de sección, etc.)

### `js/animations.js`
Maneja:
- Sistema de animaciones al hacer scroll usando Intersection Observer
- Inicialización de animaciones para elementos visibles/no visibles
- Efectos interactivos (hover del balancín)
- Gestión del ciclo de vida de las animaciones

## Animaciones

El proyecto incluye varias animaciones:

- **Float**: Animación flotante para elementos del balancín
- **Slide In**: Entrada desde los lados (izquierda/derecha)
- **Fade In Up**: Aparición desde abajo
- **Scale In**: Escalado de entrada con rotación
- **Pulse**: Pulsación suave para iconos
- **Hover Effects**: Efectos al pasar el mouse sobre tarjetas

Las animaciones se activan automáticamente cuando los elementos entran en el viewport usando Intersection Observer API.

## Personalización

### Colores
Puedes personalizar los colores editando las clases de TailwindCSS en `index.html`. El esquema de colores actual usa:
- Azul oscuro (`blue-900`, `blue-800`) para fondos
- Azul claro (`blue-600`, `blue-500`) para acentos
- Verde (`green-500`) para elementos optimizados

### Animaciones
Modifica las animaciones en `css/styles.css`:
- Ajusta duraciones en las clases `.animate-*`
- Modifica los delays en `.delay-*`
- Personaliza los efectos hover en `.card-hover`

### Comportamiento JavaScript
Ajusta el comportamiento de las animaciones en `js/animations.js`:
- Cambia el `threshold` y `rootMargin` del Intersection Observer
- Modifica los tiempos de inicialización
- Ajusta las transformaciones de entrada

## Buenas Prácticas Implementadas

✅ Separación de responsabilidades (HTML, CSS, JS)  
✅ Estructura de carpetas organizada  
✅ Código comentado y documentado  
✅ Uso de Intersection Observer para optimización  
✅ Animaciones CSS puras cuando es posible  
✅ JavaScript modular y reutilizable  

## Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

