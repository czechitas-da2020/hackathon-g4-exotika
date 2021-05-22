describe('Through Sign in button', () => {

    it('client can create a new account', ()=>{
        browser.url('http://czechitas-datestovani-hackathon.cz/en/');
        
            let addCat = browser.$('.card.cat')
            expect(addCat).toBeExisting()                               // We check that the added picture of the cad is existing on the page.
    })