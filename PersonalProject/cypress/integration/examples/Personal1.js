

import Login from "../POM/Login"

const currentValue = 0;
const targetValue = 9999;


describe('My First Test Suite', () => {

    before(function () {

        cy.fixture('example').then(function (data) {

            this.data = data
        })

    })



    it('Login', function () {

        const POMlogin = new Login()

        cy.visit("https://realestateinhouse.24livehost.com:3652")

        cy.url().should('include', "realestateinhouse.24livehost.com:3652")


        POMlogin.Loginpage().click()
        POMlogin.LoginURL()
        POMlogin.Emailvalue().type(this.data.email)
        POMlogin.passwordvalue().type(this.data.password)
        POMlogin.Loginbutton().click()
        POMlogin.Successfulmessage().should('have.text', "Login Successfully")
        POMlogin.selectclick()
        POMlogin.selloption().should('have.text', 'Rent')
        POMlogin.Propertytypes().should('include.text', 'Property Types ')
        POMlogin.ResidentialCheckbox().should('be.checked').should('have.value', '1')
        POMlogin.Bedroomtypes().should('include.text', 'Bedroom')
        POMlogin.Bedroomcheckbox().should('be.checked').should('have.value', '0')
        POMlogin.Sliderparent().should('have.text', "Price Range ")
        POMlogin.Priceslider().should('have.value', '').and('have.value', '')
        POMlogin.Searchpage()
        POMlogin.Searchpageverfication()
        POMlogin.Watchlist().each(($el, index, $list) => {
            if ($el.text() == '1 BHK') {
                cy.wrap($el).click()

            }

        })

        POMlogin.Profiledropdown().should('have.text', 'Test userMy WishlistDashboardLog Out')
        POMlogin.Profiledropdownselection()
        POMlogin.DashbnoardURL()
        POMlogin.Moredetails().should('have.text', "More Detail ")
        POMlogin.Moredetailspopupclose().should('have.text', "More Detail ")
        POMlogin.Aboutus()
        POMlogin.Aboutuspageverfication()
        POMlogin.Aboutusname().type(this.data.name)
        POMlogin.Aboutusemail().type(this.data.email1)
        POMlogin.Aboutusphone().type(this.data.phone)
        POMlogin.Aboutusmessage().type(this.data.message)
        POMlogin.Aboutusubmitbutton()
        POMlogin.Aboutusformsubmitmessage().should('include.text', 'Contact inquiry has been submitted successfully')
        POMlogin.Homebutton().should('have.text',"Home")
        POMlogin.Searchpage()
        POMlogin.Enquirenow().should('have.text'," Enquire Now")
        










    })
})