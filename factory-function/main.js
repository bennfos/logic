
const displayLocation = document.querySelector("#contactList")

const createContact = (name, title, email) => 
({name, title, email})

const displayContact = (contact) => {
    const contactHTML = `
        <section class="contact">
            <h1>${contact.name}</h2>
            <h2>${contact.title}</p>
            <div>${contact.email}</div>
        </section>
    `
    displayLocation.innerHTML += contactHTML
}

const bennett = createContact("Bennett", "Student", "bennfos@gmail.com")
const jenny = createContact("Jenny", "Marketing Assistant", "jennfos@gmail.com")
const marlowe = createContact("Marlowe", "Kid", "marlowe@kid.com")
const clem = createContact("Clementine", "Kid", "clem@kid.com")
const linus = createContact("Linus", "Baby", "linus@baby.com")


const contacts = []

const addContacts = (contact) => {
    contacts.push(contact);
}

addContacts(bennett)
addContacts(jenny)
addContacts(marlowe)
addContacts(clem)
addContacts(linus)


contacts.forEach(currentContact => {
    displayContact(currentContact)
})





