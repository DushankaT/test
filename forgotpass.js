describe('forgot pasword', function() {

    it('make sure that the submited email works', function() {

        const emailPasword = newEmailPassword();

        browser.sleep(2000)
        await element(by.emailPasword('#email')).getTagName().then(click(submitButton),

            expect(newEmailPassword).toBe("Email", "NewEmailPasword"),
        )
    });
});