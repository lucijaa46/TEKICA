const forma = document.getElementById("loginForma");



forma.addEventListener("submit", function (event) {

  event.preventDefault();



  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;



  if (username.length === 0 || password.length === 0) {

    alert("Please fill in all fields. / Molimo ispunite sva polja.");

  } else if (username === "administrator" && password === "1234") {

    alert("Login successful! / Uspješna prijava!");

    location.href = "admin-dashboard.html";

  } else {

    alert("Login failed! / Neuspješna prijava!");

  }

});

const showPassword = () => {

  const input = document.getElementById("password");



  input.type = input.type === "password" ? "text" : "password";

};

