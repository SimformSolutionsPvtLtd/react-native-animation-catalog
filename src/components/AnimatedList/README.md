# AnimatedList

```AnimatedList``` component is basically used to show items using some animation such as,
* ```left ```
* ```right```
* ```bottom```
* ```fade-up```
* ```fade-down```

#### Demo
----
AnimatedList Example One              |  AnimatedList Example Two
:-------------------------:|:-------------------------:
![alt tag](/src/assets/leftAnimatedList.gif)|![alt tag](/src/assets/animatedFadeUpDown.gif)


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

const AnimationList = () =>{
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
    }
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
|<p style="color:red;">data (Required)</p> | - | array | It is required prop. ```Data is a plain array.```
|<p style="color:red;">renderItem (Required)</p> | - | function | Takes an item from ```data``` and renders it into the list.
animationType | fade-up | string | Different type of animation ```left```, ```right```, ```bottom```, ```fade-up``` and ```fade-down```
animationDelay | 600 | number | Delay between items display
animationDuration | 1500 | number | Time duration of display items
horizontal | false | boolean | If ```true```, show list horizontally. If false show vertically ```(default)```
ItemSeparatorComponent | - | component | Rendered in between each item, but not at the top or bottom
style | ```{{ flex: 1 }}``` | ViewStyle | Styling for internal View for ```AnimatedList```
cardStyle | ```{{ height: 200, width: 350 }}``` | ViewStyle |Styling for internal View for ```Animated Card```

> Note:  For more props of <a href="https://reactnative.dev/docs/flatlist#props">FlatList</a>

#### Demo Example
----
[AnimatedList Example One](/example/src/modules/Home/HomeScreen.tsx)

[AnimatedList Example Two](/example/src/modules/AnimatedList/AnimatedListScreen.tsx)