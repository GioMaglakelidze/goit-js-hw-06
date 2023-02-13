const sizeControl = document.querySelector("input#font-size-control");
const mainText = document.querySelector("span#text");

// Задаємо початковий розмір
mainText.style.fontSize = sizeControl.value + "px";

// Вішаємо слухача на подію input
sizeControl.addEventListener("input", fontSizeChange);
// Створюємо зовнішню функцію для зміни розміру шрифта тексту в span
function fontSizeChange() {
  // задаємо інлайн стиль шрифта значенням положення повзунка поля
  mainText.style.fontSize = sizeControl.value + "px";
}
