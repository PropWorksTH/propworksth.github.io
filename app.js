document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();

    renderUI(data.items);
  } catch (e) {
    app.textContent = 'ERROR';
  }
});

/* ---------------- UI restore ---------------- */

function renderUI(items) {
  const app = document.getElementById('app');

  if (!items || items.length === 0) {
    app.textContent = 'No content';
    return;
  }

  // group by type (เหมือน STEP 8.2 แต่ render แบบเดิม)
  const groups = {};
  items.forEach(i => {
    const type = i.type || 'Other';
    if (!groups[type]) groups[type] = [];
    groups[type].push(i);
  });

  let html = '';

  Object.keys(groups).forEach(type => {
    html += `
      <section class="section">
        <h2 class="section-title">${type}</h2>

        ${groups[type]
          .map(
            i => `
            <div class="item">
              <h3 class="item-title">${i.title || ''}</h3>
              ${i.subtitle ? `<p class="item-subtitle">${i.subtitle}</p>` : ''}
            </div>
          `
          )
          .join('')}
      </section>
    `;
  });

  app.innerHTML = html;
}
