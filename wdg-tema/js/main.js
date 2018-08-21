/* Toggle menu function*/
function toggleClick(btn){
    btn.classList.toggle("change");
    let getMenu = document.querySelector(".menu-verti");


    if (getMenu.style.display === "flex") {
        getMenu.style.display = "none";
    } else {
        getMenu.style.display = "flex";
    }
}
