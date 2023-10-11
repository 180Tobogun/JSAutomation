import Page from "./Page.ts";
import { ChainablePromiseElement } from 'webdriverio';
class WikiPage extends Page {
  public get userGuideLinkText (){
      return $('p > .wiki-page[href="/projects/redmine/wiki/Guide"]');
  }

    public get redmineGuideHeadingTitle (): ChainablePromiseElement<WebdriverIO.Element> {
        return $('[name="Redmine-guide"] + h1');
    }
    public async clickUserGuideLinkText (): Promise<void> {
        await (await this.userGuideLinkText).click()
    }

}

export default new WikiPage();