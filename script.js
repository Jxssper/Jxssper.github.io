const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menu_links = document.querySelectorAll(".menu_link")

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})

menu_links.forEach(link => {
    link.addEventListener('click', () =>{
        menu.classList.remove("visible");
    })
})