document.addEventListener("DOMContentLoaded", () => {

    let texto = document.getElementById("idText");
    let toUpper = document.getElementById("maiusculo");
    let toLower = document.getElementById("minusculo");

    toUpper.addEventListener('click', () => {
        texto.value = texto.value.toUpperCase();
        toLower.checked = false;
    });

    toLower.addEventListener('click', () => {
        texto.value = texto.value.toLowerCase();
        toUpper.checked = false;
    });
});