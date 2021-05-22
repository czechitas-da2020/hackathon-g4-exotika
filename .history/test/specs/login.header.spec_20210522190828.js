describe('Client open the application', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()
            let signIn = browser.$('#SubmitLogin')
            expect(signIn).toBeExisting()                             
    })
})
