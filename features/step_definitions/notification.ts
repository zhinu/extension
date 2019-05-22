import { Then } from 'cucumber';
import { BubbleWorld, InitializedBubbleWorld } from '../support/setup';
import expect from 'expect';
import { findIframe } from '../support/iframe';

Then(/^I see the notification within (\d+) seconds$/, async function(
  this: BubbleWorld,
  delay: number
) {
  let error = null;
  try {
    const frame = findIframe((this as InitializedBubbleWorld).page);
    expect(frame).toBeDefined();

    if (frame) {
      await frame.waitForSelector(
        `section[data-test-id="bubble-notification"]`,
        { timeout: delay * 1000 }
      );
    }
  } catch (e) {
    error = e;
  }

  expect(error).toBeNull();
});
// document.querySelectorAll('body section[data-test-id="bubble-notification"]');
