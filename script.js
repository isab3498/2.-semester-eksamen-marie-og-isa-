/****** Burgermenu ******/

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        document.querySelector("main").classList = "";
        document.querySelector("footer").classList = "";
        document.querySelector(".forside #menuknap").style.color = "white";
    } else {
        document.querySelector("#menuknap").textContent = "X";
        document.querySelector("main").classList = "hidden";
        document.querySelector("footer").classList = "hidden";
        document.querySelector(".forside #menuknap").style.color = "#444C59";
    }
}
