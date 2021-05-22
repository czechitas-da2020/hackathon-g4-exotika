describe('Client open the application at home page', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Authentication page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()