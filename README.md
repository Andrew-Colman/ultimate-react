# React Blazing

---

⚠️Under migration ⚠️

Formely Ultimate React, now called **React Blazing** 🔥

-> Check out [Ultimate-Next](https://github.com/Andrew-Colman/ultimate-next) ( 🧰 work in progress ⏲️ ) 

- [ ] ultimate next.js tool chain (new)

- [ ] react blazing (this)

- [ ] generator package (project scaffold engine)

⚠️Under migration ⚠️

---

React 17 ready, including the [New JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

<!-- ```
npx curapp <appName>
``` -->

## Table of Contents:

0. [Requirements](#Requirements)
1. [Setup](#Building-and-running-on-localhost)
2. [Features](#Features)
3. [Parcel / Babel](###Bundler-/-Compiler)
4. [Linting / code style](#Linting-/-code-style)
5. [Routes](#Routes)
6. [React Features](#React-Features)
7. [Styling](#Styling)
8. [Testing](#Testing)
9. [Additional Packages](#Additional-Packages)
10. [FAQ](#FAQ)
11. [Roadmap](#Roadmap)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Eslint extension](https://eslint.org/docs/user-guide/integrations) (recommended)
- [Prettier extension](https://prettier.io/docs/en/editors.html) (recommended)
- [Yarn](https://yarnpkg.com/) (highly recommended)
<!-- - [Docker](https://docs.docker.com/desktop/) (recommended) -->

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

> This project uses yarn package manager but you can use npm instead

To run in hot module reloading mode:

```sh
yarn start
```

> Open `localhost:1234/` in your browser

To create a production build:

```sh
yarn build
```

To visualize the size of your final bundle

```sh
yarn bundle_analyze
```

## Features

- alias

- code splitting

### Bundler / Compiler

[Parcel:](https://github.com/parcel-bundler/parcel) Blazing fast, zero configuration web application bundler

[Babel](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript.

### Linting / code style

[Eslint](https://github.com/eslint/eslint) ([airbnb style](https://github.com/airbnb/javascript/tree/master/react))

[Prettier](https://github.com/prettier/prettier)

```js
yarn format // run prettier on all /src js/jsx files
yarn format:check // check for unmatched prettier code style
```

### Routes

[React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

@components/Routes

add new pages at @pages folder

### React Features

[React Lazy:](reactjs.org/docs/code-splitting.html#reactlazy) Load different parts of the application only when they're needed (code-splitting)

[Suspense:](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) Display useful loading states

[Context Api:](https://reactjs.org/docs/context.html) Provides a way to pass data through the component tree without having to pass props down manually at every level

[Hooks:](https://reactjs.org/docs/hooks-intro.html) Let you use state and other React features without writing a class component. In other words, Hooks are functions that let you “hook into” React state and lifecycle features from function components.

### Styling

[Styled components](https://github.com/styled-components/styled-components) (with Global Style)

> automatic CSS Libraries/frameworks support under dev

### Testing

To run unit tests:

```sh
yarn test
```

### Additional Packages

[Axios](https://github.com/axios/axios)

[dotenv](https://github.com/motdotla/dotenv)

### FAQ

what ultimate react is?

- not a react framework like next, gatsby
- not a react component library
- not boilerplate
- not a create-react-app abstraction

so what ultimate react is ? a complete react development [toolchain](https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch)

- implements the latest tools


