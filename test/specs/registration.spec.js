describe('Creates a new account', () => {
    before (() => {
        browser.url('http://czechitas-datestovani-hackathon.cz/en/')
        browser.fullscreenWindow()
    })

    it('by fill in the valid credentials to the registration form ', ()=>{
        // click on Sign In button to make a registration
        let signInButton = browser.$('.hide_xs');
        signInButton.click();
        // generate random number to create unique user email address
        let randomNumber =  Math.floor(Math.random()*10000);
        let emailAddressField = browser.$('#email_create');
        emailAddressField.setValue(`test.da.hackathon+${randomNumber}@gmail.com`);
        let createAnAccount = browser.$('#SubmitCreate');
        createAnAccount.click()
        let gender = browser.$('#id_gender1')
        gender.click()
        let firstName = browser.$('#customer_firstname')
        firstName.setValue('Ivan')
        let lastName = browser.$('#customer_lastname') 
        lastName.setValue('Novak') 
        let password = browser.$('#passwd')  
        password.setValue('Password01') 
        let submitButton = browser.$('#submitAccount') 
        submitButton.click()
        let success = browser.$('.alert.alert-success')
        expect(success).toBeExisting()
    })
})