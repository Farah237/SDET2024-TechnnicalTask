module.exports = {
    url: "http://automationpractice.multiformis.com/index.php?controller=contact",
        elements: {
          contactUs: {
            selector: "#center_column",
          },

          subjectHeadingDropdown: {
            selector: "#uniform-id_contact",
          },
          customerServiceOption: {
            selector: "#id_contact  option[value='2']",
          },
          webmasterOption: {
            selector: "#id_contact  option[value='1']",
          },
          selectOptionDisplay: {
            selector: "#uniform-id_contact span",
          },
          email: {
            selector: "#email",
          },
          orderNumber: {
            selector: "#id_order",
          },
          message: {
            selector: "#message",
          },
          sendButton: {
            selector: "#submitMessage",
          },
          success: {
            selector: ".alert-success",
          },
          errorMessage: {
            selector: ".alert-danger",
          },
          errorMessageList: {
            selector: "#center_column > div > ol > li",
          },
        
          documentUpload: {
            selector: "#uniform-fileUpload",
          },
          fileInput: { 
            selector: "#fileUpload" ,
          }
            }
          }