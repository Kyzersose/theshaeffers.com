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
})();
