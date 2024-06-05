const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");




function telephoneCheck (str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (userInput.value == "") {
    return alert("Please provide a phone number");
  }

  if (regex.test(userInput.value)) {
    resultsDiv.textContent = "Valid US number: " + userInput.value;
  } else {
    resultsDiv.textContent = "Invalid US number: " + userInput.value;
  }
}

checkBtn.addEventListener("click", telephoneCheck);

clearBtn.addEventListener("click", () => resultsDiv.innerHTML = "");
