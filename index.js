const homeBtn = document.querySelector("#homeBtn");
const ourProductsBtn = document.querySelector("#ourProductsBtn");
const contactBtn = document.querySelector("#contactBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const sections = document.querySelectorAll(".Separator");

homeBtn.addEventListener("click", () => {
  sections[0].scrollIntoView();
});
ourProductsBtn.addEventListener("click", () => {
  sections[1].scrollIntoView();
});
aboutBtn.addEventListener("click", () => {
  sections[2].scrollIntoView();
});
contactBtn.addEventListener("click", () => {
  sections[3].scrollIntoView();
});
