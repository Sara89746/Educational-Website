function login(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorText = document.getElementById("error");

    if (!email.includes("@gmail.com")) {
        errorText.innerText = "Invalid email! must contain @gmail.com";
        return;
    }

    if (password.trim() === "") {
        errorText.innerText = "Password cannot be empty";
        return;
    }
    errorText.innerText = "";
    alert("Login successfully ");

    
   
}