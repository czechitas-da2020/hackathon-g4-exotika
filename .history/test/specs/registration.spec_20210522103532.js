describe('Through Sign in button', () => {
    before (() => {
        browser.url('https://automation.cervik.repl.co/adding.html')
    })

    it('client is redirected to Create an account page', ()=>{
        browser.url('http://czechitas-datestovani-hackathon.cz/en/');
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