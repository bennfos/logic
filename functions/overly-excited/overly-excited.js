// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

const addExcitement = (theWordArray, delimiter, numberOfDelimiters) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let delimiters = delimiter.repeat(numberOfDelimiters)
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0) {
            buildMeUp += `${theWordArray[i]}${delimiters} `    
        } else {
            buildMeUp += `${theWordArray[i]} ` 
        }
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 4)