fetch("https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("app").innerText = data.app;
  })
  .catch(err => {
    document.getElementById("app").innerText = "Error loading data";
    console.error(err);
  });
