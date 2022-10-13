# Animated Notification

`Animated Notification` component can be used to enhance the user experience with charming animation when message arrive.

#### 🎬 Preview

---

|            Animated Notification             |
| :------------------------------------------: |
| ![alt tag](/assets/AnimatedNotification.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedNotification } from 'react-native-animation-catalog';

const AnimatedNotificationScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedNotification size={140} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    flex: 1,
  },
});

export default AnimatedNotificationScreen;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedNotification } from 'react-native-animation-catalog';

const AnimatedNotificationScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedNotification size={100} numberOfNotification={2} color='red' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    flex: 1,
  },
});

export default AnimatedNotificationScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfNotification.gif)

---

#### Properties

| Props                | Default   | Type   | Description                          |
| :------------------- | :-------- | :----- | :----------------------------------- |
| size                 | `140`     | number | `size` of notification box           |
| color                | '#77aa12' | string | `color` of notification counter view |
| numberOfNotification | `1`       | number | `number` of notification             |

#### 🎬 Preview Example

---

[Animated Notification](/example/src/modules/AnimatedNotification/AnimatedNotification.tsx)
