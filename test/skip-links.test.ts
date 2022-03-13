import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { SkipLinks } from '../src/SkipLinks.js';
import '../src/skip-links.js';

describe('SkipLinks', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<SkipLinks>(html`<skip-links></skip-links>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<SkipLinks>(html`<skip-links></skip-links>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<SkipLinks>(html`<skip-links title="attribute title"></skip-links>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<SkipLinks>(html`<skip-links></skip-links>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
