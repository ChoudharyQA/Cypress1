// How to do API testing in cypress



describe('My API test example', function()

{

it('My first API test', function(){



    cy.request('POST','API URL',{          // cy.request(Method,URL,body) for "POST" request and for "GET" its cy.request(Method,URL)


        name:"Saurabh",
        ID: 1234,

    }).then(function(response){

        expect(response.body).to.have.property("name",'Saurabh')
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property("ID",'1234')



    })



})
})



//How to mock your API response

describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("Website URL");
 
    cy.intercept({
        method : 'GET',
        url : 'API URL'
    },
 
     {
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@bookretrievals').should(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     cy.get('p').should('have.text','Sorry we have only one book available')
 
 
 
     //length of the response array = rows of the table
 
})
 
})

//Inject login token into browser local storage

describe('Token session', function(){

it('My token session', function(){

cy.logincommand().then(function(){

cy.visit("Website URL",{

onBeforeLoad : function(window){

window.localStorage.setItem('token',cypress.env("token"))


}

})




})




})



})

 
















