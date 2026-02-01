document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();

    renderDynamicSections(data.items);
  } catch (err) {
    app.textContent = 'ERROR loading data';
  }
});

/* -------------------- helpers -------------------- */

function renderDynamicSections(items) {
  const app = document.getElementById('app');
  if (!items || items.length === 0) {
    app.textContent = 'No data';
    return;
  }

  // group by type (dynamic)
  const groups = {};
  items.forEach(item => {
    const type = item.type || 'Other';
    if (!groups[type]) groups[type] = [];
    groups[type].push(item);
  });

  // render
  let html = '';
  Object.keys(groups).forEach(type => {
    html += `
      <section id="${slug(type)}">
        <h2>${type}</h2>
        <ul>
          ${groups[type]
            .map(
              i => `<li>
                <strong>${i.title || ''}</strong>
                ${i.subtitle ? `<br><small>${i.subtitle}</small>` : ''}
              </li>`
            )
            .join('')}
        </ul>
      </section>
    `;
  });

  app.innerHTML = html;
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]/g, '');
}
