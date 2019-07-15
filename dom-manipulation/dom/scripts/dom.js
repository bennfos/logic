/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEls = document.querySelectorAll(".article__section");

sectionEls.forEach(
    (currentNode)=> {currentNode.classList.add("goldenrodBackground");}
);

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer");

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText");
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

const blueFont = document.querySelector(".article__body");

blueFont.classList.add("blueFont");

const addBorder = document.querySelector(".article__header");

addBorder.classList.add("border");