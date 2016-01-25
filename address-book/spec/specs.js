// Example spec. Uncomment if you want to see it run in spec-runner.html! Then uncomment the function in scripts.js
// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });

describe('Contact', function(){
  it("creates new contact with given properties", function(){
  var testContact = new Contact("James","Beard");
  expect(testContact.firstName).to.equal("James");
  expect(testContact.lastName).to.equal("Beard");
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Martha","Stewart");
    expect(testContact.fullName()).to.equal("Martha Stewart");
  });
});
