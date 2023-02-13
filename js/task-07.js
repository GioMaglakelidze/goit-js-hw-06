const sizeControl = document.querySelector("input#font-size-control");
const mainText = document.querySelector("span#text");

// Базовий розмір
mainText.style.fontSize = sizeControl.value + "px";

// Вішаємо слухача на input
sizeControl.addEventListener("input", sizeChange);
// Створення функції для зміни розміру шрифта тексту в тегу span
function sizeChange() {
  // даємо інлайн стиль шрифта значенням положення повзунка поля
  mainText.style.fontSize = sizeControl.value + "px";
}
