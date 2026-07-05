document.addEventListener('DOMContentLoaded', () => {

    // --- 1. STICKY NAVBAR MANAGEMENT & LINK TRACKER ---
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Sticky logic
        if (window.scrollY > 40) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Active target element tracking setup
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // --- 2. MOBILE RESPONSIVE HAMBURGER NAVIGATION ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('is-active');
        navLinksContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinksContainer.classList.remove('active');
        });
    });

    // --- 3. SCROLL REVEAL TIMING FLOW ENGINE ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const triggerRevealOnScroll = () => {
        const thresholdLine = window.innerHeight * 0.88;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < thresholdLine) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', triggerRevealOnScroll);
    triggerRevealOnScroll(); // Execution on initialization

    // --- 4. DYNAMIC INCREMENTAL NUMERIC COUNTER ---
    const counterElements = document.querySelectorAll('.counter');
    let hasCountersRun = false;

    const runIncrementalCounters = () => {
        counterElements.forEach(counter => {
            counter.innerText = '0';
            const targetLimit = +counter.getAttribute('data-target');
            const stepIncrement = targetLimit / 35; // Target animation speed resolution

            const executeUpdate = () => {
                const currentVal = +counter.innerText;
                if (currentVal < targetLimit) {
                    counter.innerText = Math.ceil(currentVal + stepIncrement);
                    setTimeout(executeUpdate, 30);
                } else {
                    counter.innerText = targetLimit;
                }
            };
            executeUpdate();
        });
    };

    // Observer intercept mapping for statistics visibility
    const statsBlock = document.querySelector('.hero-stats');
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCountersRun) {
            runIncrementalCounters();
            hasCountersRun = true;
        }
    }, { threshold: 0.15 });

    if (statsBlock) statsObserver.observe(statsBlock);

    // --- 5. INTERACTIVE INTERIOR GALLERY CATEGORY FILTERS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class states
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterCriterion = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                if (filterCriterion === 'all' || card.classList.contains(filterCriterion)) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.92)';
                    setTimeout(() => { card.style.display = 'none'; }, 400);
                }
            });
        });
    });

    // --- 6. FAQ ACCORDION EXPANSION MECHANISM ---
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const currentItem = title.parentElement;
            const contentBox = title.nextElementSibling;

            // Toggle logic for item expansion
            if (currentItem.classList.contains('active')) {
                contentBox.style.maxHeight = null;
                currentItem.classList.remove('active');
            } else {
                // Collapse alternative expanding blocks
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                });

                currentItem.classList.add('active');
                contentBox.style.maxHeight = contentBox.scrollHeight + "px";
            }
        });
    });

    // --- 7. MATERIAL UI BUTTON RIPPLE TRANSITIONS ---
    const interactiveRipples = document.querySelectorAll('.ripple');

    interactiveRipples.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            const clientX = event.clientX - event.target.getBoundingClientRect().left;
            const clientY = event.clientY - event.target.getBoundingClientRect().top;

            const rippleSpan = document.createElement('span');
            rippleSpan.classList.add('ripple-effect');
            rippleSpan.style.left = `${clientX}px`;
            rippleSpan.style.top = `${clientY}px`;

            this.appendChild(rippleSpan);
            setTimeout(() => rippleSpan.remove(), 550);
        });
    });

    // --- 8. UTILITY SCROLL BACK TO TOP DESK ---
    const scrollTopBtn = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 9. DIGITAL CORE INQUIRY FORM MANAGEMENT ---
    const inquiryForm = document.getElementById('stoneInquiryForm');
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('clientName').value;
        const selectedStone = document.getElementById('stoneRequired').value;
        
        alert(`Greetings ${nameInput}! Your strategic inquiry for [${selectedStone}] has been verified. Our corporate Kishangarh yard manager will compile blueprint pricing arrays and reach out shortly.`);
        inquiryForm.reset();
    });
});
