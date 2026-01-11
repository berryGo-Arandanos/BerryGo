      // LÓGICA DE INTERACCIÓN
        document.addEventListener('DOMContentLoaded', () => {
            
            // A. Efecto de "Aparición al hacer Scroll" (Fade In)
            // --------------------------------------------------
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Se activa cuando el 10% del elemento es visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Dejar de observar una vez animado
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
                observer.observe(section);
            });


            // B. Efecto en el Header al hacer Scroll
            // --------------------------------------------------
            const header = document.getElementById('main-header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('shadow-md');
                    header.classList.replace('bg-white/95', 'bg-white');
                } else {
                    header.classList.remove('shadow-md');
                    header.classList.replace('bg-white', 'bg-white/95');
                }
            });
        });
