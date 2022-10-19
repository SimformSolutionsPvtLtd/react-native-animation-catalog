# Animated Wallet

`AnimatedWallet` component can be used to provide a fascinating experience of wallet with animated cards.

#### 🎬 Preview

---

|            Animated Wallet             |
| :------------------------------------: |
| ![alt tag](/assets/AnimatedWallet.gif) |

#### Usage

- The `<AnimatedWallet/>` has opening and closing pin effect with animated cards.

---

```jsx
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedWallet } from 'react-native-animation-catalog';

const AnimatedWallet = () => {
  return (
    <View style={style.container}>
      <AnimatedWallet />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AnimatedWallet;
```

#### 🎬 Custom Usage

```jsx
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedWallet } from 'react-native-animation-catalog';

const AnimatedWallet = () => (
  <View style={style.container}>
    <AnimatedWallet
      numberOfCards={2}
      size={150}
      primaryColor='#FFA500'
      secondaryColor='#81B622'
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AnimatedWallet;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfWallet.gif)

#### Properties

| Props          | Default   | Type   | Description                                |
| :------------- | :-------- | :----- | :----------------------------------------- |
| size           | `200`     | number | `size` of wallet                           |
| numberOfCards  | `3`       | number | `number of cards` in Wallet `Note` : Max 3 |
| primaryColor   | `#f51e0f` | string | `primary color` of Animated Wallet         |
| secondaryColor | `#f07a05` | string | `secondary color` of Animated Wallet       |

#### 🎬 Preview Example

---

[Animated Wallet](/example/src/modules/AnimatedWallet/AnimatedWallet.tsx)
