# Media Button

```Media Button``` component can be used to any type of handling events with custom pulse animations. 

* ```Media Button``` also provide customize pulse effect around the buttons and you can handle callback events.

#### 🎬 Preview
----
Media Button              |
:-------------------------:|
![alt tag](/assets/MediaButton.gif)|

#### Default Usage
---
```jsx
import React from 'react';
import { MediaButton } from 'react-native-animation-catalog';

const MediaButton = () =>{
    return (
        <MediaButton />
    );
};

export default MediaButton;
```

#### Custom Usage
```jsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { MediaButton } from 'react-native-animation-catalog';

const MediaButton = () =>{
    return (
        <MediaButton
            speed={500}
            buttonStyle={styles.mediaButtonStyle}
            pulseStart={0.8}
            pulseEnd={2}
            pulseSpeed={1000}
        />
    );
};

const styles = StyleSheet.create({
    mediaButtonStyle:{
        height: 90,
        width: 90,
        borderRadius: 45,
        backgroundColor: '#FF5252',
    }
});

export default MediaButton;
```

##### Custom Usage Preview
![alt tag](/assets/CustomMediaButton.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
speed | 500 | number | ```Speed``` is the speed of icon rotations.
style | ```{{  flex: 1, backgroundColor: 'transparent' alignItems: 'center', justifyContent: 'center' }}``` | ViewStyle | ```Media Button``` view style.
buttonStyle | ```{{ backgroundColor: '#FF7043', borderRadius: 40, alignItems: 'center', justifyContent: 'center', width: 80,height: 80 }}``` | ViewStyle | ```Media Button``` internal button view style.
imageStyle | - | ImageStyle | ```Media Button``` internal image style.
playImageSource | - | ImageSourcePropType | ```Image``` source path.
pauseImageSource | - | ImageSourcePropType | ```Image``` source path.
onPlayPress | - | function | ```Media Button``` Play callback function.
onPausePress | - | function | ```Media Button``` Pause callback function.
pulseStyle | ```{{ height: 80, width: 80, borderRadius: 40, backgroundColor: '#FFAB91', opacity: 0.6 }}``` | ViewStyle | ```Animated Pulse``` internal view style.
pulseStart | 1 | number | ```Animated Pulse``` starting scale value.
pulseEnd | 2 | number | ```Animated Pulse``` ending scale value.
pulseSpeed | 1000 | number | ```Animated Pulse``` pulsing effect speed.
pulseDisable | false | number | ```Animated Pulse``` disable pulse effect.
children | - | component |```children``` render child component.

#### 🎬 Preview Example
----
[Media Button](/example/src/modules/MediaButton/MediaButtonScreen.tsx)