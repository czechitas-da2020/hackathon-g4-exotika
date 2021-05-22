describe('Client sign in the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Sign in page', ()=>{
            browser.$('.hide_xs').click()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })

    it('', ()=>{
            let email = browser.$('#email')
            email.click()
            email.addValue("test.da.hackathon@gmail.com")                             
    })

    it('Through Sign in button client is redirected to Sign in page', ()=>{
            let email = browser.$('#email')
            email.click()
            email.addValue("test.da.hackathon@gmail.com")                             
    })

})