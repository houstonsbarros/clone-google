const pesquisar = document.querySelector(".pesquisarInput");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const url = "https://www.google.com/search?q=" + pesquisar.value;
    window.open(url, "_self");
});

pesquisar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const url = "https://www.google.com/search?q=" + pesquisar.value;
        pesquisar.click();
        window.open(url, "_self");
    }
})