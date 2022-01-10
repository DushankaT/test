describe('navigate', function() {

    it('addition test', function() {

        browser.get('https://the-internet.herokuapp.com/');

        browser.sleep(2000)
        browser.navigate().to('https://the-internet.herokuapp.com/');
    });

});