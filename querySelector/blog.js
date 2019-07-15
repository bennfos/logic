const headerText = document.querySelector(".article__header");

headerText.textContent = "Welcome to Bennett's blog";

const headerImportant = document.querySelectorAll(".article__header");

headerImportant.classList = "article__header important";

const removeClass = document.querySelector(".dashed");

removeClass.classList.remove("dashed");

const addClass = document.querySelector(".article__footer");

addClass.classList.add("goldenrod");