(function () {
  'use strict';

  /* Si una foto todavía no está en la carpeta, muestra un aviso en lugar de una imagen rota */
  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = '1'; t.src = 'img/sin-foto.svg'; }
  }, true);

  /* ---------- utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const slug = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const waLink = () => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
  const fmtDate = (d) => {
    const [y, m] = d.split('-').map(Number);
    const s = new Intl.DateTimeFormat('es-AR', { month: 'long', year: 'numeric' }).format(new Date(y, (m || 1) - 1, 1));
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  /* ---------- iconos (SVG en línea) ---------- */
  const svg = (inner, size = 24) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
  const ICON = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    thermo: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/>',
    hammer: '<path d="m15 12-8.37 8.37a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.9-1.9A2 2 0 0 1 19 8.2V7l-2.26-2.26a6 6 0 0 0-4.2-1.76L9 3l.92.82A6.2 6.2 0 0 1 12 8.4V10l2 2h1.17a2 2 0 0 1 1.41.59L18.5 14.5"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'
  };
  const icon = (name, size) => svg(ICON[name], size);
  const waIcon = (size = 28) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.18 1.6 6L4 28l7.13-1.87a12.04 12.04 0 0 0 4.9 1.04h.01C22.68 27.17 28 21.77 28 15.14 28 8.5 22.68 3 16.04 3zm0 22.1h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.23 1.11 1.13-4.12-.24-.38a9.97 9.97 0 0 1-1.53-5.33c0-5.52 4.5-10.01 10.04-10.01 5.52 0 10.02 4.5 10.02 10.03 0 5.53-4.5 10.32-9.71 10.32zm5.5-7.5c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.13 4.53.72.3 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.08 1.78-.72 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"/></svg>`;

  /* ---------- Navbar ---------- */
  $('#brand').innerHTML = `<img src="${esc(SITE.logo)}" alt="" width="40" height="40" /><span>${esc(SITE.brand)}</span>`;
  $('#brand').setAttribute('aria-label', `${SITE.brand} - Inicio`);
  const toggle = $('#navToggle'), menu = $('#menu');
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    toggle.innerHTML = icon(open ? 'x' : 'menu');
  };
  setMenu(false);
  toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

  /* ---------- WhatsApp (todos los enlaces con data-wa) ---------- */
  document.querySelectorAll('[data-wa]').forEach((a) => (a.href = waLink()));
  $('#waIconBtn').innerHTML = waIcon(20);
  $('#waFloat').innerHTML = waIcon(28);

  /* ---------- Hero ---------- */
  $('#heroTitle').textContent = SITE.hero.title;
  $('#heroText').textContent = SITE.hero.text;
  $('#heroImg').src = SITE.hero.image;
  $('#heroImg').alt = 'Logo de ' + SITE.brand;

  /* ---------- Servicios ---------- */
  const services = [
    ['droplet', 'Sanitario', 'Instalaciones, reparaciones y mantenimiento.'],
    ['wrench', 'Desagues Pluviales', 'Instalacion, reparación de cañerías y pérdidas.'],
    ['flame', 'Instalaciones de gas', 'Trabajos y servicios correspondientes a su habilitación y normativa vigente.'],
    ['thermo', 'Calefacción', 'Instalación, reparación y mantenimiento de sistemas de calefacción.']
  ];
  $('#services').innerHTML = services.map(([i, t, d]) =>
    `<li class="service"><span class="service__icon">${icon(i, 26)}</span><h3>${t}</h3><p>${d}</p></li>`).join('');

  /* ---------- Trabajos ---------- */
  let filter = 'Todos', openId = null;
  const filtersEl = $('#filters'), timeline = $('#timeline');

  function renderFilters() {
    filtersEl.innerHTML = ['Todos', ...CATEGORIES].map((c) =>
      `<button class="chip ${c === filter ? 'is-active' : ''}" aria-pressed="${c === filter}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');
  }

  function renderProjects() {
    const list = PROJECTS
      .filter((p) => filter === 'Todos' || p.category === filter)
      .sort((a, b) => b.date.localeCompare(a.date)); // más recientes primero

    if (!list.length) { timeline.innerHTML = '<p class="empty">Todavía no hay trabajos en esta categoría.</p>'; return; }

    timeline.innerHTML = list.map((p) => {
      const open = p.id === openId;
      return `
      <article class="project ${open ? 'is-open' : ''}" data-id="${esc(p.id)}">
        <button class="project__head" aria-expanded="${open}" aria-controls="gal-${esc(p.id)}" data-toggle>
          <img class="project__thumb" src="${esc(p.photos[0].src)}" alt="" width="120" height="90" loading="lazy" decoding="async" />
          <span class="project__info">
            <span class="project__meta"><time datetime="${esc(p.date)}">${fmtDate(p.date)}</time><span class="tag tag--${slug(p.category)}">${esc(p.category)}</span></span>
            <strong class="project__title">${esc(p.title)}</strong>
            <span class="project__desc">${esc(p.description)}</span>
          </span>
          <span class="project__count">${p.photos.length} fotos</span>
          <span class="project__chev">${icon('down')}</span>
        </button>
        <div id="gal-${esc(p.id)}" class="project__body" role="region" aria-label="Fotos de ${esc(p.title)}">
          <div class="project__inner">
            <ul class="grid">
              ${p.photos.map((ph, i) => `
              <li>
                <button class="grid__img" data-photo="${i}" aria-label="Ampliar foto ${i + 1}: ${esc(ph.caption || p.title)}">
                  <img src="${esc(ph.src)}" alt="${esc(ph.caption || p.title)}" width="400" height="300" loading="lazy" decoding="async" />
                </button>
                ${ph.caption ? `<p class="grid__cap">${esc(ph.caption)}</p>` : ''}
              </li>`).join('')}
            </ul>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  filtersEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-filter]'); if (!b) return;
    filter = b.dataset.filter; openId = null; renderFilters(); renderProjects();
  });

  timeline.addEventListener('click', (e) => {
    const card = e.target.closest('.project'); if (!card) return;
    const id = card.dataset.id;
    const photoBtn = e.target.closest('[data-photo]');
    if (photoBtn) { openLightbox(PROJECTS.find((p) => p.id === id), Number(photoBtn.dataset.photo), photoBtn); return; }
    if (e.target.closest('[data-toggle]')) {
      // Se cambian las clases sin re-renderizar para que la animación sea suave
      const willOpen = openId !== id;
      timeline.querySelectorAll('.project').forEach((c) => {
        const isThis = willOpen && c.dataset.id === id;
        c.classList.toggle('is-open', isThis);
        c.querySelector('[data-toggle]').setAttribute('aria-expanded', isThis);
      });
      openId = willOpen ? id : null;
    }
  });

  renderFilters(); renderProjects();

  /* ---------- Lightbox ---------- */
  let lb = null;
  function openLightbox(project, start, trigger) {
    const photos = project.photos; let idx = start;
    lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', `Fotos de ${project.title}`);
    const multi = photos.length > 1;
    lb.innerHTML = `
      <button class="lb__btn lb__close" aria-label="Cerrar">${icon('x')}</button>
      ${multi ? `<button class="lb__btn lb__prev" aria-label="Foto anterior">${icon('left')}</button>` : ''}
      <figure class="lb__fig"><img alt="" /><figcaption><span></span><small></small></figcaption></figure>
      ${multi ? `<button class="lb__btn lb__next" aria-label="Foto siguiente">${icon('right')}</button>` : ''}`;
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';

    const img = $('img', lb), cap = $('figcaption span', lb), cnt = $('figcaption small', lb);
    const show = (i) => {
      idx = (i + photos.length) % photos.length;
      img.src = photos[idx].src; img.alt = photos[idx].caption || project.title;
      cap.textContent = photos[idx].caption || ''; cnt.textContent = `${idx + 1} / ${photos.length}`;
    };
    const close = () => {
      document.removeEventListener('keydown', onKey);
      lb.remove(); lb = null; document.body.style.overflow = ''; trigger && trigger.focus();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft' && multi) show(idx - 1);
      else if (e.key === 'ArrowRight' && multi) show(idx + 1);
      else if (e.key === 'Tab') { // mantiene el foco dentro del visor
        const f = [...lb.querySelectorAll('button')]; const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    lb.addEventListener('click', (e) => {
      if (e.target.closest('.lb__close') || e.target === lb) close();
      else if (e.target.closest('.lb__prev')) show(idx - 1);
      else if (e.target.closest('.lb__next')) show(idx + 1);
    });
    document.addEventListener('keydown', onKey);
    show(idx);
    $('.lb__close', lb).focus();
  }

  /* ---------- Sobre mí ---------- */
  const A = SITE.about, aboutEl = $('#about');
  if (!A.photo) aboutEl.classList.add('about--nophoto');
  aboutEl.innerHTML = `
    ${A.photo ? `<img class="about__photo" src="${esc(A.photo)}" alt="Foto de ${esc(SITE.brand)}" width="800" height="600" loading="lazy" />` : ''}
    <div>
      <h2>${esc(A.title)}</h2>
      ${A.paragraphs.map((t) => `<p>${esc(t)}</p>`).join('')}
      <ul class="values">${A.values.map((v) => `<li><strong>${esc(v.title)}</strong><span>${esc(v.text)}</span></li>`).join('')}</ul>
    </div>`;

  /* ---------- Footer ---------- */
  $('#fBrand').textContent = SITE.brand;
  $('#fTag').textContent = SITE.tagline;
  $('#fList').innerHTML = `
    <li>${icon('instagram', 18)}<a href="${esc(SITE.instagramUrl)}" target="_blank" rel="noopener noreferrer">${esc(SITE.instagramHandle)}</a></li>
    <li>${icon('mail', 18)}<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
    <li>${icon('phone', 18)}<a href="tel:${esc(SITE.phone.replace(/[^\d+]/g, ''))}">${esc(SITE.phone)}</a></li>
    <li>${icon('pin', 18)}<span>${esc(SITE.zone)}</span></li>`;
  $('#fLegal').textContent = `© ${new Date().getFullYear()} ${SITE.brand}. Todos los derechos reservados.`;

  /* ---------- Aparición suave al hacer scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('in'));
})();
