# Media Button

---

` Media Button` component comes with custom animation and a customized pulse effect around the buttons

#### 🎬 Preview

---

|            Media Button             |
| :---------------------------------: |
| ![alt tag](/assets/MediaButton.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { MediaButton } from 'react-native-animation-catalog';

const MediaButtonScreen = () => <MediaButton />;

export default MediaButtonScreen;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';

const MediaButtonScreen = () => (
  <MediaButton
    speed={900}
    buttonStyle={styles.mediaButtonStyle}
    pulseStart={0.8}
    pulseEnd={2}
    pulseSpeed={1000}
  />
);

const styles = StyleSheet.create({
  mediaButtonStyle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: '#FF5252',
  },
});

export default MediaButtonScreen;
```

#### 🎬 Custom Usage Preview

---

![alt tag](/assets/CustomMediaButton.gif)

#### Properties

---

| Props            | Default | Type                | Description                |
| :--------------- | :------ | :------------------ | :------------------------- |
| speed            | 500     | number              | Speed of icon rotation     |
| style            | {}      | ViewStyle           | Container style.           |
| buttonStyle      | {}      | ViewStyle           | Button container style     |
| imageStyle       | {}      | ImageStyle          | Button image style         |
| playImageSource  | -       | ImageSourcePropType | Play image source path     |
| pauseImageSource | -       | ImageSourcePropType | Pause image source path    |
| onPlayPress      | -       | function            | Play callback function     |
| onPausePress     | -       | function            | Pause callback function    |
| pulseStyle       | {}      | ViewStyle           | Pulse view style           |
| pulseStart       | 1       | number              | Pulse starting scale value |
| pulseEnd         | 2       | number              | Pulse ending scale value   |
| pulseSpeed       | 1000    | number              | Pulse effect speed         |
| pulseDisable     | false   | number              | Disable pulse effect       |

#### 🎬 Preview Example

---

[Media Button](/example/src/modules/MediaButton/MediaButtonScreen.tsx)
