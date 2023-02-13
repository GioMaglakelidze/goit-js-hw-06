const sizeControl = document.querySelector("input#font-size-control");
const mainText = document.querySelector("span#text");

//Задаємо стандартний розмір (сподіваюсь на це :) )
mainText.style.fontSize = sizeControl.value + "px";
// Додавання слухача подій
sizeControl.addEventListener("input", (e) => {
  mainText.style.fontSize = `${e.target.value}px`; // зміна розміру тексту
});
