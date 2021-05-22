describe('Client open the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
        browser.$('.hide_xs').click()
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })
})
