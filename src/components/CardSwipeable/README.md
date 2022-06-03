# Swipeable Card

```Swipeable Card``` component is basically used to swipe cards based on which direction you swipe.
* In, Swipeable Card you need to write ```<CardSwipeable />``` as default card render.
* This component have two different variants: ```<CardSwipeable.SwipeableCard />``` and ```<CardSwipeable.SimpleCard />```.

> <p style="color:red;">Note:-  ⚠️ When you use <strong style="color:blue;">CardSwipeable.SwipeableCard</strong> in you app, you need to Add <a style="text-decoration: underline" href="https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/">GestureHandleRootView</a> tag at the top of your root element which is imported from <a style="text-decoration: underline" href="https://www.npmjs.com/package/react-native-gesture-handler">react-native-gesture-handler</a> like given <a style="text-decoration: underline" href="/example/src/App.tsx">example</a> and also make sure not to give them position absolute. ⚠️ </p>

#### Demo
----
Swipeable Card Example One              |  Swipeable Card Example Two
:-------------------------:|:-------------------------:
![alt tag](/src/assets/CardSwipeable.gif)|![alt tag](/src/assets/LeftSide.gif)


#### Default Usage
---

```jsx
import React from 'react';
import { CardSwipeable } from 'react-native-animation-catalog';

const Card = () => {
    return (
        <CardSwipeable />
    );
}

export default Card;
```

#### 1. SwipeableCard
---
##### Default Usage
```jsx
import React from 'react';
import { CardSwipeable } from 'react-native-animation-catalog';

const Card = () => {
    return (
        <CardSwipeable.SwipeableCard />
    );
};

export default Card;
```

##### Custom Usage 
```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CardSwipeable } from 'react-native-animation-catalog';

const Card = () => {
    const sampleData = [
        {
            id: 1,
            name: 'SwipeableCard'
        },
        {
            id: 2,
            name: 'SimpleCard'
        },
        {
            id: 3,
            name: 'DefaultCard'
        }
    ];

    return (
        sampleData.map((item, index) => {
        return (
          <CardSwipeable.SwipeableCard key={item.id} style={styles.container}>
            <View
              style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          </CardSwipeable.SwipeableCard>
        );
      })
    );
}

const styles = StyleSheet.create({
    container:{
        height: 100
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF8E1',
        borderColor: '#FFC107',
        borderWidth: 2,
        borderRadius: 10
    },
    textStyle:{
        color: '#FF6F00', 
        fontSize: 20
    }
});

export default Card;
```

##### Custom Usage Preview
![alt tag](/src/assets/CustomSwipeableCard.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
style | ```{{height: 200, justifyContent: 'center', alignItems: 'center',margin: 20, ...Platform.select({ android: { flex: 1 }, })}}``` | ViewStyle | Styling for internal View for ```Swipeable Card```
children | - | component | Render components

---

#### 2. SimpleCard
---
In, this variant one Prop ```renderCard``` is type of function that gives callback function ```onLeftSwipe``` and ```onRightSwipe``` which is used as callback.

##### Default Usage
```jsx
import React from 'react';
import { CardSwipeable } from 'react-native-animation-catalog';

const Card = () => {
    return (
        <CardSwipeable.SimpleCard />
    );
};

export default Card;
```

##### Custom Usage
```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CardSwipeable, SwipeCallBackProps } from 'react-native-animation-catalog';

const Card = () => {
    const sampleData = [
        {
            id: 1,
            name: 'SwipeableCard'
        },
        {
            id: 2,
            name: 'SimpleCard'
        },
        {
            id: 3,
            name: 'DefaultCard'
        }
    ];

    const addItem = (prev = 0, next = 1) => sampleData.slice(prev, next);
    const [cardData, setCardData] = useState(addItem(0, 1));
    const removeItem = (id: number) => {
            setCardData(cardData.filter(res => res.id !== id));
            if (imageData.length === id) {
            setCardData(addItem(0, 1));
            } else {
            setCardData(addItem(id, id + 1));
            }
    };

    return (
        cardData.map((item, index) => {
        return (
          <CardSwipeable.SimpleCard
            key={item.id}
            onLeftSwipeEnd={() => {
              removeItem(item.id);
            }}
            onRightSwipeEnd={() => {
              removeItem(item.id);
            }}
            renderCard={({onLeftSwipe, onRightSwipe}: SwipeCallBackProps) => {
              return (
                <View
                  style={styles.viewStyle}>
                  <Text style={styles.textStyle}>
                    {item.name}
                  </Text>
                  <Button title="Left Click" onPress={onLeftSwipe} />
                  <Button title="Right Click" onPress={onRightSwipe} />
                </View>
              );
            }}
          />
        );
      })
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF8E1',
        borderColor: '#FFC107',
        borderWidth: 2,
        borderRadius: 10,
    },
    textStyle:{
        color: '#FF6F00', 
        fontSize: 20
    }
});

export default Card;
```

##### Custom Usage Preview
![alt tag](/src/assets/CustomSimpleCard.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
style | ```{{height: 200, justifyContent: 'center', alignItems: 'center',margin: 20, ...Platform.select({ android: { flex: 1 }, })}}``` | ViewStyle | Styling for internal View for ```Swipeable Card```
renderCard | render default view | function({ onLeftSwipe,onRightSwipe }) | Render custom view for ```SimpleCard```. It's return callback functions ```onLeftSwipe``` and ```onRightSwipe```.
onLeftSwipeEnd | - | function | It's used when Left animation ends, to perform some task.
onRightSwipeEnd | - | function | It's used when Right animation ends, to perform some task.

#### Demo Example
----
[Swipeable Card Example One](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)

[Swipeable Card Example Two](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)