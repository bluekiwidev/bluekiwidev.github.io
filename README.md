# Personal Website

![GitHub stars](https://img.shields.io/github/stars/bluekiwidev/bluekiwidev.github.io) ![CI](https://github.com/bluekiwidev/bluekiwidev.github.io/actions/workflows/ci.yml/badge.svg) ![GitHub license](https://img.shields.io/github/license/bluekiwidev/bluekiwidev.github.io) ![GitHub last commit](https://img.shields.io/github/last-commit/bluekiwidev/bluekiwidev.github.io) ![GitHub issues](https://img.shields.io/github/issues/bluekiwidev/bluekiwidev.github.io)

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
