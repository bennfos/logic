
// const zoe = {
//     name: "Zoe",
//     species: "Gallus gallus domesticus",
//     nicknames: ["Zo", "Zozo", "Zo Baby", "Zeebies"],
//     age: 0
// }

// const sassafrass = {
//     name: "Sassafrass",
//     species: "Gallus gallus domesticus",
//     nicknames: ["Sassy", "Sass Monster", "Sassy Ass", "Bitch"],
//     age: 0
// }



// const restaurant = {
//     name: "Bob's Burgers",
//     orders: [],
//     placeOrder: function (meal) {
//         this.orders.push(meal)
//     }
// }

// const chickenComboMeal = {
//     sandwichType: "Chicken",
//     fries: true,
//     drinkSize: "Medium"
// }

// const burgerComboMeal = {
//     sandwichType: "Burger",
//     fries: false,
//     drinkSize: "Liter"
// }

// // Place an order
// restaurant.placeOrder(chickenComboMeal)
// restaurant.placeOrder(burgerComboMeal)

// // Invoke the function to return the list of all orders
// const createOrderList = () => {
//     return restaurant.orders
// }

// const orderList = createOrderList();

// // Output all orders to the console using console.table()
// console.table(orderList)

const elizabethSanger = {
    district: 6,
    statements: {
        taxes: "Taxes should maybe actually help people?",
        jobs: "YOU get a job! And YOU get a job! And YOU get a job! Jobs for everybody!",
        infrastructure: "Before we build bridges in our cities, we have to build bridges -- in our hearts.",
        healthcare: "I pledge to end sickness for everyone, forever.",
        crime: "Crime is bad! Unless it's necessary. But usually it's not? Unless..."
    },
    donateLink: "https://www.elizabethsanger.com/donate",
    calendar: [
        {
            date: "7/17/2019",
            eventName: "Rally at NSS"
        },
        {
            date: "7/20/2019",
            eventName: "Kid Rock Concert Fundraiser"
        }
    ],
    volunteers: [
        {
            name: "Bennett Foster",
            address: "321 N. Oak St., Springfield, TN 37172", 
            email: "bennfos@gmail.com",
            phone: "615927253",
            availability: "M-F, 9-5",
            activities: ["Software Development", "Chillin"]
        }
    ],
    biography: "Grew up. Got woke. Gonna CHANGE THE WORLD!",
    images: {
        headshot: "images/headshot.jpg",
        family: "images/fam.jpg",
        constituents: "images/constits.jpg"
    },
    mission: "Gonna do all the best politicking.",
    voteLink: "https://sos.tn.gov/products/elections/register-vote"
}

function addToImageGallery (newImageKey, newImage) {
    elizabethSanger.images[newImageKey] = newImage
}

function changeBiography (newBiography) {
    elizabethSanger.biography = newBiography
}

function changePlatform (topic, newPlatformStatement) {
    elizabethSanger.statements[topic] = newPlatformStatement
}

function addVolunteer(newVolunteer) {
    elizabethSanger.volunteers.push(newVolunteer)
}

function addEvent(newEvent) {
    elizabethSanger.calendar.push(newEvent)
}

function addActivity(newActivity) {
    elizabethSanger.volunteers.activities
}

addToImageGallery ("rally", "images/rally.jpg")

changeBiography("Born and raised in Nashville, TN. Grew up. Got woke. Gonna CHANGE THE WORLD!") 

changePlatform ("congressionalReform", "Congresspeople should be more transparent. That's why I believe bribes should have to be openly declared at the time they are taken.")

addVolunteer({
    name: "Jenny Foster",
    address: "321 N. Oak St., Springfield, TN 37172", 
    email: "jennfos@gmail.com",
    phone: "6159928342",
    availability: "M-F, 9-5",
    activities: "Digital marketing",
})


addEvent({
    date: "10/7/2019",
    eventName: "Birthday PARTY!"
})

console.log(elizabethSanger)