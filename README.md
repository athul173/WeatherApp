# Weather App Using Yr (from met.no)

A Dynamic weather application built using React Native and weather information from YR (https://api.met.no/)

<p float="left">
<img src="https://github.com/athul173/WeatherApp/blob/main/screenshots/dashboard.png" width=25% height=25%>
<img src="https://github.com/athul173/WeatherApp/blob/main/screenshots/weatherDetail.png" width=25% height=25%>
</p>

## Features Included

**React Native Application**  
**Typescript Template**  
**Uses YR. no (From Meteorological Institute) for weather data**

**Screens Included:**
> Dashboard
> Weather Details Screen

**Versioning file**
**Dynamic background image for detail weather page**

## Installation

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Getting Started

1. Install `node` & `npm` and then yarn
2. Install `watchman`: `brew install watchman`
3. Install dependencies: `yarn add`

You can use any IDE or code editing tool along with any package managers (npm, nvm , yarn) for developing on any
platform. Use your favorite!

## Running the iOS app 📱

- To install the iOS dependencies, run: `npx pod-install ios`
- To run a on a **Development Simulator**: `yarn ios`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

## Running the Android app 🤖

- To install the Android dependencies, run: `yarn add`
- For more information, go through the official React-Native instructions
  on [this page](https://reactnative.dev/docs/environment-setup#development-os) for "React Native CLI Quickstart" > Mac
  OS > Android
- To run a on a **Development Emulator**: `yarn android`
- Changes applied to Javascript will be applied automatically, any changes to native code will require a recompile

## Testing

This project emphasizes testing to ensure code quality and maintainability. We use Jest and React Native Testing Library
for unit and integration tests.

### Running Tests

To run the test suite, use the following command: `yarn test`

This command will execute all tests within the `tests` directories and generate a coverage report.

### Commit Checks

Enforce code quality and prevent regressions by integrating automated checks into our development workflow. Before
any code is merged into the main branch, the following checks are performed:

- **Linting:** ESLint to ensure code style and consistency.
- **Unit Tests:** All unit tests must pass successfully.
- **Code Coverage:** Maintain a high level of code coverage to ensure that our tests are comprehensive.

These checks are typically implemented using a continuous integration/continuous delivery (CI/CD) pipeline or Git hooks.

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/)
  and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for
  testing. 
- [react-native-community/geolocation](https://github.com/michalchudziak/react-native-geolocation) for fetching
  device location
- Redux toolkit for state management

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
    - `assets`: Asset folder to store all images, vectors, etc.
    - `components`: Folder to store any common component that you use through your app (such as a generic button)
    - `navigation`: All screen-based components inside containers, such as Tabs, Drawers, Stack Navigators.
    - `screens`: Folder that contains all your application screens/features.
    - `utils`: All the utils/helpers files go here that storing reusable methods and logic.
    - `styles`: Folder to store all the styling concerns related to the application theme like palettes,themes etc.
    - `index.js`: Entry point of your application as per React-Native standards.

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store
