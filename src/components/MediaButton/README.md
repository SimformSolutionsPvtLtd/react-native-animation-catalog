# Media Button
---
`Media Button` component can be used for any type of handling events with custom pulse animations.

- Media Button also provides a customized pulse effect around the buttons and you can handle callback events.

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
| Props            | Default                                                                                                                    | Type                | Description                                |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------ | :----------------------------------------- |
| speed            | 500                                                                                                                        | number              | Speed of icon rotations.    |
| style            | {}                         | ViewStyle           | Media Button view style.                 |
| buttonStyle      |{}| ViewStyle           | Media Button internal button style. |
| imageStyle       | {}                                                                                                                          | ImageStyle          | Media Button internal image style.       |
| playImageSource  | -                                                                                                                          | ImageSourcePropType | Play image source path.                       |
| pauseImageSource | -                                                                                                                          | ImageSourcePropType | Pause image source path.                       |
| onPlayPress      | -                                                                                                                          | function            | Play callback function.     |
| onPausePress     | -                                                                                                                          | function            | Pause callback function.    |
| pulseStyle       | {}                                  | ViewStyle           | Animated Pulse inner view style.      |
| pulseStart       | 1                                                                                                                          | number              | Animated Pulse starting scale value.     |
| pulseEnd         | 2                                                                                                                          | number              | Animated Pulse ending scale value.       |
| pulseSpeed       | 1000                                                                                                                       | number              | Animated Pulse pulsing effect speed.     |
| pulseDisable     | false                                                                                                                      | number              | Animated Pulse disable pulse effect.     |


#### 🎬 Preview Example

---

[Media Button](/example/src/modules/MediaButton/MediaButtonScreen.tsx)
