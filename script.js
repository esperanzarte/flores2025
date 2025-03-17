
const lazyElements = document.querySelectorAll('.lazy-load'); // Selecciona todos los elementos con la clase 'lazy-load'

const options = {
    root: null, // Usar el viewport como contenedor raíz
    rootMargin: '0px',
    threshold: 0.1 // El porcentaje del elemento visible para disparar el cargado
};

// Función que se ejecutará cuando los elementos entren en el viewport
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            // Si es un video
            if (element.tagName.toLowerCase() === 'video') {
                element.src = element.dataset.src;
                element.load(); // Carga el video
                element.classList.remove('lazy-load');
            }

            observer.unobserve(element); // Deja de observar este elemento
        }
    });
};

// Crea un IntersectionObserver para observar el lazy loading
const observer = new IntersectionObserver(lazyLoad, options);

// Empieza a observar todos los elementos
lazyElements.forEach(element => {
    observer.observe(element);
});






