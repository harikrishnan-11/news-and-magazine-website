const reveals = document.querySelectorAll(
    '.about-section,.coverage-card,.value-card,.team-card,.mission-card,.timeline-item,.stat-box'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }

        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(item => {
    item.classList.add('reveal');
    observer.observe(item);
});
