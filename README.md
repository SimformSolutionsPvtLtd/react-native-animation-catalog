![alt tag](./assets/react-native-animations.gif)

# react-native-animation-catalog

---

## [![npm version](https://img.shields.io/badge/npm%20package-0.0.2-orange)](https://www.npmjs.org/package/react-native-animation-catalog) [![Android](https://img.shields.io/badge/Platform-Android-green?logo=android)](https://www.android.com) [![iOS](https://img.shields.io/badge/Platform-iOS-green?logo=apple)](https://developer.apple.com/ios) [![MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)

<br>

This custom animated component library provides multiple custom animated components like `AnimatedList`,`AnimatedCard`,`GradientProgress`,`ParallaxHeader`,`MediaButton` and many more!

- It also provides an example app and a detailed usage overview of every available component
- All the available components are fully Android and iOS compatible.
- See our available <a href="#Components">Components</a>

## 🎬 Preview

---

|   <div style="width:270px"></div>Parallax Header   | <div style="width:270px"></div>Parallax Header (With-Tabs) | <div style="width:270px"></div>AnimatedList |
| :------------------------------------------------: | :--------------------------------------------------------: | :-----------------------------------------: |
| ![alt tag](./assets/ParallaxHeaderWithoutTabs.gif) |        ![alt tag](./assets/ParallaxHeaderTabs.gif)         | ![alt_tag](./assets/animatedFadeUpDown.gif) |

| <div style="width:270px"></div>Gradient Progress | <div style="width:270px"></div>Animated Card | <div style="width:270px"></div>Media Button |
| :----------------------------------------------: | :------------------------------------------: | :-----------------------------------------: |
|    ![alt tag](./assets/GradientProgress.gif)     |    ![alt tag](./assets/AnimatedCard.gif)     |    ![alt_tag](./assets/MediaButton.gif)     |

| <div style="width:270px"></div>Animated CheckMark | <div style="width:270px"></div>Animated Wallet | <div style="width:270px"></div>Animated Scanner |
| :-----------------------------------------------: | :--------------------------------------------: | :---------------------------------------------: |
|    ![alt_tag](./assets/AnimatedCheckMark.gif)     |    ![alt_tag](./assets/AnimatedWallet.gif)     |    ![alt_tag](./assets/AnimatedScanner.gif)     |

| <div style="width:270px"></div>Animated Switch | <div style="width:270px"></div>Animated Notification | <div style="width:270px"></div>Animated Flicker Loader |
| :--------------------------------------------: | :--------------------------------------------------: | :----------------------------------------------------: |
|    ![alt_tag](./assets/AnimatedSwitch.gif)     |    ![alt_tag](./assets/AnimatedNotification.gif)     |     ![alt_tag](./assets/AnimatedFlickerLoader.gif)     |

| <div style="width:270px"></div>Wireless Charger  |
| :----------------------------------------------: |
| ![alt_tag](./assets//DefaultWirelessCharger.gif) |

## Installation

##### 1. Install animation catalog

```bash
$ npm install react-native-animation-catalog
# --- or ---
$ yarn add react-native-animation-catalog
```

##### 2. Install required dependencies

```bash
$ npm install react-native-reanimated react-native-gesture-handler react-native-linear-gradient @react-navigation/native @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view react-native-screens react-native-safe-area-context
# --- or ---
$ yarn add react-native-reanimated react-native-gesture-handler react-native-linear-gradient @react-navigation/native @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view react-native-screens react-native-safe-area-context
```

##### 3. Install cocoapods in the ios project

```bash
cd ios && pod install
```

> Note: Make sure to add Reanimated's babel plugin to your `babel.config.js`

```
module.exports = {
      ...
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };
```

## Components

---

### I. [Parallax Header](./src/components/ParallaxHeader)

[More about Parallax Header component](./src/components/ParallaxHeader/README.md)

---

### ⅠI. [Animated List](./src/components/AnimatedList)

[More about AnimatedList component](./src/components/AnimatedList/README.md)

---

### III. [Gradient Progress](./src/components/GradientProgress)

[More about Animated Gradient Progress](./src/components/GradientProgress/README.md)

---

### IV. [Animated Card](./src/components/AnimatedCard)

[More about AnimatedCard component](./src/components/AnimatedCard/README.md)

---

### V. [Media Button](./src/components/MediaButton)

[More about Media Button component](./src/components/MediaButton/README.md)

---

### VI. [Animated Check Mark](./src/components/AnimatedCheckMark)

[More about Animated Check Mark component](./src/components/AnimatedCheckMark/README.md)

---

### VII. [Animated Wallet](./src/components/AnimatedWallet)

[More about Animated Wallet component](./src/components/AnimatedWallet/README.md)

---

### VIII. [Animated Scanner](./src/components/AnimatedScanner)

[More about Animated Scanner component](./src/components/AnimatedScanner/README.md)

---

### IX. [Animated Switch](./src/components/AnimatedSwitch)

[More about Animated Switch component](./src/components/AnimatedSwitch/README.md)

---

### X. [Animated Notification](./src/components/AnimatedNotification)

[More about Animated Notification component](./src/components/AnimatedNotification/README.md)

---

### XI. [Animated Flicker Loader](./src/components/AnimatedFlickerLoader)

[More about Animated Loader component](./src/components/AnimatedFlickerLoader/README.md)

---

### XIII. [Wireless Charger](./src/components/WirelessCharger)

[More about Wireless Charger component](./src/components/WirelessCharger/README.md)

---

### Example

A full working example project is here [Example](./example/)

```sh
$ yarn
$ yarn example ios   // For ios
$ yarn example android   // For Android
```

## Find this library useful? ❤️

Support it by joining [stargazers](https://github.com/SimformSolutionsPvtLtd/react-native-animation-catalog/stargazers) for this repository.⭐

## 🤝 How to Contribute

We'd love to have you improve this library or fix a problem 💪
Check out our [Contributing Guide](CONTRIBUTING.md) for ideas on contributing.

## Bugs / Feature requests / Feedbacks

For bugs, feature requests, and discussion please use [GitHub Issues](https://github.com/SimformSolutionsPvtLtd/react-native-animation-catalog/issues)

## Awesome Mobile Libraries

- Check out our other available [awesome mobile libraries](https://github.com/SimformSolutionsPvtLtd/Awesome-Mobile-Libraries)

### License

- [MIT License](./LICENSE)
