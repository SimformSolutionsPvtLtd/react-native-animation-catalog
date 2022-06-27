# Gradient Progress

```Gradient Progress``` component can be used to show Gradient Progress Bar with custom gradient animations.
* ```Gradient Progress``` also use as background gradient.

>  <p style="color:red;">You should pass <strong style="color:blue;">four or more</strong> in an array to see the proper gradient effect.</p>

#### 🎬 Preview
----
Gradient Progress              |
:-------------------------:|
![alt tag](/assets/GradientProgress.gif)|

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
![alt tag](/assets/CustomGradientProgress.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
colors | ColorSet.Primary | array | ```Colors``` is colors of array which are displayed in ```Gradient Progress```.
speed | 200 | number | ```Speed``` is the speed of gradient moving.
start | ```{ x: 0, y: 0.2 }``` | object | ```start``` is ```x``` and ```y``` starting coordinates of gradient.
end | ```{ x: 1, y: 0.2 }``` | object | ```end``` is ```x``` and ```y``` ending coordinates of gradient.
style | ```{{  width: '100%', height: '0.50%', flexDirection: 'column', alignItems: 'stretch'}}``` | ViewStyle | ```Gradient Progress``` internal view style.
children | - | component |```children``` render child component.

#### 🎬 Preview Example
----
[Gradient Progress](/example/src/modules/GradientProgress/GradientProgressScreen.tsx)