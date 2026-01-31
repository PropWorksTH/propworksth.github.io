document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('app');
  if (!el) return;

  fetch('https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec')
    .then(res => res.json())
    .then(data => {
      el.textContent = `${data.app} — ${data.country}`;
    })
    .catch(() => {
      el.textContent = 'Error';
    });
});
