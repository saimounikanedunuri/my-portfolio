document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙 Dark Mode";
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Dark Mode";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Light Mode";
        }
    });
});
