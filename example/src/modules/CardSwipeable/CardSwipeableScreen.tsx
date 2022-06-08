import { useNavigation } from '@react-navigation/native';
import { reject } from 'lodash';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  CardSwipeable,
  SwipeCallBackProps
} from 'react-native-animation-catalog';
import Images from '../../assets';
import { CustomHeader } from '../../components';
import { imageData, Strings } from '../../constants';
import { NavProps } from '../../services/Types';
import styles from './styles/styles';

const CardSwipeableScreen = () => {
  const navigation = useNavigation<NavProps>();
  const addItem = (prev = 0, next = 1) => imageData.slice(prev, next);
  const [cardData, setCardData] = useState(addItem(0, 1));
  const removeItem = (id: number) => {
        setCardData(reject(cardData, {'id':id}));
        if (imageData.length === id) {
        setCardData(addItem(0, 1));
        } else {
        setCardData(addItem(id, id + 1));
        }
  };

  return (
    <>
      <CustomHeader
        title={Strings.cardSwipeableExample}
        isBack={true}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.swipeableCardView}>
        <Text style={styles.cardTextStyle}>{Strings.CARD_SWIPEABLE}</Text>
        {imageData.map((item, index) => {
          return (
            <CardSwipeable.SwipeableCard key={item.id} style={styles.cardStyle}>
              <Image source={item.image} style={styles.imageStyle} />
            </CardSwipeable.SwipeableCard>
          );
        })}
      </View>

      <View style={styles.simpleCardView}>
        <Text style={styles.cardTextStyle}>{Strings.CARD_SIMPLE}</Text>
        {cardData.map((item, index) => {
          return (
            <CardSwipeable.SimpleCard
              style={styles.cardStyle}
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
                    <Image source={item.image} style={styles.imageStyle} />
                    <View style={styles.leftRightButtonStyle}>
                      <TouchableOpacity onPress={onLeftSwipe}>
                        <Image
                          source={Images.like}
                          style={styles.likeDislikeButtonImageStyle}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={onRightSwipe}>
                        <Image
                          source={Images.dislike}
                          style={styles.likeDislikeButtonImageStyle}
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

    </>
  );
}

export default CardSwipeableScreen;
