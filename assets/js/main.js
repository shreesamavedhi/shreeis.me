document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling for navigation links
  navItems.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for fixed header
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Highlight active section in navigation
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Adjust for fixed header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navItems.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
  
  // Animated skill bars
  function animateSkillBars() {
    const skillSection = document.querySelector('.skills-section');
    if (!skillSection) return;
    
    const skillLevels = document.querySelectorAll('.skill-level');
    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
      skillLevels.forEach(level => {
        const width = level.style.width;
        level.style.width = '0';
        setTimeout(() => {
          level.style.width = width;
        }, 100);
      });
      // Remove event listener once animation is triggered
      window.removeEventListener('scroll', animateSkillBars);
    }
  }
  
  window.addEventListener('scroll', animateSkillBars);
  // Trigger once on page load for visible elements
  animateSkillBars();
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Get form inputs
      const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
      const emailInput = contactForm.querySelector('input[placeholder="Your Email"]');
      const subjectInput = contactForm.querySelector('input[placeholder="Subject"]');
      const messageInput = contactForm.querySelector('textarea');
      
      // Basic validation
      if (nameInput.value.trim() === '' || 
          emailInput.value.trim() === '' || 
          subjectInput.value.trim() === '' || 
          messageInput.value.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Normally we would send this to a server, but for now just show a success message
      alert('Message sent successfully!');
      contactForm.reset();
    });
  }
  
  // Back to top button smooth scroll
  const backToTopBtn = document.querySelector('.back-to-top a');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
