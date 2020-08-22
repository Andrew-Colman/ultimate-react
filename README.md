# ultimate-react-template

Ultimate React Template (Parcel)

## Table of Contents:

0. [Requirements](#Requirements)
1. [Setup](#Building%20and%20running%20on%20localhost)
2. [Running](#Running)
3. [Bundler](###Bundler%20/%20Transpiler)
4. [Linting / code style:](#Linting%20/%20code%20style)
5. [Routes](#Routes)
6. [React Features](#React%20Features)
7. [Styling](#Styling)
8. [Testing](#Testing)
9. [Additional Packages](#Additional%20Packages)
10. [Roadmap](#Roadmap)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Eslint extension](https://eslint.org/docs/user-guide/integrations) (recommended)
- [Prettier extension](https://prettier.io/docs/en/editors.html) (recommended)
- [Docker](https://docs.docker.com/desktop/) (recommended)
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
yarn run build
```

## Running

Open `localhost:1234/` in your browser

### Bundler / Transpiler

[Parcel](https://github.com/parcel-bundler/parcel)

[Babel](https://github.com/babel/babel) (es2020)

### Linting / code style

[Eslint](https://github.com/eslint/eslint) ([airbnb style](https://github.com/airbnb/javascript/tree/master/react))

[Prettier](https://github.com/prettier/prettier)

### Routes

[React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

### React Features

[React Lazy:](reactjs.org/docs/code-splitting.html#reactlazy) Load different parts of the application only when they're needed (code-splitting)

[Suspense:](https://pt-br.reactjs.org/docs/code-splitting.html#route-based-code-splitting) Display useful loading states

### Styling

[Styled components](https://github.com/styled-components/styled-components) (with Global Style)

[Tailwind css](https://github.com/tailwindlabs/tailwindcss)

[Twin.macros](https://github.com/ben-rogerson/twin.macro)

[Postcss](https://github.com/postcss/postcss)

### Testing

[jest](https://github.com/facebook/jest)

[jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md)

[enzyme](https://github.com/enzymejs/enzyme) (react-adapter-16)

To run unit tests:

```sh
yarn test
```

### Additional Packages

[Axios](https://github.com/axios/axios)

[dotenv](https://github.com/motdotla/dotenv)

#### Roadmap

[]- Add docker database (postgres)

[x]- Add Context Provider

[]- Add documentation

[]- Add more additional packages

[]- Add example tests
