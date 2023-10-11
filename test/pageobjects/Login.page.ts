// import Page from "./Page.ts";
// import { ChainablePromiseElement } from 'webdriverio';
// class LoginPage extends Page {
//     public get usernameInput (): ChainablePromiseElement<WebdriverIO.Element> {
//         return $('#username')
//     }
//
//     public get passwordInput (): ChainablePromiseElement<WebdriverIO.Element> {
//         return $('#password')
//     }
//
//     public get submitBtn (): ChainablePromiseElement<WebdriverIO.Element> {
//         return $('button[type="submit"]');
//     }
//
//     public get notificationPopup (): ChainablePromiseElement<WebdriverIO.Element> {
//         return $('#flash');
//     }
//
//     public async fillUsernameInput (username: string): Promise<void>{
//        await (await this.usernameInput).setValue(username);
//     }
//
//     public async fillPasswordInput (password: string): Promise<void>{
//         await (await this.passwordInput).setValue(password);
//     }
//
//     public async clickSubmitBtn (): Promise<void>{
//         await (await this.submitBtn).click();
//     }
//
//     public async openLoginUrl (): Promise<void>{
//         await browser.url('/login')
//     }
// }
//
// export default new LoginPage();