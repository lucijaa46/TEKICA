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

    // tableBody.innerHTML = "";



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

    

    const rezultat = await odgovor.json();

    console.log("Rezultat s backend-a:", rezultat);

    if (rezultat.message === "rezervacija je dodana!") {

      location.reload();

    }

  } catch (error) {

    console.error("Greška prilikom slanja podataka:", error);

  }

}





const GoToRezervacija = () => {

  location.href = "client-rezervacija.html";

};
