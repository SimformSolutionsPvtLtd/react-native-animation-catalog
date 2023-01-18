# Wireless Charger

`WirelessCharger` component can be used to provide a sensational animation when user `charge` their phone `wirelessly`.

#### 🎬 Preview

---

|                WirelessCharger                 |
| :--------------------------------------------: |
| ![alt tag](/assets/DefaultWirelessCharger.gif) |

#### Default Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { WirelessCharger } from "react-native-animation-catalog";

const WirelessChargerScreen = () => (
  <View style={styles.container}>
    <WirelessCharger />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WirelessChargerScreen;
```

#### Custom Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { WirelessCharger } from "react-native-animation-catalog";

const WirelessCharger = () => (
  <View style={styles.container}>
    <WirelessCharger
      size={210}
      outerCircleColor={"#513788"}
      wifiWaveColor={"#D979CA"}
      thunderColor={"#ffe767"}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default WirelessCharger;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomWirelessCharger.gif)

#### Properties

| Props            | Default | Type   | Description                      |
| :--------------- | :------ | :----- | :------------------------------- |
| size             | 200     | number | `Size` of `WirelessCharger`      |
| outerCircleColor | #a9e7ff | string | `Color` of Outer `small-circles` |
| wifiWaveColor    | #BCBCBC | string | `Color` of the `wifi-waves`      |
| thunderColor     | #FFCE00 | string | `Color` of the `thunder-sign`    |

#### 🎬 Preview Example

---

[Wireless Charger](/example/src/modules/WirelessCharger/WirelessChargerScreen.tsx)
