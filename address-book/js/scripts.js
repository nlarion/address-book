// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };


function Contact(firstName, lastName, street, city, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Address.prototype.fullAddress = function() {
//   return this.street + " " + this.city + " " + this.state;
// }

$(document).ready(function() {
  $("#newAddress").click(function(){
    $("#addresses").append("<div class='contactAddress' id='contactAddress'><div class='form-group'><label for='new-street-address'>Street Address</label><input type='text' class='form-control' id='new-street-address'></div><div class='form-group'><label for='new-city'>City</label><input type='text' class='form-control' id='new-city'></div><div class='form-group'><label for='new-state'>State</label><input type='text' class='form-control' id='new-state'></div>");
  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreetAddress = $("input#new-street-address").val();
    var inputtedCity = $("input#new-state").val();
    var inputtedState = $("input#new-city").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreetAddress, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    clearInput();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street-address").text(newContact.street);
      $(".state").text(newContact.state);
      $(".city").text(newContact.city);
    });
  });
});


function clearInput() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-address").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}
