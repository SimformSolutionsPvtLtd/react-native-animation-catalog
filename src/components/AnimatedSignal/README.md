# Animated Signal

`Animated Signal` Component is a dynamic and eye-catching visual element to display the strength and quality of a WiFi signal in a graphical and interactive manner

#### 🎬 Preview

---

|          Animated Signal           |
| :--------------------------------: |
| ![alt_tag](/assets/WifiSignal.gif) |

### Default usage

- The `Animated Signal` Component shows how strong and good the WiFi is with moving visuals.

---

```jsx
import React from "react";
import { AnimatedSignal } from "react-native-animation-catalog";

const AnimatedSignal = () => <AnimatedSignal />;

export default AnimatedSignal;
```

### Custom Usage

---

```jsx
import React from "react";
import { StyleSheet, View } from 'react-native';
import { AnimatedSignal } from "react-native-animation-catalog";

const AnimatedSignal = () => (
  <View style={styles.container}>
    <AnimatedSignal
      wifiArea={500}
      numberOfArcs={2}
      color={'#FE5253'}
    />
  </View>
);

const styles = Stylesheet({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default AnimatedSignal;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedSignal.gif)

#### Properties

| Props        | Default | Type   | Description                                                                                                                    |
| :----------- | :------ | :----- | :----------------------------------------------------------------------------------------------------------------------------- |
| wifiArea     | 300     | number | `wifiArea`set overall height and width of `Animated Signal`.                                                                   |
| numberOfArcs | 4       | number | `numberOfArcs` props controls the `creation` of `arcs` in above `WiFi` router box, allowing users to specify a `maximum` of `four arcs`. |
| color        | #76CCB0 | string | `color` to set color of `box` and `arcs` of `Animated Signal`                                                                         |

#### 🎬 Preview Example

---

[Animated Signal](/example/src/modules/AnimatedSignal/AnimatedSignalScreen.tsx)
