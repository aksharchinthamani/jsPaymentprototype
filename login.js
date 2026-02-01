function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!username || !password) {
    error.style.color = "red";
    error.textContent = "Please enter both email and password.";
    
    return;

    
  }

  localStorage.setItem("user", JSON.stringify({ username, password }));
  error.style.color = "lightgreen";
  error.textContent = "Signup successful! click on next to save your details.";
}

function next() {
  // const username = document.getElementById("username").value.trim();
  // const password = document.getElementById("password").value.trim();
  // const error = document.getElementById("error");

  // const storedUser = JSON.parse(localStorage.getItem("user"));

  // if (storedUser && username === storedUser.username && password === storedUser.password) {
  //   window.location.href = "convertion.html"; 
  // } else {
  //   error.style.color = "red";
  //   error.textContent = "Invalid credentials. Please try again.";
  // }
  if(password.value !=0 && username.value !=0){
  window.location.href = "card.html";
}
else{
    alert("please enter your login details")
}
}