const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let current = 0, timer;

        function goTo(n) {
            slides[current].classList.remove('active');
            dots[current].classList.remove('active');
            current = (n + slides.length) % slides.length;
            slides[current].classList.add('active');
            dots[current].classList.add('active');
        }

        function startAuto() { timer = setInterval(() => goTo(current + 1), 6000); }
        function resetAuto() { clearInterval(timer); startAuto(); }

        document.querySelector('.next-slide').addEventListener('click', () => { goTo(current + 1); resetAuto(); });
        document.querySelector('.prev-slide').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
        dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));

        startAuto();

        // Sticky section headers offset
        document.querySelectorAll('.sticky-header .section-header').forEach(h => {
            h.style.top = '72px';
        });