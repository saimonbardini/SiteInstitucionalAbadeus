(function () {
  'use strict';
  document.documentElement.classList.add('js');

  const $ = (selector) => document.querySelector(selector);
  const setText = (selector, value) => {
    const element = $(selector);
    if (element && value !== undefined && value !== null) element.textContent = value;
  };

  // Os conteúdos da próxima edição são atualizados em config.js.
  const event = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG.proximaEdicao : {};
  setText('#hero-status', event.status || 'Próxima edição em preparação');
  setText('#evento-data', event.data || 'A confirmar');
  setText('#evento-horario', event.horario || 'A confirmar');
  setText('#evento-local', event.local || 'A confirmar');
  setText('#evento-local-sub', event.localDetalhes || 'Criciúma, Santa Catarina');
  setText('#evento-ingressos', event.ingressos || 'A divulgar');
  setText('#evento-ingressos-sub', event.ingressosDetalhes || 'Canais e valores serão informados.');
  setText('#currentYear', new Date().getFullYear());

  // Os textos explicativos acompanham os dados preenchidos no arquivo de configuração.
  if (event.data || event.horario || event.local || event.ingressos) {
    setText('#editionIntro', 'Confira os detalhes divulgados para a próxima edição. As informações que ainda não foram confirmadas aparecem como “A confirmar” ou “A divulgar”.');
  }
  if (event.data) {
    setText('#evento-data-sub', 'Informação da próxima edição.');
    setText('#faqData', `A data informada para a próxima edição é ${event.data}. Acompanhe os canais oficiais da ABADEUS para eventuais atualizações.`);
  }
  if (event.local) {
    setText('#faqLocal', `O local informado para a próxima edição é ${event.local}, ${event.localDetalhes || 'Criciúma - SC'}. Confira os canais oficiais para orientações completas.`);
  }
  if (event.ingressos) {
    setText('#faqIngressos', `Situação da divulgação de ingressos: ${event.ingressos}. ${event.ingressosDetalhes || 'Confira as informações pelos canais oficiais da ABADEUS.'} Este site é informativo e não realiza compras.`);
  }

  // Substitui fotos por uma ilustração local caso a imagem online falhe.
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const useFallback = () => {
      if (img.getAttribute('src') === img.dataset.fallback) return;
      img.src = img.dataset.fallback;
      img.alt = 'Ilustração estilizada de uma panela de paella';
      if (img.closest('.story__image')) {
        setText('.story__image-caption', 'ILUSTRAÇÃO DA PAELLA BENEFICENTE');
      }
    };
    img.addEventListener('error', useFallback);
    if (img.complete && img.naturalWidth === 0) useFallback();
  });

  // Menu responsivo com suporte a teclado.
  const menuButton = $('#menuToggle');
  const menu = $('#mobileNav');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menu.inert = true;
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    const opened = menuButton.getAttribute('aria-expanded') === 'true';
    if (opened) {
      closeMenu();
    } else {
      menuButton.setAttribute('aria-expanded', 'true');
      menuButton.setAttribute('aria-label', 'Fechar menu');
      menu.inert = false;
      document.body.classList.add('menu-open');
    }
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });

  // FAQ: uma pergunta aberta de cada vez.
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
    });
  });

  // Pequenas transições com respeito à preferência por movimento reduzido.
  const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !motionReduced) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -25px 0px' });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('is-visible'));
  }

  const topButton = $('#backToTop');
  const header = $('.site-header');
  const onScroll = () => {
    topButton.classList.toggle('is-visible', window.scrollY > 650);
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
