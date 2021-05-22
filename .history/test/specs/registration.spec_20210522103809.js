describe('Client creates an account', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Create an account page', ()=>{
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitCreate')
            expect(createAnAccount).toBeExisting()                             
    })

    it('Client fills in his email', ()=>{
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitCreate')
            expect(createAnAccount).toBeExisting()                             
    })

})