# Gradient Progress
---
`Gradient Progress` component can be used to show Gradient Progress Bar with custom gradient animations and also can be used as a background gradient

> Note: You should pass four or more colors in an array to see the proper gradient effect.

#### 🎬 Preview

---

|            Gradient Progress             |
| :--------------------------------------: |
| ![alt tag](/assets/GradientProgress.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { GradientProgress } from 'react-native-animation-catalog';

const ProgressBar = () => <GradientProgress />;

export default ProgressBar;
```

#### Custom Usage

---

```jsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GradientProgress } from 'react-native-animation-catalog';

const colorSet = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'];

const GradientBackground = () => (
    <View style={styles.gradientChildViewStyle}>
      <GradientProgress
        colors={colorSet}
        speed={1000}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientChildStyle}
      >
        <Text style={styles.textChildStyle}>Child Component</Text>
        <TouchableOpacity style={styles.clickButtonStyle}>
          <Text style={styles.clickTextStyle}>Click Here!!!</Text>
        </TouchableOpacity>
      </GradientProgress>
    </View>
  );


const styles = StyleSheet.create({
  gradientChildViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientChildStyle: {
    height: 200,
    marginTop: 5,
    justifyContent: 'center',
  },
  textChildStyle: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 18,
    paddingBottom: 20,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 2,
    justifyContent: 'center',
  },
  clickButtonStyle: {
    backgroundColor: '#F8F8FF',
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

#### 🎬 Custom Usage Preview
---
![alt tag](/assets/CustomGradientProgress.gif)
#### Properties
---
| Props    | Default                                                                               | Type      | Description                                                             |
| :------- | :------------------------------------------------------------------------------------ | :-------- | :---------------------------------------------------------------------- |
| colors   | ColorSet.Primary                                                                      | array     | Set of the colors which are displayed in Gradient Progress|
| speed    | 200                                                                                   | number    | Speed of gradient animation                                |
| start    | { x: 0, y: 0.2 }                                                                    | object    | In start, x and y are starting coordinates of the gradient            |
| end      | { x: 1, y: 0.2 }                                                                    | object    | In end, x and y are ending coordinates of the gradient                    |
| style    |{}| ViewStyle | Container style                                |
| children | -                                                                                     | function | Render child component                                      |

#### 🎬 Preview Example

---

[Gradient Progress](/example/src/modules/GradientProgress/GradientProgressScreen.tsx)
