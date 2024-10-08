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

const listItems = document.querySelectorAll("li");
const emoji = '🗿';

listItems.forEach(item => {
    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = emoji;
    item.prepend(emojiSpan);
});

const animateObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
});
  
const expCards = document.querySelectorAll(".exp-card");
expCards.forEach(card => animateObserver.observe(card));

const showObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})


const hiddenLogos = document.querySelectorAll(".hidden");
hiddenLogos.forEach(logo => showObserver.observe(logo));
