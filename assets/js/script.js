$(document).ready(function(){

    // Smooth scroll
    $("a").on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    // Habilitar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Color de fondo dinámico navbar
    const nav = document.querySelector('.navbar');
    const header = document.querySelector('#carouselHero');
    const navHeight = nav.getBoundingClientRect().height;

    function updateNavColor(entries){
        const [entry] = entries;
        if (!entry.isIntersecting){
            nav.classList.add("bg-cyan", "border-bottom");
            nav.classList.remove("text-shadow");
        } else{
            nav.classList.add("text-shadow");
            nav.classList.remove("bg-cyan", "border-bottom");
        }
    }

    const headerObserver = new IntersectionObserver(updateNavColor, {
        root: null,
        threshold: 0,
        rootMargin: `-${navHeight}px`
    });

    headerObserver.observe(header);

});
