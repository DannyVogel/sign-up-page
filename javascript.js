function toggleDarkMode() {
    const root = document.querySelector("html")
    root.classList.toggle("dark")

    const background = document.querySelector(".background-image")
    root.classList.value == 'dark' 
        ? background.setAttribute('src', './images/moon.jpg')
        : background.setAttribute('src', './images/sun.jpg')
}