/**
 * Clear Seas Aquatic Services - Modern Navigation Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const nav = document.querySelector('.glass-nav');
    const navToggle = document.querySelector('#nav-toggle');
    const modal = document.querySelector('#modal');
    const modalTriggerBtns = document.querySelectorAll('#openModal, #footerCTA, .cta-banner button');
    const closeBtn = document.querySelector('.close-btn');

    // 2. STICKY NAV OBSERVER
    // Adds a shadow/background when user scrolls past 50px
    const navObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];
        nav.classList.toggle('nav-scrolled', !entry.isIntersecting);
    }, { threshold: 0.9 });

    // Dummy element at top of page to trigger observer
    const scrollWatch = document.createElement('div');
    document.body.prepend(scrollWatch);
    navObserver.observe(scrollWatch);

    // 3. MODAL LOGIC (ES6 Arrow Functions)
    const toggleModal = (show = true) => {
        modal.style.display = show ? 'block' : 'none';
        document.body.style.overflow = show ? 'hidden' : ''; // Prevent scroll behind modal
    };

    modalTriggerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(true);
        });
    });

    closeBtn?.addEventListener('click', () => toggleModal(false));

    window.addEventListener('click', (e) => {
        if (e.target === modal) toggleModal(false);
    });

    // 4. AUTO-CLOSE MOBILE NAV ON LINK CLICK
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle.checked) navToggle.checked = false;
        });
    });
});