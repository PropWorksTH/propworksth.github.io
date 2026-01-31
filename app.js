fetch("https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("app");
    el.textContent = `${data.app} — ${data.country}`;
    document.title = `${data.app} — ${data.country}`;
  })
  .catch(() => {
    document.getElementById("app").textContent = "PropWorks — Thailand";
  });
