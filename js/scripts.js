//business logic
function movieGoer(movie, time, age, price) {
  this.movieTitle = movie;
  this.movieTime = time;
  this.userAge = age;
  this.ticketPrice = 10;
}

movieGoer.prototype.applyDiscount = function() {
  this.movieTime === "matinee" ?
  (this.userAge === "adult" ? console.log(this.ticketPrice * .9)
    :console.log(this.ticketPrice * .8))
  : console.log(this.ticketPrice);
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
  });
});
