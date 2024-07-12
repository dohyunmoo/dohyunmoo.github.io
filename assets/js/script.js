const images = document.getElementsByTagName("img");

for (const image of images) {
    image.addEventListener("error", function(event) {
        event.target.src = "./assets/images/feebas.png";
        event.onerror = null;
    });
}