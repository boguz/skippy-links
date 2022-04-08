# 1. How to contribute

1. The easiest way to contribute it to [report any bugs](https://github.com/boguz/skip-links/issues) you may find.

2. If you want to actively contribute to the development of this project I would also be happy. Just clone the project, create a new branch, make your changes and create a pull request!  ✨

## 2. Areas I know need improving:
- JS testing (we should write more / better tests)
- FE testing (test in different browsers / assistive technologies)

## 3. Some Infos that might help you

### 3.1 Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

### 3.2 Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

### 3.3 Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

### 3.4 Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`