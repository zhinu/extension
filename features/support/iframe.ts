import { Page } from 'puppeteer';

export const findIframe = (page: Page) =>
  page
    .mainFrame()
    .childFrames()
    .find(frame => frame.name() === 'BubbleIONotification');
