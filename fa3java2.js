let contacts = [];

function displayContacts() {
    document.getElementById("contactsDisplay").textContent = contacts.join(" ");
}

function addName() {
    const input = document.getElementById("nameInput");
    const newName = input.value.trim();

    if (newName !== "") {
        if (contacts.length >= 7) {
            contacts.shift(); // remove the first (leftmost) contact
        }
        contacts.push(newName); // add new contact to the end
        displayContacts();
        input.value = ""; // clear the input field
    }
}

function removeName() {
    contacts.pop(); // remove the last (rightmost) contact
    displayContacts();
}
