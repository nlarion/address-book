// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };


function Contact(firstName, lastName, street, city, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + " " + this.city + " " + this.state;
}

$(document).ready(function() {
  $("#newAddress").click(function(){
    $("#addresses").append("<div class='contactAddress'><div class='form-group'><label for='new-street-address'>Street Address</label><input type='text' class='form-control' id='new-street-address'></div><div class='form-group'><label for='new-city'>City</label><input type='text' class='form-control' id='new-city'></div><div class='form-group'><label for='new-state'>State</label><input type='text' class='form-control' id='new-state'></div>");
  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".contactAddress").each(function(){
      var inputtedStreetAddress = $(this).find("input#new-street-address").val();
      var inputtedCity = $(this).find("input#new-state").val();
      var inputtedState = $(this).find("input#new-city").val();
      var newAddress = new Address(inputtedStreetAddress, inputtedCity, inputtedState);
      newContact.address.push(newAddress);
      console.log(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    clearInput();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.address.forEach(function(address){
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
      console.log(newContact);
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
