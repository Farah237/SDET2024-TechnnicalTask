const dataTest = require("../dataTest/dataTest.json");
describe("This is the Search Page Testing", function () {
    it("Check the visibility of the items",function(browser){ 
var searchResults= browser.page.search.search();
searchResults.navigate();
searchResults.expect.element("@searchBar").to.be.visible;
    });
    it("Search for the element you want",function(browser){ 
        var searchResults= browser.page.search.search();
        searchResults.setValue("@searchBar",dataTest.product); 
        searchResults.assert.valueEquals("@searchBar",dataTest.product);
        searchResults.element("@searchBar").sendKeys(browser.Keys.ENTER);
        
});
it("Enter any dummy character in the search bar",function(browser){ 
    var searchResults= browser.page.search.search();
    searchResults.setValue("@searchBar",dataTest.product); 
    searchResults.assert.valueEquals("@searchBar",dataTest.product);
    searchResults.element("@searchBar").sendKeys(browser.Keys.ENTER);
    searchResults.setValue("@searchBar",dataTest.dummyProduct)
    searchResults.assert.valueEquals("@searchBar",dataTest.dummyProduct);

});
it("Check whether the search bar is case sensitive or not", function(browser){ 
    var searchResults= browser.page.search.search();
    searchResults.setValue("@searchBar",dataTest.capitalCharacters); 
    searchResults.assert.valueEquals("@searchBar",dataTest.capitalCharacters);
    searchResults.element("@searchBar").sendKeys(browser.Keys.ENTER);



});
});
