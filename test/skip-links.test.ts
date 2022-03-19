import { fixture, expect } from '@open-wc/testing';
import { SkipLinks } from '../src/SkipLinks.js';
import '../src/skip-links.js';

describe('SkipLinks', () => {
  it('can be created', async () => {
    const el = await fixture<SkipLinks>(`<skip-links></skip-links>`);
    expect(el.tagName).to.equal('SKIP-LINKS');
  });

  it('has empty attribute if no link targets on page', async () => {
    const el = await fixture<SkipLinks>(`<skip-links></skip-links>`);
    expect(el.hasAttribute('empty')).to.be.true;
  });
});
