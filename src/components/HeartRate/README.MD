# Heart Rate

The `HeartRate` component animates pulse over a grid.

- `HeartRate` component has two different variants: `Default` and `FollowUP`.

#### 🎬 Preview

---

|             HeartRate             |
| :-------------------------------: |
| ![alt tag](/assets/HeartRate.gif) |

#### Default Usage

- The `HeartRate` component generates a pulsating effect across a grid through animation.

---

```jsx
import React from 'react';
import { HeartRate } from 'react-native-animation-catalog';

const HeartRate = () => <HeartRate />;

export default HeartRate;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeartRate, HeartRateEnum } from 'react-native-animation-catalog';

const HeartRate = () => (
  <View style={styles.container}>
    <HeartRate
      heartRateType={HeartRateEnum.FOLLOWUP}
      pulseColor={'#86C8BC'}
      pulseWidth={10}
      speed={2500}
      size={250}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeartRate;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomHeartRate.gif)

#### Properties

| Props         | Default   | Type                   | Description                                                                                            |
| :------------ | :-------- | :--------------------- | :----------------------------------------------------------------------------------------------------- |
| heartRateType | "Default" | "Default" / "FollowUp" | `Type` of `HeartRate`. Note: `HeartRateEnum` can be used to specify the `type`. Ex. `HeartRateEnum.FOLLOWUP` |
| size          | 250       | number                 | `Height` of `HeartRate`. Note: `width` will be calculated as per `height`.                                 |
| pulseColor    | #FF5252   | string                 | `Color` of `pulse`.                                                                                    |
| gridColor     | #E6E6FA99 | string                 | `Color` of `grid`.                                                                                     |
| speed         | 3000      | number                 | `Speed` of `pulse`.                                                                                    |
| isGridVisible | true      | boolean                | It `decides` whether to `enable` or `disable` the grid behind the `pulse`.                               |
| pulseWidth    | 5         | number                 | `Width` of `pulse`.                                                                                    |

#### 🎬 Preview Example

---

[Heart Rate](/example/src/modules/HeartRate/HeartRateScreen.tsx)
