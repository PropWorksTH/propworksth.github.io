document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=items'
    );
    const data = await res.json();

    // reset
    app.innerHTML = '';

    // render items (โครงเรียบ ๆ ก่อน)
    data.items.forEach(item => {
      const section = document.createElement('section');

      const h2 = document.createElement('h2');
      h2.textContent = item.title;

      const p = document.createElement('p');
      p.textContent = item.subtitle || '';

      section.appendChild(h2);
      section.appendChild(p);
      app.appendChild(section);
    });

  } catch (e) {
    app.textContent = 'ERROR';
  }
});
