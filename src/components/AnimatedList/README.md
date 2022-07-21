# AnimatedList
---
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
  item: {
    id: number,
    name: string,
  };
}

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

const AnimationList = () =>(
    <AnimatedList
      data={animalData}
      animationType={'left'}
      animationDelay={600}
      cardStyle={styles.cardStyle}
      animationDuration={1200}
      renderItem={({item}: AnimalDataProp) => (
          <View style={styles.itemStyle}>
            <Text>{item.name}</Text>
          </View>
        )
      }
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
    />
  );


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

#### Properties
---

| Props                                            | Default | Type      | Description                                                                 |
| :----------------------------------------------- | :------ | :-------- | :-------------------------------------------------------------------------- |
| <strong style="color:red;">data\*</strong>       | -       | array     | Data is a plain array containing the items to render                       |
| <strong style="color:red;">renderItem\*</strong> | -       | function  | renderItem takes an item from data and renders it into the list        |
| animationType                                    | fade-up | string    | AnimationType are left, right, bottom, fade-up and fade-down  |
| animationDelay                                   | 600     | number    | Animation Delay between items display                                      |
| animationDuration                                | 1500    | number    | Animation Duration of display items                                         |
| horizontal                                       | false   | boolean   | If true, show list horizontally. If false show vertically default    |
| ItemSeparatorComponent                           | -       | function  | ItemSeparatorComponent is used for each item, but not at the top or bottom |
| style                                            | {}      | ViewStyle | Container style                                      |
| cardStyle                                        | {}      | ViewStyle | Card style                                            |

>Check out more <a href="https://reactnative.dev/docs/flatlist#props">FlatList</a> Props

#### 🎬 Preview Example
----
[AnimatedList (Left-Animation)](/example/src/modules/Home/HomeScreen.tsx)

[AnimatedList (Fade-up-Animation)](/example/src/modules/AnimatedList/AnimatedListScreen.tsx)