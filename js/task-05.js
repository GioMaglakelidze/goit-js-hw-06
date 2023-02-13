const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

//додаткова перевірка
if (textInput.value !== "") {
  output.textContent = textInput.value;
}

textInput.addEventListener("input", function AnonymousNickChange() {
  if (this.value === "" || this.value === " ") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = this.value;
});
