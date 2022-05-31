import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  CardSwipeable, ColorSet, GradientProgress,
  SwipeCallBackProps
} from 'react-native-animation-catalog';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Images from './assets';
import { imageData } from './constants';
import applicationStyle from './theme/ApplicationStyle';

const App = () => {
  const addItem = (prev = 0, next = 1) => imageData.slice(prev, next);
  const [cardData, setCardData] = useState(addItem(0, 1));
  const removeItem = (id: number) => {
    setCardData(cardData.filter(res => res.id !== id));
    if (imageData.length === id) {
      setCardData(addItem(0, 1));
    } else {
      setCardData(addItem(id, id + 1));
    }
  }
  return (
    <GestureHandlerRootView style={applicationStyle.screen}>
      <GradientProgress style={applicationStyle.simpleGradientStyle} />
      <View style={applicationStyle.containerView}>
        <GradientProgress
          colors={ColorSet.Primary}
          speed={200}
          start={{x: 0, y: 0.2}}
          end={{x: 0, y: 0.2}}
          style={applicationStyle.gradientStyle}
        />
      </View>
      <View style={applicationStyle.swipeableCardView}>
        <Text style={applicationStyle.cardTextStyle}>
          SwipeableCard Example
        </Text>
        {imageData.map((item, index) => {
          return (
            <CardSwipeable.SwipeableCard
              key={item.id}
              style={applicationStyle.cardStyle}>
              <Image source={item.image} style={applicationStyle.imageStyle} />
            </CardSwipeable.SwipeableCard>
          );
        })}
      </View>
      <View style={applicationStyle.simpleCardView}>
        <Text style={applicationStyle.cardTextStyle}>SimpleCard Example</Text>
        {cardData.map((item, index) => {
          return (
            <CardSwipeable.SimpleCard
              style={applicationStyle.cardStyle}
              key={item.id}
              onLeftSwipeEnd={() => {
                removeItem(item.id);
              }}
              onRightSwipeEnd={() => {
                removeItem(item.id);
              }}
              renderCard={({onLeftSwipe, onRightSwipe}: SwipeCallBackProps) => {
                return (
                  <>
                    <View>
                      <Image
                        source={item.image}
                        style={applicationStyle.imageStyle}
                      />
                    </View>
                    <View style={applicationStyle.leftRightButtonStyle}>
                      <TouchableOpacity onPress={onLeftSwipe}>
                        <Image
                          source={Images.like}
                          style={applicationStyle.likeDislikeButtonImageStyle}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={onRightSwipe}>
                        <Image
                          source={Images.dislike}
                          style={applicationStyle.likeDislikeButtonImageStyle}
                        />
                      </TouchableOpacity>
                    </View>
                  </>
                );
              }}
            />
          );
        })}
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
