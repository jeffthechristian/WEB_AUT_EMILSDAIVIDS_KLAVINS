import BasePage from "./BasePage";

class TestPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
    }

    static get exampleElement() {
        return cy.get("exampleSelector");
    }

    static get firstName() {
        return cy.get("#firstName");
    }

    static get lastName() {
        return cy.get("#lastName");
    }

    static get userEmail() {
        return cy.get("#userEmail");
    }

    static get checkGender() {
        return cy.get("#gender-radio-3");
    }

    static get number() {
        return cy.get("#userNumber");
    }

    static get dateOfBirth() {
        return cy.get("#dateOfBirthInput");
    }

    static get monthSelection() {
        return cy.get(".react-datepicker__month-select");
    }

    static get yearSelection() {
        return cy.get(".react-datepicker__year-select");
    }

    static get daySelection() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get subjectsInput() {
        return cy.get("#subjectsContainer");
    }

    static get economicsSelection() {
        return cy.get("#react-select-2-option-0");
    }

    static get hobbiesCheckBox() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get uploadPicture() {
        return cy.get('input[type=file]');
    }

    static get currentAddress() {
        return cy.get("#currentAddress");
    }

    static get state() {
        return cy.get("#state");
    }

    static get stateSelection() {
        return cy.get("#react-select-3-option-0");
    }

    static get city() {
        return cy.get("#city");
    }

    static get citySelection() {
        return cy.get("#react-select-4-option-0");
    }

    static get formSubmit() {
        return cy.get("#submit");
    }

    static get tableRow() {
        return cy.get("tr");
    }
}

export default TestPage;