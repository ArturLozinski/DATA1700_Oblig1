let tickets = [];

function buyTicket() {
    let input = {
        movie: document.getElementById("movieSelect").value,
        tickets: document.getElementById("number").value,
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    }

    tickets.push(input);
    displayTicketTable();

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
    for (let p of tickets) {
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

function dropTable() {
    tickets = [];
    displayTicketTable()
}