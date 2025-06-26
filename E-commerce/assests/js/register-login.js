
function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = { email, password };

 
  let users = JSON.parse(localStorage.getItem("users")) || [];


  const exists = users.some(user => user.email === email);
  if (exists) {
    alert("Email already exists.");
    return;
  }

  users.push(newUser);

  
  localStorage.setItem("users", JSON.stringify(users));

  alert("User registered successfully!");
  window.location.href = "login.html";
}

function login() {
  const enteredEmail = document.getElementById('email').value;
  const enteredPassword = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === enteredEmail && u.password === enteredPassword
  );

  if (user) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password.");
  }
}


fetch('navbar.html')

      .then(res => res.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
    //   .catch(error => console.error('Error loading navbar:', error));




