document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('hidden');
            const isExpanded = !mainNav.classList.contains('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

            const icon = mobileMenuToggle.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (!mainNav.classList.contains('hidden')) {
                    mainNav.classList.add('hidden');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    }

    // Scroll Animations (Fade In Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(section => {
        observer.observe(section);
    });

    // Initialize Slick Slider (Portfolio)
    if ($('.portfolio-slider').length) {
        $('.portfolio-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<button type="button" class="custom-slick-prev absolute top-1/2 left-[-50px] transform -translate-y-1/2 z-10 text-slate-400 hover:text-red-500 transition-colors focus:outline-none"><i class="fa-solid fa-chevron-left text-4xl"></i></button>',
            nextArrow: '<button type="button" class="custom-slick-next absolute top-1/2 right-[-50px] transform -translate-y-1/2 z-10 text-slate-400 hover:text-red-500 transition-colors focus:outline-none"><i class="fa-solid fa-chevron-right text-4xl"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    // Scroll Spy for Navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    function highlightNavigation() {
        let scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; // Offset for header
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('bg-red-600', 'text-white', 'shadow-md');
                    link.classList.add('text-slate-600', 'dark:text-slate-400', 'hover:text-red-500', 'dark:hover:text-red-500', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');

                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('bg-red-600', 'text-white', 'shadow-md');
                        link.classList.remove('text-slate-600', 'dark:text-slate-400', 'hover:text-red-500', 'dark:hover:text-red-500', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial check

    // Blog Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterBtns.length > 0) {
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

                blogCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === category) {
                        card.style.display = 'flex';
                        // Re-trigger animation if needed
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    // Services Accordion
    const serviceHeaders = document.querySelectorAll('.service-header');

    if (serviceHeaders.length > 0) {
        serviceHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('i');
                const isExpanded = header.getAttribute('aria-expanded') === 'true';

                // Close all other items
                serviceHeaders.forEach(otherHeader => {
                    if (otherHeader !== header) {
                        otherHeader.setAttribute('aria-expanded', 'false');
                        otherHeader.nextElementSibling.style.maxHeight = '0';
                        otherHeader.nextElementSibling.classList.remove('opacity-100');
                        otherHeader.nextElementSibling.classList.add('opacity-0');
                        otherHeader.querySelector('i').classList.remove('rotate-45', 'text-red-500');
                    }
                });

                // Toggle current item
                if (!isExpanded) {
                    header.setAttribute('aria-expanded', 'true');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.classList.remove('opacity-0');
                    content.classList.add('opacity-100');
                    icon.classList.add('rotate-45', 'text-red-500');
                } else {
                    header.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = '0';
                    content.classList.remove('opacity-100');
                    content.classList.add('opacity-0');
                    icon.classList.remove('rotate-45', 'text-red-500');
                }
            });
        });

        // Initialize first item as open
        const firstHeader = serviceHeaders[0];
        if (firstHeader && firstHeader.getAttribute('aria-expanded') === 'true') {
            firstHeader.querySelector('i').classList.add('rotate-45', 'text-red-500');
        }
    }

    // Contact Section Animation (GSAP)
    const canvas = document.getElementById('contact-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }

        function createParticles() {
            particles = [];
            const numParticles = 50;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2 + 1,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    color: localStorage.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            // Connect particles
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = p1.color;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });

        // Update particle color on theme change
        const observer = new MutationObserver(() => {
            createParticles();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        resize();
        createParticles();
        animate();
    }
});
