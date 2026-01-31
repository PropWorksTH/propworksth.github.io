document.addEventListener("DOMContentLoaded", () => {
  fetch("https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec")
    .then(r => r.json())
    .then(d => {
      const el = document.getElementById("app");
      el.textContent = `${d.app} — ${d.country}`;
      document.title = `${d.app} — ${d.country}`;
    })
    .catch(() => {
      document.getElementById("app").textContent = "PropWorks — Thailand";
    });
});
