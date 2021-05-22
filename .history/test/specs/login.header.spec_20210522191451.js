describe('Client open the application and through Sign in button client is redirected to Authentication page', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
        browser.$('.hide_xs').click()
    })

    it('has a Create an Account table at Authentication page', ()=>{
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()
                                       
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })
})
