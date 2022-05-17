import TestPage from "../../pageObjects/TestPage";

context("Practice Form", () => {
    context("Filling out the test form page", () => {
        beforeEach(() => {
            TestPage.visit();
        });

        it("Filling in fields", () => {
            cy.fixture("formData").then((data) => {
                // Identify and fill out First and Last Name fields
                TestPage.firstName.type(data.name);
                TestPage.lastName.type(data.lastName);
                // Identify and fill Email and phone number Fields
                TestPage.userEmail.type(data.email);
                TestPage.checkGender.click({ force: true });
                TestPage.number.type(data.phone);

                // Pick birth date - 28.02.1930.
                TestPage.dateOfBirth.click();
                TestPage.monthSelection.select(1);
                TestPage.yearSelection.select(data.year);
                TestPage.daySelection.click();

                // Pick economics subject
                TestPage.subjectsInput.click().type(data.subject);
                TestPage.economicsSelection.click();
                // Set music in hobbies
                TestPage.hobbiesCheckBox.click({ force: true });

                // Upload a picture from folder
                TestPage.uploadPicture.selectFile(data.filePath);

                // Type into the address field
                TestPage.currentAddress.type(data.address);
            });

            // Select state as NCR
            TestPage.state.click();
            TestPage.stateSelection.click();
            // Select city as Delhi
            TestPage.city.click();
            TestPage.citySelection.click();
            // Submit the whole form
            TestPage.formSubmit.click();

            cy.fixture("formData").then((data) => {
                TestPage.tableRow.eq(1).contains(data.name).contains(data.lastName);
                TestPage.tableRow.eq(2).contains(data.email);
                TestPage.tableRow.eq(3).contains(data.gender);
                TestPage.tableRow.eq(4).contains(data.phone);
                TestPage.tableRow.eq(5).contains(data.dob);
                TestPage.tableRow.eq(6).contains(data.subject);
                TestPage.tableRow.eq(7).contains(data.hobbies);
                TestPage.tableRow.eq(8).contains(data.picture);
                TestPage.tableRow.eq(9).contains(data.address);
                TestPage.tableRow.eq(10).contains(data.stateAndCity);
            });
        });
    });

});