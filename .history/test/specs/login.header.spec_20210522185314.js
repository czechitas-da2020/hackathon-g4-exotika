describe('Client open the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })
})
