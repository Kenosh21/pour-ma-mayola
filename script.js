
document.querySelectorAll(".stars").forEach(function(container) {
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.innerHTML = "★";
        star.dataset.value = i;
        container.appendChild(star);
    }

    container.addEventListener("click", function(e) {
        if (e.target.tagName === "SPAN") {
            const value = parseInt(e.target.dataset.value);
            Array.from(container.children).forEach((star, idx) => {
                star.classList.toggle("checked", idx < value);
            });
        }
    });
});
