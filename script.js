const toggle_btn = document.getElementById("toggle-btn");
const toggle_circle = document.getElementById("toggle-circle")

toggle_btn.addEventListener("click", ()=> {
    toggle_btn.classList.toggle("active");
    toggle_circle.classList.toggle("circle-active")
});