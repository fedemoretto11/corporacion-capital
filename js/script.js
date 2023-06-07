const burguerMenu = document.getElementById("burguer-menu");
const menuDesplegable = document.querySelector(".sidebar");
const topbar = document.querySelector(".topbar");


// Funciones para desplegar el Sidebar
function desplegarMenu() {

  menuDesplegable.style.right = "0px";
  document.querySelector(".line1").classList.add("line1-active");
  document.querySelector(".line2").classList.add("line2-active");
  document.querySelector(".line3").classList.add("line3-active");

}
function esconderMenu() {
  menuDesplegable.style.right = "-1000px";
  document.querySelector(".line1").classList.remove("line1-active");
  document.querySelector(".line2").classList.remove("line2-active");
  document.querySelector(".line3").classList.remove("line3-active");
}



// LLamado de funciones
burguerMenu.addEventListener("click", (e) => {
  if (menuDesplegable.style.right == "-1000px") {
    desplegarMenu();
    console.log("Menu desplegado");
  } else {
    esconderMenu();
    console.log("Menu oculto");
  }
})


const lastScrollTop = 0;
const delta = 50;
let eventoActivado = false;

window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (Math.abs(scrollTop - lastScrollTop) > delta) {
    if (!eventoActivado) {
      eventoActivado = true;
      console.log("Header reducido");
      topbar.classList.add("disminuido");
    }
  } else if (eventoActivado && scrollTop === 0) {
    eventoActivado = false;
    console.log("Header auemntado");
    topbar.classList.remove("disminuido");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});