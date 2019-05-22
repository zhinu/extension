import { When } from 'cucumber';
import { BubbleWorld, InitializedBubbleWorld } from '../support/setup';
import expect from 'expect';

When(/^I open the url "(.+)"$/, async function(this: BubbleWorld, url: string) {
  let error = null;
  try {
    await (this as InitializedBubbleWorld).page.goto(url, {
      waitUntil: 'networkidle0'
    });
  } catch (e) {
    error = e;
  }

  expect(error).toBeNull();
});
