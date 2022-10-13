# Animated Scanner

`Animated Scanner` Component gives animation to user when they scan any document, QR code etc.

#### 🎬 Preview

|            Animated Scanner             |
| :-------------------------------------: |
| ![alt_tag](/assets/AnimatedScanner.gif) |

### Default usage

---

```jsx
import React from 'react';
import { AnimatedScanner } from 'react-native-animation-catalog';

const AnimatedScanner = () => {
  return <AnimatedScanner />;
};

export default AnimatedScanner;
```

### Custom Usage

---

```jsx
import React from 'react';
import { AnimatedScanner } from 'react-native-animation-catalog';

const AnimatedScanner = () => {
  return <AnimatedScanner
              stopZooming={true}
              style={style.customStyle}
              borderColor = {#000000}
              strokeDelay = {1400}
              strokeColor = {'#0000FF'}
              initialZoomScale = {0.9}
              height = {200}
              zoomingDelay = {800}
              borderRadius = {10}
              borderWidth = {2}
              strokeWidth = {240}
          />;
};

const styles = Stylesheet({
  customStyle: {
    marginTop: 100,
  },
});

export default AnimatedScanner;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomUsageOfScanner.gif)

#### Properties

| Props            | Default                | Type    | Description                                                     |
| :--------------- | :--------------------- | :------ | :-------------------------------------------------------------- |
| stopZooming      | false                  | boolean | `stopZooming` to stop outer zooming in `Animated Scanner`.      |
| initialZoomScale | 0.9                    | number  | `initialZoomScale` use for outer component zooming effect.      |
| height           | 200                    | number  | `height` to set `AnimatedScanner` component height.             |
| style            | `{{ marginTop: 100 }}` | object  | `style` to set component style.                                 |
| zoomingDelay     | 800                    | number  | `zoomingDelay` use for outer component zoomingDelay.            |
| bordercolor      | ColorSet.Primary       | string  | `borderColor` use to give color for Outer zooming component.    |
| borderRadius     | 10                     | number  | `borderRadius` to set outer component border.                   |
| borderWidth      | 2                      | number  | `borderWidth` set outer Component borderWidth.                  |
| strokeColor      | red                    | string  | `strokeColor` add vertical animation color.                     |
| strokeDelay      | 1400                   | number  | `strokeDelay` delay in vertical animation.                      |
| strokeWidth      | 240                    | number  | `strokeWidth` increase and decrease width of verticalAnimation. |

#### 🎬 Preview Example

---

[Animated Scanner](/example/src/modules/AnimatedScanner/AnimatedScannerScreen.tsx)
