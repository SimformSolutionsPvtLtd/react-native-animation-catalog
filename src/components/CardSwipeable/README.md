# Swipeable Card

`Swipeable Card` component can be used to swipe items with custom animations.

- `Swipeable Card` component have two different variants:`<AnimatedCard />` and `<AnimatedCard.Swipeable />`.

> <p style="color:red;">⚠️ When you use <strong>AnimatedCard.Swipeable</strong> in your app, Make sure to wrap your root component in <a style="text-decoration: underline" href="https://docs.swmansion.com/react-native-gesture-handler/docs/1.10.3/">GestureHandleRootView</a> from <a style="text-decoration: underline" href="https://www.npmjs.com/package/react-native-gesture-handler">react-native-gesture-handler</a> and Don’t give any absolute position to GestureHandleRootView. ⚠️ </p>

> Check out example [here](/example/src/App.tsx)

#### 🎬 Preview

---

|            Swipeable Card             |           Simple Card            |
| :-----------------------------------: | :------------------------------: |
| ![alt tag](/assets/CardSwipeable.gif) | ![alt tag](/assets/LeftSide.gif) |



## Swipeable
- Using Swipeable we can swipe a card from left to right or right to left.
---

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
| style     | {}      | ViewStyle | Inner container style.  |
| children  | -       | function  | Render child component. |
| cardStyle | {}       | ViewStyle | Inner card style.       |


## SimpleCard

---

- We have a prop called renderCard which returns callback functions `onLeftSwipe` and `onRightSwipe`.

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
        renderCard={({ onLeftSwipe, onRightSwipe }: SwipeCallBackProps) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Button title='Left Click' onPress={onLeftSwipe} />
              <Button title='Right Click' onPress={onRightSwipe} />
            </View>
          );
        }}
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
| style           | {}      | ViewStyle | Inner container style.                                                               |
| renderCard      | -       | function  | Renders custom view for SimpleCard. It returns callback functions onLeftSwipe and onRightSwipe. |
| cardStyle       | {}      | ViewStyle | Inner card style.                                                                    |
| onLeftSwipeEnd  | -       | function  | A callback function which can be used to perform tasks when Left animation ends.                      |
| onRightSwipeEnd | -       | function  | A callback function which can be used to perform tasks when Right animation ends.                     |

#### 🎬 Preview Example

---

[Swipeable Card](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)

[Simple Card](/example/src/modules/CardSwipeable/CardSwipeableScreen.tsx)
