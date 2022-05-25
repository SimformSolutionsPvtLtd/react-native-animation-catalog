# Typing Indicator

```Typing Indicator``` component can be used to indicate when you are typing something.


🎬 Preview

![alt tag](/assets/TypingIndicator.gif)


#### Default Usage
---

```jsx
import React from 'react';
import { TypingIndicator } from 'react-native-animation-catalog';

const TypingIndicator = () => <TypingIndicator />


export default TypingIndicator;
```

##### Default Usage Preview
![alt tag](/assets/DefaultTypingIndicator.gif)

#### Custom Usage
---
```jsx
import React from 'react';
import { TypingIndicator } from 'react-native-animation-catalog';

const TypingIndicator = () => {
    return (
        <TypingIndicator 
          dotRadius={16}
          dotAmplitude={3}
          dotSpacing={32}
          dotX={0}
          dotY={32}
          dotColor={'red'}
        />
    );
}

export default TypingIndicator;
```
##### Custom Usage Preview
![alt tag](/assets/CustomTypingIndicator.gif)

---
#### Properties
Props | Default | Type | Description
:---- | :----- | :---- | :----- 
style | ```{}``` | ViewStyle | internal view style.
dotStyles | ```{}``` | string | styles of dot.
dotColor | ```black``` | string | color of dot.
dotSpacing | ```20``` | number | spacing of dot.
dotAmplitude | ```2``` | number | amplitude of dot.
dotSpeed | ```0.3``` | number | Speed of dot,the speed of the whole animation view.
dotRadius | ```8``` | number | radius of dot.
dotX | ```0``` | number | starting value of x coordinate.
dotY | ```12``` | number | starting value of y coordinate.

#### 🎬 Preview Example
----
[Typing Indicator](/example/src/modules/TypingIndicator/TypingIndicatorScreen.tsx)
