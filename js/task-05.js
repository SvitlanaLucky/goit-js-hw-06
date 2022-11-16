const input = document.querySelector("#name-input");
const stringName = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        stringName.textContent = event.currentTarget.value;
    } else {
        stringName.textContent = "Anonymous";
    }
}
