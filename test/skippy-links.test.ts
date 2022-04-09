import { fixture, expect } from '@open-wc/testing';
import { SkippyLinks } from '../src/SkippyLinks.js';
import '../src/skippy-links.js';

describe('SkippyLinks', () => {
  it('can be created', async () => {
    const el = await fixture<SkippyLinks>(`<skippy-links></skippy-links>`);
    expect(el.tagName).to.equal('SKIPPY-LINKS');
  });

  it('has empty attribute if no link targets on page', async () => {
    const el = await fixture<SkippyLinks>(`<skippy-links></skippy-links>`);
    expect(el.hasAttribute('empty')).to.be.true;
  });
});
