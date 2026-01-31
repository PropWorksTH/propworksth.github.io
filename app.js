// app.js — minimal, stable, no guessing

const API_URL =
  "https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?format=json";

document.addEventListener("DOMContentLoaded", () => {
  const appEl = document.getElementById("app");

  if (!appEl) {
    console.error("❌ #app element not found");
    return;
  }

  fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(data => {
      // expected:
      // { status: "ok", app: "PropWorks", country: "Thailand" }

      if (data.status !== "ok") {
        throw new Error("API status not ok");
      }

      appEl.innerText = `${data.app} — ${data.country}`;
    })
    .catch(err => {
      console.error("❌ API error:", err);
      appEl.innerText = "Error loading data";
    });
});
