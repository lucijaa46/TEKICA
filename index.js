
  // Pristupamo formi po ID-ju
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault() 

    // Uzimamo vrijednosti iz input polja
    const korisnickoIme = document.getElementById("username").value;
    const sifra = document.getElementById("password").value;

    // Ispis u konzolu ili obrada dalje
    console.log("Korisničko ime:", korisnickoIme);
    console.log("Šifra:", sifra);

    
    alert(`Prijavili ste se kao ${korisnickoIme}`);
  });

