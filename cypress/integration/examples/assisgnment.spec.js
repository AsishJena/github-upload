
import { url } from '../../../config'
import Navigation from '../../page-objects/components/Navigation'



describe(' Assignment ', () => {
    before(function() {
        cy.visit(url)

    })
    
    it('Search a Playstation 4 and sort the results from high to low ', () => {

        Navigation.search()
        Navigation.sort()

    })

    it('Select the second product from the search result', () => {
      
        Navigation.selectproduct()
      
    })

    it('Check that correct product have been selected', () => {
        
        Navigation.assertion()
    
        })     
        

})

