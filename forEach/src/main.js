// Console.log the GOT characters that died using a function.
// -hint you will need a for loop or a foreach.

const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "John Snow"]




for (let i = 0; i < got.length; i++) {
    const dead = got[i];
    if (dead !== "John Snow") {
        console.log(dead);
    } 
}



const isNotAlive = got.forEach(dead) => {
    if dead
}