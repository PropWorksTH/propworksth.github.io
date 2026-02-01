const API =
  'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'items';

  loadPage(page);
});

async function loadPage(page) {
  const app = document.getElementById('app');
  app.innerHTML = 'Loading…';

  try {
    const res = await fetch(`${API}?page=${page}`);
    const data = await res.json();

    if (page === 'items') renderItems(data);
    if (page === 'contact') renderContact(data);
    if (page === 'close-deal') renderCloseDeal(data);
  } catch (e) {
    app.innerHTML = 'ERROR';
  }
}

/* ---------- RENDERERS (เหมือนของเดิม) ---------- */

function renderItems(data) {
  const app = document.getElementById('app');

  app.innerHTML = `
    <section class="cards">
      ${data.items
        .map(
          (i) => `
        <article class="card">
          <h2>${i.title}</h2>
          <p>${i.subtitle || ''}</p>
        </article>`
        )
        .join('')}
    </section>
  `;
}

function renderContact(data) {
  const app = document.getElementById('app');

  app.innerHTML = `
    <section>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
    </section>
  `;
}

function renderCloseDeal(data) {
  const app = document.getElementById('app');

  app.innerHTML = `
    <section>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
    </section>
  `;
}
