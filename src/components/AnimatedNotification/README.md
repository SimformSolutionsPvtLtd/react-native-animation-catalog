# Animated Notification

`Animated Notification` component can be used to enhance the user experience with charming animation when message arrive.

#### 🎬 Preview

---

|            Animated Notification             |
| :------------------------------------------: |
| ![alt tag](/assets/AnimatedNotification.gif) |

#### Usage

---

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedNotification } from 'react-native-animation-catalog';

const AnimatedNotificationScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedNotification size={100} />
    </View>
  );
};

export default AnimatedNotificationScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    flex: 1,
  },
});
```

---

#### Properties

| Props                | Default   | Type   | Description                          |
| :------------------- | :-------- | :----- | :----------------------------------- |
| size                 | `200`     | number | `size` of wallet                     |
| color                | '#77aa12' | string | `color` of notification counter view |
| numberOfNotification | `1`       | number | `number` of notification             |

#### 🎬 Preview Example

---

[Animated Notification](/example/src/modules/AnimatedNotification/AnimatedNotification.tsx)
