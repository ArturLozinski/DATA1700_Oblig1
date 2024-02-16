let allTickets = [];

function buyTicket() {

    let movie = document.getElementById("movieSelect").value;
    let tickets = document.getElementById("number").value;
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let errorMessage = false;

    if (movie === "0") {
        document.getElementById("invalidChoice").innerHTML = "Please select a movie";
        errorMessage = true;
    }

    //let numberOfTickets = document.getElementById("number").value;
    if (tickets === null || tickets <= 0) {
        document.getElementById("invalidNumber").innerHTML = "Please enter a valid amount of tickets";
        errorMessage = true;
    }

    if (first_name === "") {
        document.getElementById("invalidFirstName").innerHTML = "Please fill out your first name";
        errorMessage = true;
    }

    if (last_name === "") {
        document.getElementById("invalidLastName").innerHTML = "Please fill out your last name";
        errorMessage = true;
    }

    if (!validEmail(email) || email === "") {
        document.getElementById("invalidEmail").innerHTML = "Please enter a valid email adress";
        errorMessage = true;
    }

    if (!validPhone(phone) || phone === "") {
        document.getElementById("invalidPhone").innerHTML = "Please enter a valid phone number";
        errorMessage = true;
    }

    if (!errorMessage) {
        let ticketInput = {
            movie: movie,
            tickets: tickets,
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone
        }
        console.log(ticketInput);
        allTickets.push(ticketInput);
        displayTicketTable();
        clearInput();
        clearErrorMessages();
    }
}

// Email validation function
function validEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Phone validation function
function validPhone(phone) {
    let re = /^\d{8}$/;
    return re.test(phone);
}

function clearInput() {
    document.getElementById("movieSelect").value = "0";
    document.getElementById("number").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function displayTicketTable() {
    let out = "<table><tr>" +
        "<th>Movie</th><th>Tickets</th><th>First name</th><th>Last name</th><th>E-Mail</th><th>Phonenumber</th>" +
        "</tr>";
    for (let p of allTickets) {
        out += "<tr>";
        out += "<td>" + p.movie + "</td>" +
            "<td>" + p.tickets + "</td>" +
            "<td>" + p.first_name + "</td>" +
            "<td>" + p.last_name + "</td>" +
            "<td>" + p.email + "</td>" +
            "<td>" + p.phone + "</td>";
        out += "</tr>";
    }
    document.getElementById("ticketTable").innerHTML = out;
}

function clearErrorMessages() {
    document.getElementById("invalidChoice").innerHTML = "";
    document.getElementById("invalidNumber").innerHTML = "";
    document.getElementById("invalidFirstName").innerHTML = "";
    document.getElementById("invalidLastName").innerHTML = "";
    document.getElementById("invalidEmail").innerHTML = "";
    document.getElementById("invalidPhone").innerHTML = "";

}

function dropTable() {
    allTickets = [];
    displayTicketTable()
}