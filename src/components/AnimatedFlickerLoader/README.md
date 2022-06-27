# Animated Flicker Loader

`Animated Flicker Loader` provide animated loader component which can be use before data loads to the view and also use this component when user navigate to one screen to another screen.

#### 🎬 Preview

|        Animated Flicker loader        |
| :-----------------------------------: |
| ![alt_tag](/assets/FlickerLoader.gif) |

### Default usage

---

```jsx
import React from 'react';
import { AnimatedFlickerLoader } from 'react-native-animation-catalog';

const AnimatedFlicker = () => {
  return <AnimatedFlickerLoader />;
};

export default AnimatedFlicker;
```

### Custom Usage

---

```jsx
import React from 'react';
import { AnimatedFlickerLoader } from 'react-native-animation-catalog';

const AnimatedFlicker = () => {
  return (
    <AnimatedFlickerLoader
      rightCircleColor='black'
      leftCircleColor='white'
      style={style.container}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimatedFlicker;
```

#### Properties

| Props            | Default | Type   | Description                                                    |
| :--------------- | :------ | :----- | :------------------------------------------------------------- |
| leftCircleColor  | `red`   | string | `leftCircleColor` to change background color                   |
| rightCircleColor | `blue`  | string | `rightCircleColor`to change background color                   |
| duration         | 800     | number | `duration` use for specific time to complete animation         |
| size             | 70      | number | `size` use to give size of animation circle.(height and width) |

#### 🎬 Preview Example

---

[Animated Flicker loader](/example/src/modules/AnimatedFlickerLoader/AnimatedFlickerLoaderScreen.tsx)
