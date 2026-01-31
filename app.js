document.addEventListener('DOMContentLoaded', async () => {
  const el = document.getElementById('app');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();

    el.innerHTML = data.items
      .map(item => `<div>${item.title} — ${item.subtitle}</div>`)
      .join('');
  } catch (e) {
    el.textContent = 'ERROR';
  }
});
