/* ==========================================================================
   白月光 (Baiyueguang) Cloud Accelerator - Lightweight Native Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Logo Interactivity & Back To Top
  const logo = document.getElementById('brandLogo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      // Interactive effect
      logo.style.transform = 'scale(0.9) rotate(-3deg)';
      setTimeout(() => {
        logo.style.transform = '';
      }, 200);

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Header Navigation Links Smooth Scroll
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 3. Section Navigation & Floating Arrows Logic
  const sections = Array.from(document.querySelectorAll('.section'));
  const btnUp = document.getElementById('navUp');
  const btnDown = document.getElementById('navDown');
  const dotsContainer = document.getElementById('navDots');

  // Generate indicator dots dynamically
  let dots = [];
  if (dotsContainer && sections.length > 0) {
    sections.forEach((sec, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('title', sec.getAttribute('data-name') || `Section ${idx + 1}`);
      dot.addEventListener('click', () => {
        sec.scrollIntoView({ behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  // Helper to find currently active section index based on scroll position
  function getCurrentSectionIndex() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= sections[i].offsetTop) {
        return i;
      }
    }
    return 0;
  }

  // Update active state of dots on scroll
  window.addEventListener('scroll', () => {
    const currentIndex = getCurrentSectionIndex();
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }, { passive: true });

  // Arrow click handlers (Section by Section)
  if (btnUp) {
    btnUp.addEventListener('click', () => {
      // Visual feedback
      btnUp.style.transform = 'scale(0.85)';
      setTimeout(() => btnUp.style.transform = '', 150);

      const curr = getCurrentSectionIndex();
      if (curr > 0) {
        sections[curr - 1].scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (btnDown) {
    btnDown.addEventListener('click', () => {
      // Visual feedback
      btnDown.style.transform = 'scale(0.85)';
      setTimeout(() => btnDown.style.transform = '', 150);

      const curr = getCurrentSectionIndex();
      if (curr < sections.length - 1) {
        sections[curr + 1].scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    });
  }

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      // Close all other items for clean accordion effect
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
});
