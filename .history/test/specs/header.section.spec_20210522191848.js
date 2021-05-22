describe('Client open the application at home page', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('has logo on the home page', ()=>{
            let logo = browser.$('.logo.img-responsive')
            expect(logo).toBeExisting()
        })

    it('has sign in button on the home page', ()=>{
            let signIn = browser.$('.hide_xs')
            expect(signIn).toBeExisting()
        })

    it('has shopping cart on the home page', ()=>{
            let signIn = browser.$('.hide_xs')
            expect(signIn).toBeExisting()
        })
    })