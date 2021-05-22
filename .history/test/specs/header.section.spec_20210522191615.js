describe('Client open the application at home page', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('has logo on the home page', ()=>{
            browser.$('.hide_xs').click()
            let create = browser.$('#SubmitCreate')
            expect(create).toBeExisting()