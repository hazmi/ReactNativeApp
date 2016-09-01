# Demo of React Native app

This is a demo of [React Native](https://facebook.github.io/react-native/) app. It's English Premiere League Standing app. 
The app is using real league data, provided by [Footbal Data API](http://api.football-data.org/). The app can be run in 
iOS and Android and its using the same code. Covered with unit tests and using modular approach for the structure.

### Feature Summary

* [React Native](https://facebook.github.io/react-native/) code that run on both iOS and Android
* Modular/Component based approach
* Tests using Airbnb's [Enzyme](https://github.com/airbnb/enzyme) with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/)
* Using [Redux](http://redux.js.org/) with [Thunk](https://github.com/gaearon/redux-thunk) to manage store
* API data are using [Footbal Data API](http://api.football-data.org/)
* Enable code linting with [ESLint](http://eslint.org/)

## Prerequisite

You need to have [React Native](https://facebook.github.io/react-native/docs/getting-started.html) installed, and 
please follow the React Getting Gtarted docs to prepare your environment so you can run the iOS and Android app.

## How to run

### 1. Clone and Install dependencies
```sh
git clone git@github.com:hazmi/ReactNativeApp.git
cd ReactNativeApp
npm install
```
### 2. Run
To run the iOS app do the following:
```sh
react-native run-ios
```
and for Android, do the following;
```sh
react-native run-android
```

## Modular Approach

For a long run project (I'm talking about project that are running for more than 2, 3 years or more), modular is 
something that will be very helpful to maintain and develop the project. The modular approach will make us easier to
manage the project, avoiding sphagetti codes, make us easier to remove codes that are no longer needed (things that are 
usually a nightmare to do).

The idea is a component directory can only contains one of each action, component, container, reducer and styles. Don't add
more files inside the component directory. If you think you need to add more items, its better to add a whole set component instead.

* `action.js`, payloads of information that send data from your application to your store.
* `component.js`, a presentational react component, handle how things look.
* `container.js`, a component wrapper that handle data states and flow.
* `reducer.js`, a function that handle application's state changes.
* `styles.js`, where all the styles located.
* `__specs__/*`, the test for each items.



## Unit Tests

Who doesn't like a good test? A good tests will make our code more solid, less bugs, and will make you more comfortable
with your code because it being guarded by the tests.

In here, I'm using [Mocha](https://mochajs.org/) test framework with [Chai](http://chaijs.com/) for the assertion library.
To test react component, I use [Airbnb's Enzyme](https://github.com/airbnb/enzyme) testing utility.

To run the tests, run the following command:

```sh
npm test
```
You should see the test output on your screen with all the tests passing nicely.

## Code Lint
To guard the code at the earliest possible, without even need to execute the code. It can detect syntax error and 
other silly mistakes. It can also make the code more beautiful and easy to read.

In here, it use [ESLint](http://eslint.org/) with [Airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). 

To run the code linting, run the following command:

```sh
npm run lint
```
