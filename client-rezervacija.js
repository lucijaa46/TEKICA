async function fetchData() {

  try {

    const response = await fetch(

      "http://localhost/tekica/api/all_rezervacija.php"

    );



    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const result = await response.json();

    const data = result.response;



    console.log(data);



    const tableBody = document.querySelector("#tablica tbody");



    data.forEach((rezervacija) => {

      const row = document.createElement("tr");



      row.innerHTML = `

        <td>${rezervacija.id}</td>

        <td>${rezervacija.korisnik_id}</td>

        <td>${rezervacija.usluga_id}</td>

        <td>${rezervacija.datum_vrijeme_rezervacije}</td>

        <td> <button onclick = deleteRezervacija(${rezervacija.id}) id = "deleteButton">Delete</button></td>

       



        

      `;



      tableBody.appendChild(row);

    });

  } catch (error) {

    console.log(error);

  }

}



fetchData();



async function deleteRezervacija(id) {

  try {

    const response = await fetch(

      "http://localhost/tekica/api/delete.rezervacija.php",

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



    if (result.message === "Rezervacija je izbrisana!") {

      location.reload();

    }

  } catch (error) {

    console.log(error);

  }

}



// Get the modal

var modal = document.getElementById("myModal");



// Get the button that opens the modal

var btn = document.getElementById("dodajRezervacija");



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



const formaRezervacija = document.getElementById("formaRezervacija");



formaRezervacija.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaRezervacija);

  const unosi = Object.fromEntries(formData.entries());



  console.log(unosi);



  dodajRezervacija(unosi); // Poziv funkcije s podacima

});



async function dodajRezervacija(unosi) {

  const POST_API = "http://localhost/tekica/api/add.rezervacija.api.php";



  try {

    const odgovor = await fetch(POST_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const tekst = await odgovor.text();
console.log("Odgovor sa servera:", tekst);

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "rezervacija je dodana!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



const modalUredi = document.getElementById("modalUrediRezervacija");

const btnUredi = document.getElementById("urediRezervacija");

const closeUredi = document.querySelector(".close-uredi-rezervacija");



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



const formaUrediRezervacija = document.getElementById("formaUrediRezervacija");



formaUrediRezervacija.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaUrediRezervacija);

  const unosi = Object.fromEntries(formData.entries());



  console.log("PUT podaci:", unosi);



  updateRezervacija(unosi);

});



async function updateRezervacija(unosi) {

  const PUT_API = "http://localhost/tekica/api/update.rezervacija.php";



  try {

    const odgovor = await fetch(PUT_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "Rezervacija je izmjenjena!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



const GoToUsluga = () => {

  location.href = "client-usluge.html";

};