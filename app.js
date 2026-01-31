document.addEventListener('DOMContentLoaded', async () => {
  loadPage();
});

async function loadPage() {
  const el = document.getElementById('app');
  el.textContent = 'Loading…';

  // อ่าน page จาก URL (default = items)
  const page = new URLSearchParams(location.search).get('page') || 'items';

  try {
    const res = await fetch(
      `https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?page=${page}`
    );
    const data = await res.json();

    if (page === 'items') {
      renderItems(data.items || []);
    } else {
      el.textContent = 'PAGE NOT FOUND';
    }
  } catch (e) {
    el.textContent = 'ERROR';
  }
}

function renderItems(items) {
  const el = document.getElementById('app');

  if (!items || items.length === 0) {
    el.innerHTML = '<p>No data</p>';
    return;
  }

  const sections = {
    listings: [],
    services: [],
    testimonials: [],
    contact: []
  };

  items.forEach(i => {
    if (i.title === 'Services') sections.services.push(i);
    else if (i.title === 'Testimonials') sections.testimonials.push(i);
    else if (i.title === 'Contact Us') sections.contact.push(i);
    else sections.listings.push(i);
  });

  el.innerHTML = `
    <section>
      <h2>Listings</h2>
      ${renderList(sections.listings)}
    </section>

    <section>
      <h2>Services</h2>
      ${renderList(sections.services)}
    </section>

    <section>
      <h2>Testimonials</h2>
      ${renderList(sections.testimonials)}
    </section>

    <section>
      <h2>Contact</h2>
      ${renderList(sections.contact)}
    </section>
  `;
}

function renderList(list) {
  if (!list || list.length === 0) return '<p>-</p>';

  return `
    <ul>
      ${list
        .map(
          i => `
            <li>
              <strong>${i.title}</strong><br>
              <span>${i.subtitle || ''}</span>
            </li>
          `
        )
        .join('')}
    </ul>
  `;
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
