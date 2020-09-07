export default class Navigation {
    
    static search() {
        cy.get('#twotabsearchtextbox').type('PlayStation 4 {enter}')
    }
    
    static sort() { 
        cy.get('.a-dropdown-prompt').click()
        cy.get('#s-result-sort-select_2').click()
    }

    static selectproduct() {
       
    
       cy.get('h2>a>span').eq(1).click()

       }

    static assertion() {
        cy.get('#productTitle').
        should('contain', 'Playstation 4 PS4 Slim')

    }

}