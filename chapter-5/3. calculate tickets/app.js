var ticketAmount = +prompt(
  "One ticket costs 600 PKR",
  "Please enter your ticket amount"
);

var ticketCost = 600;
var totalCost = ticketAmount * ticketCost;

document.write(
  "Total cost to buy " +
    ticketAmount +
    " Ticket(s) to a movie is " +
    totalCost +
    "PKR"
);
