document.addEventListener('DOMContentLoaded', async () => {
  const el = document.getElementById('app');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      el.textContent = 'No items';
      return;
    }

    el.innerHTML = `
      <h1>Items</h1>
      <ul>
        ${data.items
          .map(
            i => `<li><strong>${i.title}</strong><br>${i.subtitle}</li>`
          )
          .join('')}
      </ul>
    `;
  } catch (e) {
    el.textContent = 'ERROR';
  }
});
