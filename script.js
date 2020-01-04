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

/****** Til top knap ******/
let tilToppen = document.querySelector("#knap-top");

// Når man scroller 20px ned vises knappen på hver side
window.onscroll = function () {
    scrollFunction()
    knapTilTop();
};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        tilToppen.style.display = "flex";
    } else {
        tilToppen.style.display = "none";
    }
}


function knapTilTop() {
    console.log("knapTilTop");

    document.querySelector("#knap-top").addEventListener("click", () => {
        location.href = `#`;
    })

}
