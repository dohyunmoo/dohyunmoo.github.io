const images = document.getElementsByTagName("img");

for (const image of images) {
    image.addEventListener("error", function(event) {
        event.target.src = "./assets/images/feebas.png";
        event.onerror = null;
    });
}

const navigation = document.getElementById("navigation");

window.addEventListener("scroll", () => {
    navigation.classList.add("hide");

    if (window.scrollY == window.screenTop) {
        navigation.classList.remove("hide");
    }
});

navigation.addEventListener("mouseover", () => {
    navigation.classList.remove("hide");
});


const mainButton = document.getElementById("main-button");

mainButton.addEventListener("click", () => {
    const img = document.getElementById("feeb");
    
    if (mainButton.dataset.evo == "feebas") {
        img.src = "assets/images/milotic.png";
        mainButton.dataset.evo = "milotic";
    } else {
        img.src = "assets/images/feebas.png";
        mainButton.dataset.evo = "feebas";
    }
});
