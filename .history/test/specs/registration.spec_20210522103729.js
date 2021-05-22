describe('Client creates an account', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through sign in button client is redirected to Create an account page', ()=>{
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitCreate')
            expect(createAnAccount).toBeExisting()                             
    })

    it('client can create a new account', ()=>{
        browser.url('http://czechitas-datestovani-hackathon.cz/en/');
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitCreate')
            expect(createAnAccount).toBeExisting()                             
    })

})