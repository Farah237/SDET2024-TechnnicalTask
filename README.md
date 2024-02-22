1. Testing My Store (multiformis.com) using NightwatchJS
a. Contact Us Page Tests
Test Required Fields Validation:

Description: Verify that the required fields in the contact us form are validated correctly.
Input: Fill in the form without filling in the required fields.
Expected Output: Expect to see error messages for each required field.
Test Optional Fields:

Description: Verify that optional fields in the contact us form can be submitted empty.
Input: Fill in the form without filling in any optional fields.
Expected Output: Expect the form to be submitted successfully.
Test File Upload:

Description: Verify that file uploads work correctly in the contact us form.
Input: Upload a file in the form.
Expected Output: Expect the file to be uploaded successfully.
b. Homepage Search Tests
Test Search Results:
Description: Verify that searching for "dress" on the homepage returns relevant results.
Input: Perform a search for "dress" on the homepage.
Expected Output: Expect to see search results related to "dress".
c. Nightwatch Page Objects
Ensure all tests use Nightwatch Page objects to interact with elements on the website. No hardcoded selectors should be used.
