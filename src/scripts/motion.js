const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document
  .querySelectorAll(
    '.page-hero__inner, .section-head, .split > div, .steps li, .faq details, .timeline li, .video-card, .role-list li, .document, .contact-list, .contact-item, .contact-card, .contact-card__media, .portal-band__inner, .prose, .split__figure, .gallery figure, .gallery__more, .gallery-credits',
  )
  .forEach((el) => el.classList.add('reveal'));

const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion) {
  revealItems.forEach((item) => item.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const menu = document.querySelector('.mobile-menu');
menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => menu.removeAttribute('open'));
});
