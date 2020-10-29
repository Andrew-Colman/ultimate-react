# ultimate-react-template

Ultimate React Template (Snowpack)

## Table of Contents:

0. [Requirements](#Requirements)
1. [Setup](#Building-and-running-on-localhost)
2. [Running](#Running)
3. [Build Tools](###Build-tools-/-Transpiler)
4. [Linting / code style](#Linting-/-code-style)
5. [Routes](#Routes)
6. [React Features](#React-Features)
7. [Styling](#Styling)
8. [Testing](#Testing)
9. [Additional Packages](#Additional-Packages)
10. [Roadmap](#Roadmap)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Eslint extension](https://eslint.org/docs/user-guide/integrations) (recommended)
- [Prettier extension](https://prettier.io/docs/en/editors.html) (recommended)
<!-- - [Docker](https://docs.docker.com/desktop/) (recommended) -->
- [Yarn](https://yarnpkg.com/) (optional)

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

To create a production build:

```sh
yarn build
```

## Running

Open `localhost:8080/` in your browser

### Build tools / Transpiler

[Snowpack:](https://www.snowpack.dev/) Snowpack is a modern frontend build tool for faster web development. It replaces heavier, more complex bundlers like webpack or Parcel in your development workflow.

[Babel](https://github.com/babel/babel) Babel is a compiler for writing next generation JavaScript.

### Linting / code style

[Eslint](https://github.com/eslint/eslint) ([airbnb style](https://github.com/airbnb/javascript/tree/master/react))

[Prettier](https://github.com/prettier/prettier)

### Routes

[React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

### React Features

[React Lazy:](reactjs.org/docs/code-splitting.html#reactlazy) Load different parts of the application only when they're needed (code-splitting)

[Suspense:](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting) Display useful loading states

[Context Api:](https://reactjs.org/docs/context.html) Provides a way to pass data through the component tree without having to pass props down manually at every level

[Hooks:](https://reactjs.org/docs/hooks-intro.html) Let you use state and other React features without writing a class component. In other words, Hooks are functions that let you “hook into” React state and lifecycle features from function components.

### Styling

[Styled components](https://github.com/styled-components/styled-components) (with Global Style)

[Postcss](https://github.com/postcss/postcss)

### Testing

To run unit tests:

```sh
yarn test
```

### Additional Packages

[Axios](https://github.com/axios/axios)

[dotenv](https://github.com/motdotla/dotenv)

#### Roadmap

- [ ] Templates

- [ ] Styles

- [ ] Add /api

- [ ] Add documentation

- [ ] Additional packages ?

- [ ] Add example tests
