const btn = document.querySelector(".Click-to-reveal-surprise");

btn.addEventListener("click", function() {

    // button press effect (works with your current design)
    this.style.transform = "scale(0.95)";
    this.style.transition = "0.2s";

    // page fade out
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 500);
});