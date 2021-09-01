```
React-native / redux sample application 😎
```

<img alt="express-typescript" src="./src/assets/images/react_native_image.png" height="50%" width="100%">

App specification.

* This is a hybrid mobile application, which is developed by using [React native cli](https://reactnative.dev/docs/environment-setup).
* The application was developed for both iOS and Android.
* Used [Redux](https://redux.js.org/) as the main state management tool .
* For Navigation - Repo contains the use of [react-navigation](https://reactnavigation.org/).
* For views - Repo contains 3 type of navigators \, which are `root stack navigator`, `bottom tab navigator` and `tab navigator`.
* For interacting with external api `thi this case graphql`, Repo contains main network manager, which is responsible of handling all the api calls through the application.
* Two environments `production && qa` has been setup for the application `for both iOS and Android`.
* All the scripts to run the application for each environments, are included to the `package.json`

# Contents

* [App Structure](#app-structure)
* [Install, Configure & Run](#install-configure--run)

# Global Requisites

* react-native (>= 0.65.1)
* typescript (>= 3.8.3)
* react-redux (>= 7.2.4)
* redux (>= 4.1.1)
* redux-thunk (>= 2.3.0)

# App Structure

> _Note: I am mentioning only files/folders which you need to configure if required_


```bash
├── __tests__
├── android
├── ios
├── env
│   ├── .prod.env
│   └── .qa.env
├── scripts
│   └── setup-env.js
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── redux
│   │   ├── actions
│   │   │   ├── data
│   │   │   ├── summary.actions.ts
│   │   │   └── summary.queries.ts
│   │   ├── reducers
│   │   │   └── summary.reducer.ts
│   │   ├── store
│   │   │   └── store.ts
│   │   └── types.d.ts
│   ├── components
│   │   ├── custom-button
│   │   ├── custom-row
│   │   ├── separator
│   │   └── tab-Icon
│   ├── navigation
│   │   ├── bottom-tab-navigator
│   │   ├── root-stack-navigator
│   │   ├── tab-navigator
│   │   └── screen-names.ts
│   ├── screens
│   │   ├── documents
│   │   ├── management
│   │   ├── overview
│   │   ├── property-list
│   │   ├── summary
│   │   ├── welcome
│   │   └── index.ts
│   ├── shared-services
│   │   ├── helper-services
│   │   │   ├── helper.spec.ts
│   │   │   └── helper.ts
│   │   ├── network-services
│   │   │   ├── network-manager.spec.ts
│   │   │   └── network-manager.tsx
│   │   ├── mock-data
│   │   │   ├── mock-document-response.json
│   │   │   └── mock-summary-response.json
│   │   └── index.html
│   ├── styles
│   │   ├── colors.ts
│   │   ├── font.style.ts
│   │   └── fonts.ts
│   └── utils
│       └── constants.ts
│
├── .env
├── .gitignore
├── App.tsx
├── babel.config.js
├── index.js
├── jestsetup.js
├── package.json
├── react-native.config.js
└── tsconfig.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/Isurumw/React-native-redux-sample-app

# Goto the cloned project folder.
cd  react-native-redux-sample-app;

# Install NPM dependencies.
npm install;

# Install pod dependencies.
cd ios && pod install;

# Run the app - iOS
npm run ios:qa;

# Run the app - Android
npm run android:qa;
