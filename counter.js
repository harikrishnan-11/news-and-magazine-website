document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {

        const target = +counter.getAttribute("data-target");
        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (current < target) {

                current += increment;

                if (target >= 1000000) {
                    counter.textContent =
                        (current / 1000000).toFixed(1) + "M+";
                } else if (target >= 1000) {
                    counter.textContent =
                        Math.floor(current / 1000) + "K+";
                } else {
                    counter.textContent =
                        Math.floor(current) + "+";
                }

                requestAnimationFrame(updateCounter);

            } else {

                if (target >= 1000000) {
                    counter.textContent = "1M+";
                } else if (target >= 1000) {
                    counter.textContent =
                        (target / 1000).toFixed(target >= 10000 ? 0 : 1) + "K+";
                } else {
                    counter.textContent = target + "+";
                }

            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

});
