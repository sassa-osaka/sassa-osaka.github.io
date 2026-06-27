/* ============================================
   刷々 sassa — script.js
   ============================================ */

(function () {
  'use strict';

  /* === Navigation: scroll border + hamburger === */
  const nav      = document.querySelector('.site-nav');
  const toggle   = document.querySelector('.nav-toggle');
  const drawer   = document.querySelector('.nav-drawer');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      const open = toggle.classList.toggle('open');
      drawer.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* === Active nav link === */
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* === Fade-in on scroll (IntersectionObserver) === */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    io.observe(el);
  });

  /* === Staggered fade for groups === */
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    var children = group.querySelectorAll('.fade-in');
    children.forEach(function (child, i) {
      child.style.transitionDelay = (i * 80) + 'ms';
    });
  });

})();
