
describe('Logout', () => {
    before(() => {
        // go to the webpage on: 'http://czechitas-datestovani-hackathon.cz/en/login'
        browser.url('http://czechitas-datestovani-hackathon.cz/en/login')
        let signInButton = browser.$('.hide_xs');
        signInButton.click();
        //fill in the email address
        let emailInput = browser.$('#email');
        emailInput.setValue('test.da.hackathon@gmail.com');
        // fill in the password
        let password = browser.$('#passwd');
        password.setValue('TvYyW5Bk');
        // click on login button to log in
        let submitLoginButton = browser.$('#SubmitLogin')
        submitLoginButton.click()
    })
    it('is working', () => {
        // click on the logged in user to open the dropdown menu
        let userName = browser.$('#user_info_acc')
        userName.click()
        //choose logout from menu
        let logout = browser.$('a=Logout')
        logout.click()
        //assertion
        let signInButton = browser.$('.hide_xs');
        expect(signInButton).toBeExisting()
    })
})

