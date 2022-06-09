# Gradient Progress

```Gradient Progress``` component is basically used when app is processing something, so the user can be made aware of app doing some processing and also you can use as gradient background to any component you can wrap your component into ```Gradient Progress```.

>  <p style="color:red;"> Note:- You need to pass <strong style="color:blue;">four or more than four color </strong> into array to show proper gradient effects.</p>

#### Demo
----
Gradient Progress Example              |
:-------------------------:|
![alt tag](/src/assets/GradientProgress.gif)|

#### Default Usage
---
```jsx
import React from 'react';
import { GradientProgress } from 'react-native-animation-catalog';

const ProgressBar = () =>{
    return (
        <GradientProgress />
    );
};

export default ProgressBar;
```

#### Custom Usage
---
```jsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { GradientProgress } from 'react-native-animation-catalog';

const GradientBackground = () => {
    const colorSet9= ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

    return (
        <View style={styles.gradientChildViewStyle}>
          <GradientProgress
            colors={colorSet9}
            speed={1000}
            start={{x: 0.3, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradientChildStyle}>
            <Text style={styles.textChildStyle}>{Strings.CHILD_COMPONENT}</Text>
            <TouchableOpacity style={styles.clickButtonStyle}>
              <Text style={styles.clickTextStyle}>Click Here!!!</Text>
            </TouchableOpacity>
          </GradientProgress>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientChildViewStyle:{
        alignItems: 'center',
        justifyContent:'center',
    },
    gradientChildStyle: {
        height: 200,
        marginTop: 5,
        justifyContent: 'center',
    },
    textChildStyle: {
        color: Colors.white,
        alignItems: 'center',
        fontSize: 18,
        paddingBottom: 20,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 2,
        justifyContent: 'center',
    },
    clickButtonStyle: {
        backgroundColor: Colors.smokeWhite,
        borderRadius: 20,
        marginHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    clickTextStyle: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: 2,
    },
});

export default GradientBackground;
```

##### Custom Usage Preview
![alt tag](/src/assets/CustomGradientProgress.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
colors | ColorSet.Primary | array | It's colors of array which are displayed in ```Gradient Progress```.
speed | 200 | number | It's the speed of gradient moving.
start | ```{ x: 0, y: 0.2 }``` | object | It's ```x``` and ```y``` starting coordinates of gradient.
end | ```{ x: 1, y: 0.2 }``` | object | It's ```x``` and ```y``` ending coordinates of gradient.
style | ```{{  width: '100%', height: '0.50%', flexDirection: 'column', alignItems: 'stretch'}}``` | ViewStyle | Styling for internal View for ```Gradient Progress```
children | - | component | Render components

#### Demo Example
----
[Gradient Progress Example](/example/src/modules/GradientProgress/GradientProgressScreen.tsx)