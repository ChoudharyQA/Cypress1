class login {

    Loginpage() {

        return cy.get("a[href*='login']")
    }

    LoginURL() {

        return cy.url().should('include', "login")

    }

    Emailvalue() {

        return cy.get("#email")
    }

    passwordvalue() {

        return cy.get("#password")

    }
    Loginbutton() {

        return cy.get('.user-login-block.login-form button[type="button"]')

    }

    Successfulmessage() {


        return cy.get('.MuiSnackbarContent-message')
    }

    selectclick() {

        return cy.get("div#sell_type").click()

    }

    selloption() {

        return cy.get(".MuiList-root li:nth-child(3)").click()

    }

    Propertytypes() {

        return cy.get(".dropdown-custom.dropdown:nth-child(1)").click()

    }

    ResidentialCheckbox() {


        return cy.get('#type-1').check()
    }

    Bedroomtypes() {

        return cy.get(".dropdown-custom:nth-child(2) .drop-label").click()


    }

    Bedroomcheckbox() {

        return cy.get("#Bedroom").check()

    }

    Sliderparent() {

        return cy.get(".dropdown-custom:nth-child(3) .drop-label").click()
    }

    Priceslider() {

        return cy.get('#price-range-filter-home').click()

    }

    Searchpage() {

        return cy.get('.btn-circle').click()
    }

    Searchpageverfication() {

        return cy.url().should('include', "property-listing/search")

    }

    Watchlist() {

        return cy.get('.faviconTop')

    }

    Profiledropdown() {

        return cy.get('.login-user').click()
    }

    Profiledropdownselection() {

        return cy.get(':nth-child(2) > .link').click()
    }

    DashbnoardURL() {

        return cy.url().should('include', "dashboard")
    }

    Moredetails() {

        return cy.get('.enquiry-block__ftr').click()
    }

    Moredetailspopupclose() {

        return cy.get('.enquiry-block__ftr > a').click({ force: true })

    }

    Aboutus() {

        return cy.get('.mobile-nav li:nth-child(5)').click()
    }

    Aboutuspageverfication() {

        return cy.url().should('include', "about-us")
    }


    Aboutusname() {

        return cy.get('#name')
    }

    Aboutusemail() {

        return cy.get('#user_email')
    }

    Aboutusphone() {

        return cy.get('#phone')
    }

    Aboutusmessage() {

        return cy.get('#enquiry_message')
    }

    Aboutusubmitbutton() {

        return cy.get('.aside_widget button[type="button"]').click()

    }

    Aboutusformsubmitmessage() {

        return cy.get('.MuiSnackbarContent-message')

    }


    Homebutton(){

        return cy.get("li a[href*='/']").eq(0).click()

    }

    Enquirenow(){

        return cy.get(".btn-custom").eq(0).click()
    }













}

export default login;