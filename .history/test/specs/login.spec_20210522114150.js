describe('Client sign in the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Sign in page', ()=>{
            browser.$('.hide_xs').click()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })

    it('Clien fills in his email', ()=>{
            let email = browser.$('#email')
            email.click()
            email.addValue("test.da.hackathon@gmail.com")                             
    })

    it('Clien fills in his password', ()=>{
            let password = browser.$('#passwd')
            password.click()
            browser.pause(2000)
            password.addValue("TvYyW5Bk")
            browser.pause(2000)                             
    })

    it('Clien clicks on Sign in', ()=>{
            browser.$('#SubmitLogin').click()
            let user = browser.$('.account_user_name.hide_xs')
            expect(user).toBeExi
                                         
    })

})