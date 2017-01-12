# Flicky-React-Native
Added faster functionality to large format phones between switching apps. Used axis accelerometers to open di erent apps and utilities by bridging Android and iOS native code to Facebook’s React Native Framework. Allowed users to customize sensivity and app selection.
<img src="https://raw.githubusercontent.com/bartchr808/Flicky-React-Native/master/App%20Screenshot.png" width="400px" height="auto" />

## Getting Started

### Prerequisites

Once project is downloaded locally, install [React Native](https://facebook.github.io/react-native/docs/getting-started.html) and running these commands in the project root:

```
$ rm -r node_modules/
$ npm i
$ npm install react-native-modalbox@latest --save
$ npm install react-native-storage --save
```

### Running

Depends on if you want to run Android or iOS:

* Android) Download and setup a [Genymotion](https://www.genymotion.com/fun-zone/) emulator. Then while in the root, run:
```
$ react-native run-android
```
* iOS) Download and setup Xcode. Then similarly as Android, run this in the root:
```
$ react-native run-ios
```

## Built With

* [Genymotion](https://www.genymotion.com/fun-zone/) - The emulator for Android
* [react-native-modalbox](https://github.com/maxs15/react-native-modalbox) - Modal box library
* [react-native-storage](https://github.com/sunnylqm/react-native-storage) - Library for storing user's settings
* [React Native Material Design](https://github.com/react-native-material-design/react-native-material-design) - Android material design library
* [react-native-slider](https://github.com/jeanregisser/react-native-slider) - Custom slider library

## To Do

Fix some bugs in bridging the Android code for switching apps and accessing list of apps. Complete the iOS bridging. Publish to Google and Apple App stores.

## Authors

* **Bart Chrzaszcz**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to those who created the libraries mentioned above and those who have helped with debugging my code and figuring out how to bridge native code

