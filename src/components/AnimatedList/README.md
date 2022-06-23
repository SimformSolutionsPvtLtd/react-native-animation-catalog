# AnimatedList

```AnimatedList``` component can be used to render list items with custom animations. 

Supported custom animations are:
* ```left ```
* ```right```
* ```bottom```
* ```fade-up```
* ```fade-down```

#### 🎬 Preview
----
AnimatedList (Left-Animation)            |  AnimatedList (Fade-up-Animation)
:-------------------------:|:-------------------------:
![alt tag](/assets/leftAnimatedList.gif)|![alt tag](/assets/animatedFadeUpDown.gif)

#### Usage
---
```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedList } from 'react-native-animation-catalog';

interface AnimalDataProp {
    id: number;
    name: string;
}

const AnimationList = () => {
    const animalData = [
        {
            id: 1,
            name: 'Lion',
        },
        {
            id: 2,
            name: 'Tiger',
        },
        {
            id: 3,
            name: 'Cat',
        },
        {
            id: 4,
            name: 'Dog',
        }
    ];

    return (
        <AnimatedList
            data={animalData}
            animationType={'left'}
            animationDelay={600}
            cardStyle={styles.cardStyle}
            animationDuration={1200}
            renderItem={({item}: AnimalDataProp) => {
                return (
                    <View style={styles.itemStyle}>
                        <Text>{item.name}</Text>
                    </View>
                );
            }}
            ItemSeparatorComponent={() => <View style={styles.separatorStyle}} />}
        />
    );
}

const styles = StyleSheet.create({
    cardStyle:{
        height: 50
    },
    itemStyle:{
        justifyContent:'center',
        alignItems:'center', 
        flex:1
    },
    separatorStyle:{
        height: 10,
    }
});

export default AnimationList;
```

---
#### Properties

Props | Default | Type | Description
:---- | :----- | :---- | :----- 
|<strong style="color:red;">data*</strong> | - | array | ```Data``` is required prop. ```Data is a plain array.```
|<strong style="color:red;">renderItem*</strong> | - | function | ```renderItem``` takes an item from ```data``` and renders it into the list.
animationType | fade-up | string | ```AnimationType``` are ```left```, ```right```, ```bottom```, ```fade-up``` and ```fade-down```.
animationDelay | 600 | number | Animation Delay between items display.
animationDuration | 1500 | number | Animation Duration of display items
horizontal | false | boolean | If ```true```, show list horizontally. If false show vertically ```(default)```.
ItemSeparatorComponent | - | component | ItemSeparatorComponent is used for each item, but not at the top or bottom.
style | ```{{ flex: 1 }}``` | ViewStyle | ```AnimatedList``` internal view style.
cardStyle | ```{{ height: 200, width: 350 }}``` | ViewStyle | ```AnimatedList``` internal card view style.

>Check out more <a href="https://reactnative.dev/docs/flatlist#props">FlatList</a> Props

#### 🎬 Preview Example
----
[AnimatedList (Left-Animation)](/example/src/modules/Home/HomeScreen.tsx)

[AnimatedList (Fade-up-Animation)](/example/src/modules/AnimatedList/AnimatedListScreen.tsx)