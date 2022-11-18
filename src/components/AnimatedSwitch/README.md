# AnimatedSwitch

`AnimatedSwitch` component can be used to provide a marvellous animation when user changing the state of system functionalities and preferences using Toggle Switch.

- `AnimatedSwitch` component has three different variants: `<AnimatedSwitch />`,`<AnimatedSwitch.DayAndNightTheme/>` and `<AnimatedSwitch.SeaTheme/>`.

#### 🎬 Preview

---

|            Animated Switch             |
| :------------------------------------: |
| ![alt tag](/assets/AnimatedSwitchDefault.gif) |

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
| size            | 100       | number | `size` of Switch.            |
| lightThemeColor | `#ffe767` | string | Switch color when it is OFF. |
| darkThemeColor  | `#513788` | string | Switch color when it is ON   |

#### 2. DayAndNightTheme

#### Default Usage

---

```jsx
import React from 'react';
import { AnimatedSwitch } from 'react-native-animation-catalog';

const AnimatedSwitch = () => <AnimatedSwitch.DayAndNightTheme />;

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
      <AnimatedSwitch.DayAndNightTheme
        size={100}
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

![alt tag](/assets/DayAndNIghtThemeCustomUsageAnimatedSwitch.gif)

---

#### Properties

| Props           | Default   | Type   | Description                  |
| :-------------- | :-------- | :----- | :--------------------------- |
| size            | 100       | number | `size` of Switch.            |

#### 3. SeaTheme

#### Default Usage

---

```jsx
import React from 'react';
import { AnimatedSwitch } from 'react-native-animation-catalog';

const AnimatedSwitch = () => <AnimatedSwitch.DayAndNightTheme />;

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
      <AnimatedSwitch.SeaTheme
        size={100}
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

![alt tag](/assets/SeaThemeSwitch.gif)

---

#### Properties

| Props           | Default   | Type   | Description                  |
| :-------------- | :-------- | :----- | :--------------------------- |
| size            | 100       | number | `size` of Switch.            |

#### 🎬 Preview Example

---

[Animated Switch](/example/src/modules/AnimatedSwitch/AnimatedSwitchScreen.tsx)
