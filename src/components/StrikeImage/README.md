# Strike Image

The `StrikeImage` component animates a strike over any image to indicate on/off states.

#### 🎬 Preview

---

|             StrikeImage             |
| :---------------------------------: |
| ![alt tag](/assets/StrikeImage.gif) |

#### Default Usage

- `StrikeImage` adds animated strikes to images for visual on/off state indication.

---

```jsx
import React from 'react';
import { StrikeImage } from 'react-native-animation-catalog';

const StrikeImage = () => <StrikeImage />;

export default StrikeImage;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StrikeImage } from 'react-native-animation-catalog';

const StrikeImage = () => (
  <View style={styles.container}>
    <StrikeImage
      size={250}
      strikeWidth={25}
      color={'#FF5252'}
      imageSource={{
        uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
      }}
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

export default StrikeImage;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomStrikeImage.gif)

#### Properties

| Props          | Default             | Type                                | Description                                                                          |
| :------------- | :------------------ | :---------------------------------- | :----------------------------------------------------------------------------------- |
| size           | 350                 | number                              | `Size` of `Image`.                                                                   |
| color          | #59ABDD             | string                              | `Color` of `Image` and `Strike`.                                                     |
| strikeWidth    | 40                  | number                              | `Width` of `Strike`.                                                                 |
| imageSource    | ImageSourcePropType | ImageSourcePropType                 | `Source` of `Image`.                                                                 |
| onChangeStrike | () => {}            | (strikeVisibility: boolean) => void | `Callback` function that gives `visibility` (true / false) of `Strike` in parameter. |

#### 🎬 Preview Example

---

[Strike Image](/example/src/modules/StrikeImage/StrikeImageScreen.tsx)
