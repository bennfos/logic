// // <!-- PRACTICE #1

// let outputEl = document.getElementById("output-target")

// /*
//     You can get a reference to DOM elements and
//     directly attach an event handler. In this
//     example, we get every element with a class of
//     "article-section" and listen for when the
//     user clicks on the element. When that event
//     fires, the attached "handleSectionClick"
//     function gets executed.
//  */
// let articleEl = document.getElementsByClassName("article-section")
// let header = document.querySelector("#page-header")

// /*
//     JavaScript, in the browser, automatically send the source
//     event to the handler function for the event.
// */
// function handleSectionClick (event) {
//     console.log(event)
// }

// for (let i = 0; i < articleEl.length; i++) {
//     articleEl.item(i).addEventListener("click", handleSectionClick)
// }

// /*
//     Define functions that hold logic to be performed when mouse
//     events are triggered by the browser.
// */
// function handleHeaderMouseOver (event) {
//     outputEl.innerHTML = "You moved your mouse over me"
// }

// function handleHeaderMouseOut(event) {
//     outputEl.innerHTML = "Why u leave me?"
// }

// /*
//     Get a reference to the DOM element with an id of
//     "page-header", and attach an event handler for the
//     mouseover, and mouseout, events.
//  */
// header.addEventListener("mouseover", handleHeaderMouseOver)
// header.addEventListener("mouseout", handleHeaderMouseOut)



// /*
//     We can also write an anonymous function (lamba expression)
//     in the addEventListener declaration instead of using a
//     function reference.
//  */
// let fieldEl = document.getElementById("keypress-input")

// fieldEl.addEventListener("keyup", function (event) {
//     outputEl.innerHTML = event.target.value
// })


// /*
//   Now we can start making a truly interactive experience
//   combining HTML, JavaScript and CSS. When a user clicks
//   on a button in the DOM, we can listen for that event in
//   JavaScript, and then add, or remove, CSS classes.

//   In this example, I simply use the `toggle()` method on
//   the `classList` property of a DOM element to automatically
//   add and remove a class.
//  */
// let guineaPig = document.getElementById("guinea-pig")

// function toggleClass (newClass) {
//   guineaPig.classList.toggle(newClass)
//   console.log("guineaPig.classList", guineaPig.classList)
// }

// document.getElementById("add-color").addEventListener("click", function() {
//     toggleClass("blue")
// })

// document.getElementById("make-large").addEventListener("click", function() {
//     toggleClass("large")
// })

// document.getElementById("add-border").addEventListener("click", function() {
//     toggleClass("bordered")
// })

// document.getElementById("add-rounding").addEventListener("click", function() {
//     toggleClass("rounded")
// })


// /*
//   EVENT BUBBLING:

//   You can add an event handler on the body tag, and since all
//   browser events bubble up to the body, you can then put in
//   conditional logic to handle the click event on many different
//   elements in one function.
//  */
// document.querySelector("body").addEventListener("click", function(event) {
//     console.log("You clicked on the body of the DOM")
// })


// let inputTarget = document.getElementById("message")
// let art1Target = document.getElementById("art--1")
// let art2Target = document.getElementById("art--2")

// inputTarget.addEventListener("keyup", (event) => {
//     art1Target.innerHTML = event.target.value
// })







// // PRACTICE #2

// const audrey = document.getElementById("audrey")


// /*
//     Add an event listener to the `document` object to listen
//     for the "scroll" event.
// */
// document.addEventListener("scroll", function () {
//     /*
//         Adjust the width of audrey to be 1/3 the value of
//         `window.scrollY`. No lower than 50px, though.
//     */
//     let x = window.scrollY/3
//     let y = window.scrollY/4
//     if (x > 50) {
//         audrey.style.width = `${x}px`
//     }

//     /*
//         Adjust the height of audrey to be 1/4 the value of
//         `window.scrollY`. No lower than 100px, though.
//     */

//     if (x > 100) {
//         audrey.style.height = `${y}px`
//     }
// })


// // PRACTICE #3

// const flightButton = document.querySelector("#activate-flight")
// const mindButton = document.querySelector("#activate-mindreading")
// const xrayButton = document.querySelector("#activate-xray")
// const allPowersButton = document.querySelector("#activate-all")
// const noPowersButton = document.querySelector("#deactivate-all")

// const flightPower = document.querySelector("#flight")
// const mindPower = document.querySelector("#mindreading")
// const xrayPower = document.querySelector("#xray")
// const allPowers = document.querySelectorAll(".power")


// function oneToRuleThemAll(button, newClass) {
//     button.addEventListener("click", function (event) {
//         if (event.target.id.split("-")[1] === "flight") {
//             flightPower.classList.toggle(newClass)
//         } else if (event.target.id.split("-")[1] === "mindreading") {
//             mindPower.classList.toggle(newClass) 
//         } else if (event.target.id.split("-")[1] === "xray") {
//             xrayPower.classList.toggle(newClass) 
//         } else if (event.target.id.split("-")[0] === "activate") {
//             allPowers.forEach(power => {
//                 power.classList = newClass
//             })
//         } else if (event.target.id.split("-")[0] === "deactivate") {
//             allPowers.forEach(power => {
//                 power.classList = newClass
//             })
//         }
//     })
// }

// oneToRuleThemAll(flightButton, "enabled")
// oneToRuleThemAll(flightButton, "disabled")
// oneToRuleThemAll(mindButton, "enabled")
// oneToRuleThemAll(mindButton, "disabled")
// oneToRuleThemAll(xrayButton, "enabled")
// oneToRuleThemAll(xrayButton, "disabled")
// oneToRuleThemAll(allPowersButton, "enabled")
// oneToRuleThemAll(noPowersButton, "disabled")





// //PRACTICE #4

const textOutput = document.querySelector("#textOutput")
const textInput = document.querySelector("#text")
const createButton = document.querySelector("#createButton")
const deleteButton = document.createElement("BUTTON")




const makeTextComponents = (text) => {
   return `
   <section class="border">${text}
   </section>
   `
}

createButton.addEventListener("click", () => {
    textOutput.innerHTML += makeTextComponents(textInput.value)
    deleteButton.innerHTML = "Delete";
    textOutput.appendChild(deleteButton)
})

deleteButton.addEventListener("click", () => {
    function remove () {textOutput.removeChild(textOutput.firstElementChild)}
    remove();
    textOutput.removeChild(deleteButton)
})