function toggleDarkMode() {
    const root = document.querySelector("html")
    root.classList.toggle("dark")

    const background = document.querySelector(".background-image")
    root.classList.value == 'dark' 
        ? background.setAttribute('src', './images/moon.jpg')
        : background.setAttribute('src', './images/sun.jpg')
}

function processForm(event) {
    const name = document.getElementById("firstName").value
    
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirmPassword")
    console.log("?", password, confirmPassword)

    if (password.value !== confirmPassword.value){
        password.style.border = "2px solid red"
        confirmPassword.style.border = "2px solid red"
                
        alert("Passwords do not match.")
        event.preventDefault()
        return false;
    } else {
        document.querySelector(".finalP").innerText = `Thanks for signing up ${name}`
        event.preventDefault()
        return false;
    }
}