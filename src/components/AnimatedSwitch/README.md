# AnimatedSwitch

`AnimatedSwitch` component can be used to provide a marvellous animation when user changing the state of system functionalities and preferences using Toggle Switch.

#### 🎬 Preview

---

|            Animated Switch             |
| :------------------------------------: |
| ![alt tag](/assets/AnimatedSwitch.gif) |

#### Usage

- The `<AnimatedSwitch />` has On and Off Toggle effect with Animation.

---

```jsx
import React from 'react';
import { AnimatedSwitch } from 'react-native-animation-catalog';
import { View } from 'react-native';

const AnimatedSwitch = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 16,
          color: '#000000',
          fontWeight: '500',
          letterSpacing: 1,
        }}
      >
        Animated Switch
      </Text>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <AnimatedSwitch />
      </View>
    </View>
  );
};

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
        size={100}
        lightThemeColor={'#ffe767'}
        darkThemeColor={'#513788'}
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

##### Custom Usage Preview

![alt tag](/assets/CustomUsageAnimatedSwitch.gif)

---

#### Properties

| Props           | Default   | Type   | Description                  |
| :-------------- | :-------- | :----- | :--------------------------- |
| size            | `100`       | number | `size` of `Switch`.            |
| lightThemeColor | `#ffe767` | string | `Switch color` when it is `OFF`. |
| darkThemeColor  | `#513788` | string | `Switch color` when it is `ON`   |

#### 🎬 Preview Example

---

[Animated Switch](/example/src/modules/AnimatedSwitch/AnimatedSwitchScreen.tsx)
