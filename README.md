```
React-native / redux sample application 😎
```

<img alt="express-typescript" src="./src/assets/images/react_native_image.png" height="50%" width="60%">

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
