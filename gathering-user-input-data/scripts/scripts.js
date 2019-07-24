// // Some starter code
// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })



// PRACTICE #1

// Some starter code
const container = document.querySelector("#wishList")

document.querySelector("#save").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */

    
    
    let wish = document.querySelector("#wish").value
    let store = document.querySelector("#store").value

    if (wish === "" || store === "") {
        alert("You need to enter all the information before saving")
    } else {
    // Once you have collected all the values, update the DOM
    // with some HTML
        container.innerHTML += `
            <section>
                <p>I can purchase ${wish} at ${store}</p>
            </section>
        `
        document.querySelector("#wish").value = ""
        document.querySelector("#store").value = ""
    }
})
