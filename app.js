fetch("https://script.google.com/macros/s/AKfycbyT2d_zx3w-pQtEhFXcGRCKIqdkEFYCB5jwGrb5nqXjVg6yR910vchMYvKQF2C1R5JE/exec?format=json")
  .then(res => res.text())
  .then(text => {
    console.log("RAW RESPONSE:", text);
    document.getElementById("app").innerText = text;
  })
  .catch(err => {
    document.getElementById("app").innerText = "Error";
    console.error(err);
  });
