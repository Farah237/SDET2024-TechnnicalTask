const dataTest = require("../dataTest/dataTest.json");


describe("This is the contact us Page Testing", function () {
 it("Check the visibility of the items",function(browser){ 
var contactus= browser.page.index.index(); 
contactus.navigate(); 
contactus.expect.element("@contactusButton").is.visible; 
contactus.element("@contactusButton").click();
var contactUs = browser.page.contactsusPage.contactUsPage();
contactUs.navigate();
contactUs.expect.element("@subjectHeadingDropdown").is.visible;
contactUs.expect.element("@email").is.visible;
contactUs.expect.element("@orderNumber").is.visible;
contactUs.expect.element("@documentUpload").is.visible;
contactUs.expect.element("@sendButton").is.visible;


browser.end();
  });


it('Fill in the fields', function(browser){
      var contactUs = browser.page.contactsusPage.contactUsPage();
     contactUs.navigate();

      contactUs.element("@email").setValue(dataTest.emailAddress);
      contactUs.assert.valueEquals("@email",dataTest.emailAddress);
      contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
      contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
      contactUs.element("@message").setValue(dataTest.clientMessage);
      contactUs.assert.valueEquals("@message",dataTest.clientMessage);
      contactUs.click("@subjectHeadingDropdown");
      contactUs.click('@webmasterOption');
      contactUs.click("@sendButton")
        .pause(2000); 
      browser.end();
    });
    it('Enter a text instead of an E-mail',function(browser){
        var contactUs = browser.page.contactsusPage.contactUsPage();
        contactUs.navigate();
    
         contactUs.element("@email").setValue(dataTest.invalidEmailaddress2);
         contactUs.assert.valueEquals("@email",dataTest.invalidEmailaddress2);
         contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
         contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
         contactUs.element("@message").setValue(dataTest.clientMessage);
         contactUs.assert.valueEquals("@message",dataTest.clientMessage);
         contactUs.click("@subjectHeadingDropdown");
         contactUs.click('@webmasterOption');
         contactUs.click("@sendButton")
           .pause(2000); 
           contactUs.expect.element("@errorMessage").is.visible;
         browser.end();
        
    });
 
it('Enter Invalid Email',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

     contactUs.element("@email").setValue(dataTest.invalidEmailaddress);
     contactUs.assert.valueEquals("@email",dataTest.invalidEmailaddress);
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.clientMessage);
     contactUs.assert.valueEquals("@message",dataTest.clientMessage);
     contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});




   
it('Leave the Email field blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

    contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.clientMessage);
     contactUs.assert.valueEquals("@message",dataTest.clientMessage);
     contactUs.click("@sendButton");
       
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
it('Leave the subject heading blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();
    contactUs.element("@email").setValue(dataTest.emailAddress);
    contactUs.assert.valueEquals("@email",dataTest.emailAddress);
     
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.clientMessage);
     contactUs.assert.valueEquals("@message",dataTest.clientMessage);
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
it('Leave the Message field blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

    contactUs.element("@email").setValue(dataTest.emailAddress);
    contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
    contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
    
     
     contactUs.click("@sendButton");
       
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});

       
it('Leave the message field and the subject heading blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

     contactUs.element("@email").setValue(dataTest.emailAddress);
     contactUs.assert.valueEquals("@email",dataTest.emailAddress);
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);

     contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
  
 
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
it("Enter a Text In the order Reference field",function(){ 
  var contactUs = browser.page.contactsusPage.contactUsPage();
  contactUs.navigate();
  contactUs.element("@email").setValue(dataTest.emailAddress);
  contactUs.assert.valueEquals("@email",dataTest.emailAddress);
  contactUs.element("@orderNumber").setValue(dataTest.wrongOrderNumber);
  contactUs.assert.valueEquals("@orderNumber", dataTest.wrongOrderNumber);

  contactUs.click("@subjectHeadingDropdown");
  contactUs.click('@webmasterOption');
  contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();


});

});