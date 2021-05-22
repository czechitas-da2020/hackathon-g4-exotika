describe('Through Sign in button', () => {

    it('', ()=>{
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou
        
        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for(let i= 0; i < 10; i = i +1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    })