// PRACTICE #1

    // for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    //     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
    //         console.log("Chicken Monkey")
    //     } else if (currentNumber % 5 === 0) {
    //         console.log("Chicken")
    //     } else if (currentNumber % 7 === 0) {
    //         console.log("Monkey")
    //     } else {
    //         console.log(currentNumber)
    //     }
    // }


// // PRACTICE #2
//     let bandNumber = 1


//     const takeNumber =  (name) => {
//         `${bandNumber++}. ${name}`
//         }

//     const scum = takeNumber("Galactic Scum")
//     console.log(scum)  // This should print "1. Galactic Scum" in the console

//     const under = takeNumber("Underdogs")
//     console.log(under);

//     const chem = takeNumber("Chemical Pixies")
//     console.log(chem);


// PRACTICE #3
    const hamburger = {
    	name: 'Hamburger',
    	type: 'beef',
    	cooked: false,
    }
    const zucchini = {
    	name: 'Zucchini',
    	type: 'vegetable',
    	cooked: false,
    }
    const chickenBreast = {
    	name: 'Chicken Breast',
    	type: 'chicken',
    	cooked: false,
    }
    const corn = {
    	name: 'Corn',
    	type: 'vegetable',
    	cooked: false,
    }
    const steak = {
    	name: 'Steak',
    	type: 'beef',
    	cooked: false,
    }

    const foods = [hamburger, zucchini, chickenBreast, corn, steak];

    const cookedFood = [];

    function grill (currentObject) {
        currentObject.cooked = true;
        cookedFood.push(currentObject);
    };


    foods.forEach(currentFood => {
        grill(currentFood);
    });

    console.log(cookedFood)


