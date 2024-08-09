const usrInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const numberRegex = /^[1]?\s?(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;

const isValid = (number) => numberRegex.test(number);

checkBtn.addEventListener("click", () => {
    if (usrInput.value === "") {
        alert("Please provide a phone number");
        return;
    }

    result.innerHTML += isValid(usrInput.value) ? `<p class="result">Valid US number: ${usrInput.value}</p>` : `<p class="result">Invalid US number: ${usrInput.value}</p>`;
    usrInput.value = "";
});

clearBtn.addEventListener("click", () => {

    result.innerHTML = "";
    usrInput.value = "";
});