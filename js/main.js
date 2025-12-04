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

    // Contact Section Animation (Spiderweb)
    const spiderwebContainer = document.getElementById('spiderweb-container');
    if (spiderwebContainer) {
        function createSpiderweb() {
            spiderwebContainer.innerHTML = ''; // Clear previous
            const width = spiderwebContainer.offsetWidth;
            const height = spiderwebContainer.offsetHeight;
            const centerX = width / 2;
            const centerY = height / 2;
            const maxRadius = Math.max(width, height) * 0.8;

            const ns = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(ns, "svg");
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
            svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
            svg.style.overflow = "visible";

            const color = localStorage.theme === 'dark' ? '#ffffff' : '#000000';

            // Create Radial Lines
            const numRadials = 12;
            for (let i = 0; i < numRadials; i++) {
                const angle = (Math.PI * 2 * i) / numRadials;
                const x2 = centerX + Math.cos(angle) * maxRadius;
                const y2 = centerY + Math.sin(angle) * maxRadius;

                const line = document.createElementNS(ns, "line");
                line.setAttribute("x1", centerX);
                line.setAttribute("y1", centerY);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("stroke", color);
                line.setAttribute("stroke-width", "2.5");
                line.classList.add("web-line");
                svg.appendChild(line);
            }

            // Create Concentric Polygons
            const numRings = 10;
            for (let i = 1; i <= numRings; i++) {
                const radius = (maxRadius / numRings) * i;
                let points = "";

                for (let j = 0; j < numRadials; j++) {
                    const angle = (Math.PI * 2 * j) / numRadials;
                    const x = centerX + Math.cos(angle) * radius;
                    const y = centerY + Math.sin(angle) * radius;
                    points += `${x},${y} `;
                }
                // Close the loop
                const angle = 0;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                points += `${x},${y}`;

                const polygon = document.createElementNS(ns, "polyline");
                polygon.setAttribute("points", points);
                polygon.setAttribute("fill", "none");
                polygon.setAttribute("stroke", color);
                polygon.setAttribute("stroke-width", "2.5");
                polygon.classList.add("web-line");
                svg.appendChild(polygon);
            }

            spiderwebContainer.appendChild(svg);

            // Animate
            const lines = svg.querySelectorAll('.web-line');

            // Set initial state for drawSVG effect
            lines.forEach(line => {
                const length = line.getTotalLength();
                line.style.strokeDasharray = length;
                line.style.strokeDashoffset = length;
            });

            gsap.to(lines, {
                strokeDashoffset: 0,
                duration: 2,
                stagger: {
                    amount: 1.5,
                    from: "center"
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 80%",
                }
            });
        }

        // Re-create on resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(createSpiderweb, 200);
        });

        // Re-create on theme change
        const observer = new MutationObserver(() => {
            createSpiderweb();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Initial create
        // Wait a bit for layout to settle
        setTimeout(createSpiderweb, 100);
    }
});
