describe('Client sign in the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Sign in page', ()=>{
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitLogin')
            expect(createAnAccount).toBeExisting()                             
    })