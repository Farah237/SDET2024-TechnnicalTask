# Testing an online webstore using NightwatchJS

### a. Contact Us Page Tests

1. **Test Required Fields Validation:**
   - **Description:** Verify that the required fields in the contact us form are validated correctly.
   - **Input:** Fill in the form without filling in the required fields.
   - **Expected Output:** Expect to see error messages for each required field.

2. **Test Optional Fields:**
   - **Description:** Verify that optional fields in the contact us form can be submitted empty.
   - **Input:** Fill in the form without filling in any optional fields.
   - **Expected Output:** Expect the form to be submitted successfully.

3. **Test Mandatory fields:**
   - **Description:** Verify that the form can't be submitted without these fields.
   - **Input:** leave the field empty.
   - **Expected Output:** Expect the form won't be sent.

### b. Homepage Search Tests

1. **Test Search Results:**
   - **Description:** Verify that searching for "dress" on the homepage returns relevant results.
   - **Input:** Perform a search for "dress" on the homepage.
   - **Expected Output:** Expect to see search results related to "dress".


### c. Nightwatch Page Objects

Ensure all tests use Nightwatch Page objects to interact with elements on the website. No hardcoded selectors is used.

## 2. Testing mock-user-auth API with Supertest

### a. API Routes Tests

1. **Test Valid Body:**
   - **Description:** Validate hitting the routes with a valid request body.
   - **Input:** Send a valid request body to each API route.
   - **Expected Output:** Expect a successful response (status 200) from each route.

2. **Test Invalid Body:**
   - **Description:** Validate hitting the routes with an invalid request body.
   - **Input:** Send an invalid request body to each API route.
   - **Expected Output:** Expect an error response (status 4xx) from each route.

3. **Test Valid Authorization:**
   - **Description:** Validate hitting the routes with a valid authorization token.
   - **Input:** Send a valid authorization token to each API route.
   - **Expected Output:** Expect a successful response (status 200) from each route.

4. **Test Invalid Authorization:**
   - **Description:** Validate hitting the routes with an invalid authorization token.
   - **Input:** Send an invalid authorization token to each API route.
   - **Expected Output:** Expect an error response (status 4xx) from each route.

## Documentation  
- A test Case Documentation showing all the test cases performed on testing the website
- A bug report showing all the Bugs faced during the execution


