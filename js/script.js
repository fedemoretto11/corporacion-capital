const burguerMenu = document.getElementById("burguer-menu");
const menuDesplegable = document.querySelector(".sidebar");




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





burguerMenu.addEventListener("click", (e) => {
  if (menuDesplegable.style.right == "-1000px") {
    desplegarMenu();
    console.log("Menu desplegado");
  } else {
    esconderMenu();
    console.log("Menu oculto");
  }
})