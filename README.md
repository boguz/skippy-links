# \<skip-links>

`<skip-links>` is a small and easy to use web component to provide dynamic skip links to any page, thus improving the website's accessibility


## TOC
1. What are skip links and why are they important
2. How to use
3. How to style
4. How to contribute

## 1. 🤔 What are skip links and why are they important?
Assistive technology users often have to tab through a long navigation until they get to the main content. This can be confusing and take a lot of time and energy.

Skip links are links that are placed before any other content and provide a way for assistive technology users to jump to the most important sections of the page, like for instance the main content or even jump directly to a search input on the page.

Skip links seem like a minor improvement to the page, but they can make a huge difference for assistive technology users!

## 2. 🚀 How to use
Using the `skip-links` is quite easy.

You just need to:
- import it
- add the `<skip-links></skip-links>` to the page,
- add the `skip-links-label="..."` to any element you want to show on the skip links.

### 2.1 Install with npm
```bash
npm i skip-links
```

### 2.2 Import into your project
```html
<script src="skip-links/skip-links.js" type="module"></script>
```

### 2.3 Add to the page
The skip-links element should be the first element on the body section of the page
```html
<body>
    <skip-links></skip-links>
    <!-- Add your content after the <skip-links> element -->
</body>
```

### 2.4 Add `skip-links-label` attribute
You define which elements on the page you want to show on the skip links by giving them the `skip-links-label` attribute.

For instance if you want to add a link to the `<main>` section with the "Main Content" label:
```html
<main id="main" skip-links-label="Main Content">
    <!-- your main content -->
</main>
```

> Make sure the element also has an id!

## 3. 🎨 How to style
You can style the `<skip-links>` element like any other element on your page.

The links inside it are on the shadow dom, so you can't style them directly, but you can use the following CSS variables:

| Variable                                  | default value            |
|-------------------------------------------|--------------------------|
| --sl-color-primary                        | #0000ee                  |
| --sl-element-height                       | 4rem                     |
| --sl-link-position                        | absolute                 |
| --sl-link-top                             | 0                        |
| --sl-link-bottom                          | 0                        |
| --sl-link-left                            | 0                        |
| --sl-link-right                           | 0                        |
| --sl-link-width                           | 100%                     |
| --sl-link-height                          | var(--sl-element-height) |
| --sl-link-display                         | flex                     |
| --sl-link-align-items                     | center                   |
| --sl-link-justify-content                 | center                   |
| --sl-link-color                           | var(--sl-color-primary)  |
| --sl-link-color-focus                     | var(--sl-color-primary)  |
| --sl-link-color-hover                     | var(--sl-color-primary)  |
| --sl-link-font-size                       | 1rem                     |
| --sl-link-text-decoration                 | underline                |
| --sl-link-padding                         | 1rem                     |
| --sl-link-opacity                         | 1                        |
| --sl-link-opacity-focus                   | 1                        |
| --sl-link-opacity-hover                   | 1                        |
| --sl-link-transform                       | translateY(-100%)        |
| --sl-link-transform-focus                 | translateY(0)            |
| --sl-link-transform-hover                 | translateY(0)            |
| --sl-link-box-sizing                      | border-box               |
| --sl-link-transition-speed                | .25s                     |
| --sl-link-transition-speed-reduced-motion | 0                        |

Example:
```css
skip-links {
    --sl-color-primary: red;
    --sl-link-opacity: .5;
}
```

## 4. ✏️ How to contribute
If you find any bugs or have any ideas on how to improve this component, please let us know at the [skip-links github]()

#### 📚 Wanna learn more about skip links?
- [WebAIM Skip Navigation Links](https://webaim.org/techniques/skipnav/)
- [The a11y project: skip nav links](https://www.a11yproject.com/posts/skip-nav-links/)
- [a11y-guidelines: skip links best practices](https://a11y-guidelines.orange.com/en/articles/skip-links-best-practices/)
- [Skip links 5 common mistakes](https://www.system-concepts.com/insights/skip-links-the-5-most-common-mistakes/)





This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation



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
