# \<skip-links>

The \<skip-links> component provides a way for users of assistive technologies to skip to the page's most important sections, thus improving the website's accessibility.


## What are skip links and why are they important?
Assistive technology user often have to tab through a long navigation until they get to the main content. This can be confusing and take a lot of time and energy for some users.

Skip links are links that are placed before any other content that provide assistive technology user to jump to the most important sections of the page, like for instance the main, of even jump directly to a search input on the page.

Skip links seem like mino improvement to the page, but can make a huge difference for assistive technology users!



## Wanna learn more about skip links?
- [WebAIM Skip Navigation Links](https://webaim.org/techniques/skipnav/)
- [The a11y project: skip nav links](https://www.a11yproject.com/posts/skip-nav-links/)
- [a11y-guidelines: skip links best practices](https://a11y-guidelines.orange.com/en/articles/skip-links-best-practices/)
- [Skip links 5 common mistakes](https://www.system-concepts.com/insights/skip-links-the-5-most-common-mistakes/)








# \<skip-links>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i skip-links
```

## Usage

```html
<script type="module">
  import 'skip-links/skip-links.js';
</script>

<skip-links></skip-links>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
