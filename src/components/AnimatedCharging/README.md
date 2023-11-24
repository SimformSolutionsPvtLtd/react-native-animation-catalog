# AnimatedCharging

`AnimatedCharging` component can be utilised to provide a charging animation whenever a user `charges` a `device`.

#### 🎬 Preview

---

|             AnimatedCharging             |
| :--------------------------------------: |
| ![alt tag](/assets/AnimatedCharging.gif) |

#### Default Usage

- The `AnimatedCharging` component showcases a lively animation during the charging of the user's device.

---

```jsx
import React from 'react';
import { AnimatedCharging } from 'react-native-animation-catalog';

const AnimatedCharging = () => <AnimatedCharging />;

export default AnimatedCharging;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCharging } from 'react-native-animation-catalog';

const AnimatedCharging = () => (
  <View style={styles.animatedChargingView}>
    <AnimatedCharging
      size={300}
      backgroundColor={'#01161E'}
      frontWaveColor={'#0466C8'}
      backWaveColor={'#0353A4'}
      stormColor={'#0466C8'}
    />
  </View>
);

const styles = StyleSheet.create({
  animatedChargingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCharging;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedCharging.gif)

#### Properties

| Props             | Default   | Type   | Description                      |
| :---------------- | :-------- | :----- | :------------------------------- |
| size              | 350       | number | `Size` of component              |
| adapterColor      | `#FFFFFF` | string | `Color` of `adapter` and `cable` |
| stormColor        | `#00E141` | string | `Color` of the `storm-sign`      |
| frontWaveColor    | `#00E141` | string | `Color` of `front Wave`          |
| backWaveColor     | `#28BE5F` | string | `Color` of `back Wave `          |
| backgroundColor   | `#4904C8` | string | `Background Color` of circle     |

#### 🎬 Preview Example

---

[AnimatedCharging](/example/src/modules/AnimatedCharging/AnimatedChargingScreen.tsx)
