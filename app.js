document.addEventListener('DOMContentLoaded', async () => {
  loadItems();
});

async function loadItems() {
  const el = document.getElementById('app');
  el.textContent = 'Loading…';

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();
    renderItems(data.items || []);
  } catch (e) {
    el.textContent = 'ERROR';
  }
}

function renderItems(items) {
  const el = document.getElementById('app');

  if (items.length === 0) {
    el.textContent = 'No items';
    return;
  }

  el.innerHTML = `
    <h1>PropWorks</h1>
    <div>
      ${items
        .map(
          i => `
            <div style="margin-bottom:16px">
              <strong>${i.title}</strong><br>
              <span>${i.subtitle}</span>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}
