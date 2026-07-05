document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            
            // Animate lines to X
            const lines = mobileMenuBtn.querySelectorAll('span');
            lines[0].style.transform = 'translateY(0) rotate(45deg)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'translateY(0) rotate(-45deg)';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            
            // Revert lines
            const lines = mobileMenuBtn.querySelectorAll('span');
            lines[0].style.transform = 'translateY(-8px) rotate(0)';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'translateY(8px) rotate(0)';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // 2. Mouse Tracker Glow
    const glow = document.getElementById('mouse-glow');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const x = e.clientX;
                const y = e.clientY;
                // Use requestAnimationFrame for smoother performance
                requestAnimationFrame(() => {
                    glow.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
                });
            }
        });
    }

    // 3. 3D Tilt Effect for Skill Cards
    const cards = document.querySelectorAll('.hover-tilt');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 768) return; // Disable tilt on mobile

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // 4. GSAP Animations Setup
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Initial Load Timeline
        const tl = gsap.timeline();
        
        // Auto-reset visibility since CSS hides them initially
        gsap.set(".gsap-nav, .gsap-hero-text, .gsap-reveal", { visibility: "visible" });

        // Nav Load
        tl.fromTo(".gsap-nav", 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );

        // Hero Load
        tl.fromTo(".gsap-hero-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
            "-=0.4"
        );

        // Scroll Reveals
        const revealElements = document.querySelectorAll('.gsap-reveal');
        revealElements.forEach(el => {
            gsap.fromTo(el, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    // 5. Handle Contact Form Submit
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Transmitting...';
            btn.style.opacity = '0.7';

            const rawFormData = new FormData(form);
            const formData = new FormData();

            // Client-side sanitization
            for (const [key, value] of rawFormData.entries()) {
                if (typeof value === 'string') {
                    const sanitized = value.replace(/[<>;'"]/g, '');
                    formData.append(key, sanitized);
                } else {
                    formData.append(key, value);
                }
            }

            try {
                const response = await fetch("https://formsubmit.co/ajax/srivastava.deepanshu24@gmail.com", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    form.reset();
                    btn.innerText = 'Message Received ✓';
                    btn.style.backgroundColor = '#00f0ff';
                    btn.style.color = '#000';
                } else {
                    btn.innerText = 'Transmission Failed ✗';
                    btn.style.backgroundColor = '#ff00ff';
                    btn.style.color = '#fff';
                }
            } catch (error) {
                btn.innerText = 'Transmission Failed ✗';
                btn.style.backgroundColor = '#ff00ff';
                btn.style.color = '#fff';
            } finally {
                btn.style.opacity = '1';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'white';
                    btn.style.color = 'black';
                }, 3000);
            }
        });
    }
});
