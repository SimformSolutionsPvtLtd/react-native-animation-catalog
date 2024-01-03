# Animated Text

The `Animated Text` component animates the text with bouncy and particle effect.

- `Animated Text` component has two different variants: `Normal` and `Reverse`.

#### 🎬 Preview

---

|            Animated Text             |
| :----------------------------------: |
| ![alt tag](/assets/AnimatedText.gif) |

#### Default Usage

- The `AnimatedText` component is the combination of bouncy and particle effect of Text and Dot

---

```jsx
import React from 'react';
import { AnimatedText, AnimatedTextEnum } from 'react-native-animation-catalog';

const AnimatedText = () => <AnimatedText text="upbound" />;

export default AnimatedText;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedText, AnimatedTextEnum } from 'react-native-animation-catalog';

const AnimatedText = () => (
  <View style={styles.container}>
    <AnimatedText
      text="upbound"
      dotSize={25}
      fontSize={80}
      bounceDelay={2000}
      particleDelay={2000}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F00FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedText;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomAnimatedText.gif)

#### Properties

| Props           | Default   | Type                 | Description                                                         |
| :-------------- | :-------- | :------------------- | :------------------------------------------------------------------ |
| text            | Required  | string               | `text` is required prop.                                            |
| fontSize        | 60        | number               | `fontSize` of Animated Text.                                        |
| dotSize         | 20        | number               | `dotSize` of circular bouncy dot.                                   |
| speed           | 2000      | number               | `speed` of animations.                                              |
| backGroundColor | '#7F00FF' | string               | `backGroundColor` is use for differentiate the background and Text. |
| amplitude       | -         | number               | `amplitude` is use to amplifies the bounce effect                   |
| type            | 'normal'  | "normal" / "reverse" | `type` of `animation` is use for animation effects.                 |
| bounceDelay     | 1000      | number               | `bounceDelay` of bouncy effect.                                     |
| particleDelay   | 1000      | number               | `particleDelay` of particle effect.                                 |

#### 🎬 Preview Example

---

[Animated Text](/example/src/modules/AnimatedText/AnimatedTextScreen.tsx)
