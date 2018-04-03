# Lamda viewer

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), see it's [README](CREATE-REACT-APP.md).

The actual command used was `create-react-app lambda-viewer --scripts-version react-scripts-cssmodules`. This swaps out the react scripts to **build, run and test** the project, for new ones that allow us to use [CSS Modules](https://github.com/css-modules/css-modules).

## Table of Contents

* [Setup](#node-setup)
  * [Node Setup](#node-setup)
  * [Project Setup](#project-setup)
* [Serve Build Directory](#serve-build-directory)

## Setup

### **Node Setup**

The first thing to do after cloning the repo is to ensure you have the correct version of NodeJS installed. Look at `.node-version` in the root of the project, that defines the version of Node that should be used. I recommend you use a **Node Version Manager**, like [ndenv](https://github.com/riywo/ndenv), install it and it's companion [node-build](https://github.com/riywo/node-build), then you can have as many Node versions as you want, all completely separate.

### **Project Setup**

Once you have setup your Node environement, you need to install the dependencies. I use [Yarn](https://yarnpkg.com/lang/en/docs/cli/), but there would be no harm using [npm](https://www.npmjs.com/), I just find **Yarn** to be faster, even that **NPM 5**.

1.  Install dependencies: `yarn install`
1.  Run Application: `yarn start`

**NOTE:** The app should open in a new browser tab.

## Serve Build Directory

There will come the time where you will want to **Deploy** your application, to generate the files necessary you must run `yarn build`. Now, that was easy enough, but how do I know it works? A simple tool to view the build artifacts is to install **serve** (not as a project dependency, but a global one) `yarn add serve --dev`, then run `serve build` (after having run `yarn build` of course).
