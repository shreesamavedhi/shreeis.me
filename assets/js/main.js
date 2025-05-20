// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections and shapes on scroll
document.querySelectorAll('section').forEach(section => {
    // Trigger shape animations
    if (section.classList.contains('skills') || 
        section.classList.contains('experience') || 
        section.classList.contains('projects')) {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                onEnter: () => section.querySelector('::before').style.animationPlayState = 'running'
            }
        });
    }

    // Existing section animations
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        }
    });
});

// Profile card flip
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    profileCard.addEventListener('click', () => {
        profileCard.classList.toggle('flipped');
    });
}

// Skill items hover effect
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Timeline items animation
document.querySelectorAll('.timeline-item').forEach(item => {
    gsap.from(item, {
        opacity: 0,
        x: item.classList.contains('left') ? -50 : 50,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1
        }
    });
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                contactForm.reset();
                alert('Message sent successfully!');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    });
}
