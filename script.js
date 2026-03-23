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

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.container_btn_top').classList.add('show');
    }
    else {
        document.querySelector('.container_btn_top').classList.remove('show');
    }
}

document.querySelector('.container_btn_top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
