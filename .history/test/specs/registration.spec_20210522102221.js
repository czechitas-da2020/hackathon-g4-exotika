describe('Through Sign in button', () => {

    it('client can create a new account', ()=>{
        browser.url('http://czechitas-datestovani-hackathon.cz/en/');
        
            let addCat = browser.$('.card.cat')
            expect(addCat).toBeExisting()                             
    })