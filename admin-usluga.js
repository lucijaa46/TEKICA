async function fetchData() {

  try {

    const response = await fetch("http://localhost/tekica/api/all_usluga.php");



    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const result = await response.json();

    const data = result.response;



    console.log(data);



    const tableBody = document.querySelector("#tablica tbody");



    data.forEach((usluga) => {

      const row = document.createElement("tr");



      row.innerHTML = `

        <td>${usluga.id}</td>

        <td>${usluga.korisnik_id}</td>

        <td>${usluga.naziv}</td>

        <td>${usluga.trajanje}</td>

        <td>${usluga.cijena}</td>

        <td> <button onclick = deleteUsluga(${usluga.id}) id = "deleteButton">Delete</button></td>

       



        

      `;



      tableBody.appendChild(row);

    });

  } catch (error) {

    console.log(error);

  }

}



fetchData();



async function deleteUsluga(id) {

  try {

    const response = await fetch(

      "http://localhost/tekica/api/delete.usluga.php",

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

    if (result.message === "Usluga je izbrisana!") {

      location.reload();

    }

  } catch (error) {

    console.log(error);

  }

}



// Get the modal

var modal = document.getElementById("myModal");



// Get the button that opens the modal

var btn = document.getElementById("dodajUsluga");



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



const formaUsluga = document.getElementById("formaUsluga");



formaUsluga.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaUsluga);

  const unosi = Object.fromEntries(formData.entries());



  console.log(unosi);



  dodajUsluga(unosi); // Poziv funkcije s podacima

});



async function dodajUsluga(unosi) {

  const POST_API = "http://localhost/tekica/api/add.usluga.api.php";



  try {

    const odgovor = await fetch(POST_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "usluga je dodana!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



const modalUredi = document.getElementById("modalUrediUsluga");

const btnUredi = document.getElementById("urediUsluga");

const closeUredi = document.querySelector(".close-uredi-Usluga");



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



const formaUrediUsluga = document.getElementById("formaUrediUsluga");



formaUrediUsluga.addEventListener("submit", function (event) {

  event.preventDefault();



  const formData = new FormData(formaUrediUsluga);

  const unosi = Object.fromEntries(formData.entries());



  console.log("PUT podaci:", unosi);



  updateUsluga(unosi);

});



async function updateUsluga(unosi) {

  const POST_API = "http://localhost/tekica/api/update.usluga.php";



  try {

    const odgovor = await fetch(POST_API, {

      method: "POST",

      body: JSON.stringify(unosi),

    });



    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "usluga je izmjenjena!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}



const GoToKorisnik = () => {

  location.href = "admin-dashboard.html";

};
