# Animated Switch

`AnimatedSwitch` component can be used to provide a marvellous animation when user changing the state of system functionalities and preferences using Toggle Switch.

- `AnimatedSwitch` component has two different variants: `<AnimatedSwitch />` and `<AnimatedSwitch.DayAndNightTheme/>`.

#### 🎬 Preview

---

|            Animated Switch             |
| :------------------------------------: |
| ![alt tag](/assets/AnimatedSwitch.gif) |

#### 1. Default

#### Usage

- The `<AnimatedSwitch />` has On and Off Toggle effect with Animation.

---

```jsx
import React from 'react';
import { AnimatedSwitch } from 'react-native-animation-catalog';

const AnimatedSwitch = () => <AnimatedSwitch />;

export default AnimatedSwitch;
```

#### Custom Usage

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedSwitch } from 'react-native-animation-catalog';

const AnimatedSwitch = () => {
  return (
    <View style={styles.container}>
      <AnimatedSwitch
        size={130}
        lightThemeColor={'#59abdd'}
        darkThemeColor={'#0f1341'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default AnimatedSwitch;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfAnimatedSwitch.gif)

#### Properties

| Props           | Default   | Type   | Description                     |
| :-------------- | :-------- | :----- | :------------------------------ |
| size            | `100`     | number | `size` of `switch`.             |
| lightThemeColor | `#59abdd` | string | `switch color` when it's `OFF`. |
| darkThemeColor  | `#0f1341` | string | `switch color` when it's `ON`   |

#### 2. DayAndNightTheme

#### Default Usage

---

```jsx
import React from 'react';
import { AnimatedSwitch } from 'react-native-animation-catalog';

const AnimatedSwitch = () => <AnimatedSwitch.DayAndNightTheme />;

export default AnimatedSwitch;
```

#### Properties

| Props | Default | Type   | Description         |
| :---- | :------ | :----- | :------------------ |
| size  | `100`   | number | `size` of `switch`. |

#### 🎬 Preview Example

---

[Animated Switch](/example/src/modules/AnimatedSwitch/AnimatedSwitchScreen.tsx)
