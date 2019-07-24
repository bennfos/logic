const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (students) => {
    return `
        <div class="student">
            <h1 class="name">${students.name}</h1>
            <section class="subject">${students.subject}</section>
            <aside class="info">${students.info}</aside>
        </div>
    `
}

const lissa = createStudentComponent(
    "Lissa Goforth",
    "History",
    "Asks pointless, unrelated questions",
    "78")

const courtney = createStudentComponent(
    "Courtney Seward",
    "History",
    "Has completed all homework",
    "91")

const greg = createStudentComponent(
    "Greg Lawrence",
    "History",
    "Sub-par performance all around",
    "64")

const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(students)
}

students.forEach(currentStudent => {
    let studentComponentName = document.querySelector(".name")
    let studentComponentSubject = document.querySelector(".subject")
    let studentComponentInfo = document.querySelector(".info")
    if (currentStudent.score >= 60) {
        studentComponentName.classList = "passing", "xx-large"
        studentComponentSubject.classList = "bordered", "dashed", "section--padded"
        studentComponentInfo.classList = "pushRight"
    } else {
        studentComponentName.classList = "failing"
    }
})
    

   
