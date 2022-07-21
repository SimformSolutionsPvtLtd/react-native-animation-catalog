# Animated Card

`Animated Card` component can be used to swipe items with custom animations.

- AnimatedCard component has two different variants as default and swipeable.

> <p style="color:red;">⚠️ For <strong>swipeable animated card </strong>component, Make sure to wrap your root component / enetry point with <a style="text-decoration: underline" href="https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/">GestureHandleRootView</a> And don’t give any absolute position to GestureHandleRootView. ⚠️ </p>

> Check out example [here](/example/src/App.tsx)

#### 🎬 Preview

---

|            Swipeable Card             |           Animated Card            |
| :-----------------------------------: | :------------------------------: |
| ![alt tag](/assets/CardSwipeable.gif) | ![alt tag](/assets/LeftSide.gif) |



## Swipeable
-  Swipeable Card variant can be used to swipe a card from left to right or right to left

#### Default Usage
---
```jsx
import React from 'react';
import { AnimatedCard } from 'react-native-animation-catalog';

const Card = () => <AnimatedCard.Swipeable />;

export default Card;
```

#### Custom Usage
---
```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AnimatedCard } from 'react-native-animation-catalog';

const sampleData = [
  {
    id: 1,
    name: 'SwipeableCard',
  },
  {
    id: 2,
    name: 'SimpleCard',
  },
  {
    id: 3,
    name: 'DefaultCard',
  },
];

const Card = () => {
  return sampleData.map((item, index) => {
    return (
      <AnimatedCard.Swipeable key={item.id} style={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
      </AnimatedCard.Swipeable>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF8E1',
    borderColor: '#FFC107',
    borderWidth: 2,
    borderRadius: 10,
  },
  textStyle: {
    color: '#FF6F00',
    fontSize: 20,
  },
});

export default Card;
```

#### 🎬 Preview
---
![alt tag](/assets/CustomSwipeableCard.gif)


#### Properties
---
| Props     | Default | Type      | Description                              |
| :-------- | :------ | :-------- | :--------------------------------------- |
| style     | {}      | ViewStyle | Container style  |
| children  | -       | function  | Render child component |
| cardStyle | {}       | ViewStyle | Card style       |


## Animated Card

---

- It has a prop called renderCard that returns callback functions `onLeftSwipe` and `onRightSwipe`.

##### Default Usage
---
```jsx
import React from 'react';
import { AnimatedCard } from 'react-native-animation-catalog';

const Card = () => <AnimatedCard />;

export default Card;
```

##### Custom Usage
---
```jsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
  AnimatedCard,
  SwipeCallBackProps,
} from 'react-native-animation-catalog';

const sampleData = [
  {
    id: 1,
    name: 'SwipeableCard',
  },
  {
    id: 2,
    name: 'SimpleCard',
  },
  {
    id: 3,
    name: 'DefaultCard',
  },
];

const Card = () => {
  const addItem = (prev = 0, next = 1) => sampleData.slice(prev, next);
  const [cardData, setCardData] = useState(addItem(0, 1));

  const removeItem = (id: number) => {
    setCardData(cardData.filter((res) => res.id !== id));
    if (sampleData.length === id) {
      setCardData(addItem(0, 1));
    } else {
      setCardData(addItem(id, id + 1));
    }
  };

  return cardData.map((item, index) => {
    return (
      <AnimatedCard
        key={item.id}
        onLeftSwipeEnd={() => {
          removeItem(item.id);
        }}
        onRightSwipeEnd={() => {
          removeItem(item.id);
        }}
        renderCard={({ onLeftSwipe, onRightSwipe }: SwipeCallBackProps) =>  (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Button title='Left Click' onPress={onLeftSwipe} />
              <Button title='Right Click' onPress={onRightSwipe} />
            </View>
          )
        }
      />
    );
  });
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF8E1',
    borderColor: '#FFC107',
    borderWidth: 2,
    borderRadius: 10,
  },
  textStyle: {
    color: '#FF6F00',
    fontSize: 20,
  },
});

export default Card;
```

#### 🎬  Preview
---
![alt tag](/assets/CustomSimpleCard.gif)



#### Properties
---
| Props           | Default | Type      | Description                                                                                           |
| :-------------- | :------ | :-------- | :---------------------------------------------------------------------------------------------------- |
| style           | {}      | ViewStyle | Container style                                                               |
| renderCard      | -       | function  | Renders custom view for Animatedcard. It returns callback functions onLeftSwipe and onRightSwipe |
| cardStyle       | {}      | ViewStyle | Card style                                                                    |
| onLeftSwipeEnd  | -       | function  | A callback function which can be used to perform tasks when Left animation ends                      |
| onRightSwipeEnd | -       | function  | A callback function which can be used to perform tasks when Right animation ends                     |

#### 🎬 Preview Example

---

[Swipeable Card](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)

[Animated Card](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)
