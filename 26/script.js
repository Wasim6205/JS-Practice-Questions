const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const btn = document.querySelector("button");

function showError(input, message) {
    const p = document.createElement("p");
    p.textContent = message;
    p.style.color = "red";
    p.classList.add("error");

    input.insertAdjacentElement("afterend", p);
}

btn.addEventListener("click", () => {
    document.querySelectorAll(".error").forEach(error => error.remove());

    let hasError = false;

    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        hasError = true;
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        hasError = true;
    }

    if (hasError) return;

    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
});