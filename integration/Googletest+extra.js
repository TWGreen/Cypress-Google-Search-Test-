describe('My First Test', () => {

    it('Visits google', () => {
        cy.visit('https://www.google.com')
    })

    it('Searching for Varka', () => {
        //Type Varka into search bar
        cy.get('.gLFyf').type('Varka{enter}')
    })

    //Varka restaurant result comes up  
    it('Refining search and searching for Images', () => {
        // Select all in search bar reentered desired search 
        cy.get('input.gLFyf').type('{selectAll}{backspace}Varka Genshin Impact{enter}')
        // Click Google Images
        cy.get('.MUFPAc > :nth-child(2) > a').click()
        // Verify sportstiger.com appears in search results
        cy.contains('sportstiger.com')







    })



})
