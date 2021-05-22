describe('Client creates an account', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
    })

    it('Through Sign in button client is redirected to Create an account page', ()=>{
            browser.$('.hide_xs').click()
            let createAnAccount = browser.$('#SubmitCreate')
            expect(createAnAccount).toBeExisting()                             
    })

    it('Client fills in his email', ()=>{
            browser.$('#email_create').click()
            browser.$('#email_create').addValue("test.da.hackathon1@gmail.com")
            browser.$('#SubmitCreate').click()
            let register = browser.$('#submitAccount')
            expect(register).toBeExisting()                             
    })

    it('Client fills in his data', ()=>{
        browser.$('#id_gender1').click()
        //expect('span.checked').toBeExisting()
        let firstName = browser.$('#customer_firstname')
        firstName.click()
        firstName.addValue("test.da")
        expect('.required.form-group.form-ok').toBeExisting
        let lastName = browser.$('#customer_lastname')
        lastName.click()
        lastName.addValue("hackathon")                             
})

})