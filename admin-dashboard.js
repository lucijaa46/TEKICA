// const tekstOdgovora = await odgovor.text();
// console.log("RAW response:", tekstOdgovora);

// const rezultat = JSON.parse(tekstOdgovora);

async function fetchData() {

  try {

    const response = await fetch(

      "http://localhost/tekica/api/all_korisnik.php"

    );



    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const result = await response.json();

    const data = result.response;



    console.log(data);



    const tableBody = document.querySelector("#tablica tbody");



    data.forEach((korisnik) => {

      const row = document.createElement("tr");



      row.innerHTML = `

        <td>${korisnik.id}</td>

        <td>${korisnik.naziv}</td>

        <td>${korisnik.email}</td>

        <td>${korisnik.telefon}</td>

        <td>${korisnik.adresa}</td>

        <td>${korisnik.porezni_broj}</td>

        <td> <button onclick = deleteKorisnik(${korisnik.id}) id = "deleteButton">Delete</button></td>

       



        

      `;



      tableBody.appendChild(row);

    });

  } catch (error) {

    console.log(error);

  }

}



fetchData();



//DELETE FUNKCIJA

async function deleteKorisnik(id) {

  try {

    const response = await fetch(

      "http://localhost/tekica/api/delete.korisnik.php",

      {

        method: "POST",

        body: JSON.stringify({ id: id }),

      }

    );



    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }



    const result = await response.json();

    console.log(result);



    if (result.message === "Korisnik je izbrisan!") {

      location.reload();

    }

  } catch (error) {

    console.log(error);

  }

}



///



// Get the modal

var modal = document.getElementById("myModal");



// Get the button that opens the modal

var btn = document.getElementById("dodajKorisnika");



// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];



// When the user clicks on the button, open the modal

btn.onclick = function () {

  modal.style.display = "block";

};



// When the user clicks on <span> (x), close the modal

span.onclick = function () {

  modal.style.display = "none";

};



// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {

  if (event.target == modal) {

    modal.style.display = "none";

  }

};



//ADD FUNKCIJA



const formaKorisnik = document.getElementById("formaKorisnik");



formaKorisnik.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaKorisnik);

  const unosi = Object.fromEntries(formData.entries());



  console.log(unosi);



  dodajKorisnika(unosi); // Poziv funkcije s podacima

});



async function dodajKorisnika(unosi) {

  const POST_API = "http://localhost/tekica/api/add.korisnik.api.php";



  try {

    const odgovor = await fetch(POST_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "Korisnik je dodan!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



///



const modalUredi = document.getElementById("modalUrediKorisnik");

const btnUredi = document.getElementById("urediKorisnika");

const closeUredi = document.querySelector(".close-uredi-korisnik");



btnUredi.onclick = function () {

  modalUredi.style.display = "block";

};



closeUredi.onclick = function () {

  modalUredi.style.display = "none";

};



window.addEventListener("click", function (event) {

  if (event.target === modalUredi) {

    modalUredi.style.display = "none";

  }

});



const formaUrediKorisnik = document.getElementById("formaUrediKorisnik");



formaUrediKorisnik.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaUrediKorisnik);

  const unosi = Object.fromEntries(formData.entries());



  console.log("PUT podaci:", unosi);



  updateKorisnik(unosi);

});



async function updateKorisnik(unosi) {

  const PUT_API = "http://localhost/tekica/api/update.korisnik.php";



  try {

    const odgovor = await fetch(PUT_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "Korisnik je izmjenjen!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



const GoToUsluga = () => {

  location.href = "admin-usluga.html";

};
