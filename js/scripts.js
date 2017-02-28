//business logic
function movieGoer(movie, time, age, price) {
  this.movieTitle = movie;
  this.movieTime = time;
  this.userAge = age;
}

movieGoer.prototype.applyDiscount = function() {
  var ticketPrice = 10;
  if (this.movieTitle === "movieTitle1") {
    ticketPrice = ticketPrice * 1.2 }
  if (this.userAge !== "adult") {
    ticketPrice = ticketPrice * .9 }
  if (this.movieTime === "matinee") {
    ticketPrice = ticketPrice * .9 }

  //return (ticketPrice - (10 * .1));
  return ticketPrice;
}

//user interface logic
$(document).ready(function() {
  $("#movieForm").submit(function(event) {
    event.preventDefault();

    var movieTitle = $("input:radio[name=movieTitle]:checked").val();
    var movieTime = $("input:radio[name=movieTime]:checked").val();
    var userAge = $("input:radio[name=age]:checked").val();
    var customer = new movieGoer(movieTitle, movieTime, userAge);
    var ticketPrice = customer.applyDiscount();
    console.log(ticketPrice);
  });
});
