// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };


function Contact(firstName, lastName, addresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreetAddress = $("input#new-street-address").val();
    var inputtedCity = $("input#new-state").val();
    var inputtedState = $("input#new-city").val();
    var inputtedZip = $("input#new-zip").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, [inputtedStreetAddress, inputtedCity, inputtedState, inputtedZip]);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street-address").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street-address").text(newContact.street-address);
      $(".state").text(newContact.state);
      $(".city").text(newContact.city);
      $(".zip").text(newContact.zip);
    });
  });
});
