# Animated Flicker Loader

`Animated Flicker Loader`component can be used as an indicator while fetching data from API or also can be used when a user navigates between screens

#### 🎬 Preview

|            Animated Flicker loader            |
| :-------------------------------------------: |
| ![alt_tag](/assets/AnimatedFlickerLoader.gif) |

### Default usage

---

```jsx
import React from 'react';
import { AnimatedFlickerLoader } from 'react-native-animation-catalog';

const AnimatedFlicker = () => <AnimatedFlickerLoader />;
export default AnimatedFlicker;
```

### Custom Usage

---

```jsx
import React from 'react';
import { AnimatedFlickerLoader } from 'react-native-animation-catalog';

const AnimatedFlicker = () => (
  <AnimatedFlickerLoader
    rightCircleColor='#000000'
    leftCircleColor='#FFA500'
    style={style.container}
    size={50}
  />
);

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimatedFlicker;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfFlicker.gif)

#### Properties

| Props            | Default | Type   | Description                                                    |
| :--------------- | :------ | :----- | :------------------------------------------------------------- |
| leftCircleColor  | `red`   | string | `leftCircleColor` to change circle color                       |
| rightCircleColor | `blue`  | string | `rightCircleColor`to change circle color                       |
| duration         | 800     | number | `duration` use for specific time to complete animation         |
| size             | 100     | number | `size` use to give size of animation circle.(height and width) |

#### 🎬 Preview Example

---

[Animated Flicker loader](/example/src/modules/AnimatedFlickerLoader/AnimatedFlickerLoaderScreen.tsx)
