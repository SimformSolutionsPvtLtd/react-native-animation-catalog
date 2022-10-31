# Animated CheckMark

`Animated CheckMark` component can be used to provide a delightful experience on success of any particular task.

- `Animated CheckMark` component has three different variants: `<AnimatedCheckMark />`, `<AnimatedCheckMark.Circular/>` and `<AnimatedCheckMark.Simple/>`.

#### 🎬 Preview

---

|            Animated CheckMark             |
| :---------------------------------------: |
| ![alt tag](/assets/AnimatedCheckMark.gif) |

#### 1. Default

#### Usage

- The default `<AnimatedCheckMark />` has fade effect and animated particles around the circle.

---

```jsx
import React from 'react';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => <AnimatedCheckMark />;

export default AnimatedCheckMark;
```

#### Custom Usage

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => {
  return (
    <View style={styles.container}>
      <AnimatedCheckMark
        size={100}
        imageSource={{
          uri: 'https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png',
        }}
        backgroundColor={'#FF5252'}
        primaryParticleColor={'#FF5252'}
        particleColor={'#FF5252'}
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

export default AnimatedCheckMark;
```

##### Custom Usage Preview

![alt tag](/assets/FadedAnimatedCheckMark.gif)

---

#### Properties

| Props                | Default   | Type      | Description                                                                   |
| :------------------- | :-------- | :-------- | :---------------------------------------------------------------------------- |
| duration             | 2000      | number    | `speed` of animation for both image and circle.                               |
| size                 | 100       | number    | component size                                                                |
| containerStyle       | -         | ViewStyle | `Animated CheckMark` internal view style.                                     |
| backgroundColor      | `#01579B` | string    | `Animated CheckMark` background color.                                        |
| innerCircle          | true      | boolean   | shows inner circle                                                            |
| checkMarkColor       | `#ffffff` | string    | defines color for check mark or image.                                        |
| disableParticles     | false     | boolean   | hide animated particles around the circle.                                    |
| particleColor        | `#01579B` | string    | color for animated particles (`Note`: if value of disableParticles is false). |
| primaryParticleColor | `#01579B` | string    | color for animated particles                                                  |
| imageSource          | -         | string    | source of image.                                                              |

#### 2. Circular

#### Default Usage

---

```jsx
import React from 'react';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => <AnimatedCheckMark.Circular />;

export default AnimatedCheckMark;
```

#### Custom Usage

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => (
  <View style={styles.container}>
    <AnimatedCheckMark.Circular
      size={120}
      checkMarkColor={'blue'}
      duration={1500}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default AnimatedCheckMark;
```

##### Custom Usage Preview

![alt tag](/assets/CircularAnimatedCheckMark.gif)

---

#### Properties

| Props             | Default   | Type   | Description                                     |
| :---------------- | :-------- | :----- | :---------------------------------------------- |
| duration          | 1300      | number | `speed` of animation for both image and circle. |
| size              | 100       | number | circle size.                                    |
| checkMarkColor    | `#01579B` | string | image color.                                    |
| imageSource       | -         | string | source of image.                                |
| topBorderColor    | `#E91E63` | string | border top color.                               |
| rightBorderColor  | `#01579B` | string | border right color.                             |
| bottomBorderColor | `#FFA726` | string | border bottom color.                            |
| leftBorderColor   | `#6aa6ba` | string | border left color.                              |

#### 3. Simple

#### Default Usage

---

```jsx
import React from 'react';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => <AnimatedCheckMark.Simple />;

export default AnimatedCheckMark;
```

#### Custom Usage

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimatedCheckMark } from 'react-native-animation-catalog';

const AnimatedCheckMark = () => (
  <View style={styles.container}>
    <AnimatedCheckMark.Simple
      size={120}
      checkMarkColor={'black'}
      duration={1500}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default AnimatedCheckMark;
```

##### Custom Usage Preview

![alt tag](/assets/SimpleAnimatedCheckMark.gif)

---

#### Properties

| Props           | Default    | Type   | Description                                     |
| :-------------- | :--------- | :----- | :---------------------------------------------- |
| duration        | 2000       | number | `speed` of animation for both image and circle. |
| size            | 150        | number | circle size.                                    |
| backgroundColor | `#81D4FA ` | string | circle background color.                        |
| checkMarkColor  | `#01579B`  | string | check mark color.                               |

#### 🎬 Preview Example

---

[Animated CheckMark](/example/src/modules/AnimatedCheckMark/AnimatedCheckMark.tsx)
