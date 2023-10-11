// import LoginPage from "../pageobjects/Login.page.ts";
//
// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.openLoginUrl();
//
//         await LoginPage.fillUsernameInput('andrii');
//         await LoginPage.fillPasswordInput('123');
//         await $('button[type="submit"]').click();
//
//         expect(await LoginPage.notificationPopup).toBeExisting();
//         expect(await LoginPage.notificationPopup).toHaveTextContaining('You logged into a secure area!');
//     })
// })

import WikiPage from "../pageobjects/Wiki.page.ts";

describe('Wiki page', ()=> {
    it('should navigate to UsersGuide', async () => {
        await WikiPage.openUrl();

        await (await WikiPage.userGuideLinkText).waitForDisplayed();

        await WikiPage.clickUserGuideLinkText();
        expect (await WikiPage.redmineGuideHeadingTitle).toBeDisplayed();
    });
})