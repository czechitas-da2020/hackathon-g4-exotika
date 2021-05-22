describe('Through Sign in button', () => {

    it('client can create a new account', ()=>{
        browser.url('http://czechitas-datestovani-hackathon.cz/en/');
        it('Button Přidej kočku adds one cat', () => {                  // We test the "Pridej kocku" button, which should add one cat, when clicked once.
            browser.$('#addItem').click()
            let addCat = browser.$('.card.cat')
            expect(addCat).toBeExisting()                               // We check that the added picture of the cad is existing on the page.
    })