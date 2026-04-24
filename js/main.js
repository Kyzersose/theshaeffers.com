// The Shaeffer Archivist

(function () {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  // Top nav and footer active links
  document.querySelectorAll('.nav-links a, .footer-nav-col a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Bottom nav active item
  document.querySelectorAll('.bottom-nav-item').forEach(function (item) {
    const href = item.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      item.classList.add('active');
    }
  });

  // Letter wave — split .nav-title into individually animated spans
  const navTitle = document.querySelector('.nav-title');
  if (navTitle) {
    const chars = navTitle.textContent.split('');
    navTitle.textContent = '';
    chars.forEach(function (char, i) {
      const s = document.createElement('span');
      s.className = 'letter';
      s.style.setProperty('--i', i);
      s.textContent = char === ' ' ? ' ' : char;
      navTitle.appendChild(s);
    });
  }

  // Scroll-triggered slide-in for image containers
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const slideEls = Array.from(document.querySelectorAll(
      '.bento-card, .adv-card, .j-card, .hero-photo-wrap, .ordinary-magic-inner > div'
    ));

    slideEls.forEach(function (el, i) {
      el.classList.add('slide-ready', i % 2 === 0 ? 'slide-from-left' : 'slide-from-right');
    });

    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    slideEls.forEach(function (el) { obs.observe(el); });
  }

})();
