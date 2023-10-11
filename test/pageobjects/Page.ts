 import { ChainablePromiseElement } from 'webdriverio';

export default class Page {
    // public async openUrl (page: string): Promise<void> {
    //    await browser.url(`https://the-internet.herokuapp.com/${page}`);
    // }

    public async openUrl (): Promise<void> {
       await browser.url(`/`);
    }
    public get redmineHeaderTitle (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#header .current-project');
    }
}
// p > .wiki-page[href="/projects/redmine/wiki/Guide"]