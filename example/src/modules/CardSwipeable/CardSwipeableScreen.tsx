import {useNavigation} from '@react-navigation/native';
import {reject} from 'lodash';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AnimatedCard, SwipeCallBackProps} from 'react-native-animation-catalog';
import Images from '../../assets';
import {CustomHeader} from '../../components';
import {imageData, Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import styles from './styles/styles';
import {RenderItems} from './types';

const RenderCard = ({onLeftSwipe, onRightSwipe, item}: RenderItems) => {
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
};

const CardSwipeableScreen = () => {
  const navigation = useNavigation<NavProps>();
  const addItem = (prev = 0, next = 1) => imageData.slice(prev, next);
  const [cardData, setCardData] = useState(addItem(0, 1));
  const removeItem = (id: number) => {
    setCardData(reject(cardData, {id}));
    if (imageData.length === id) {
      setCardData(addItem(0, 1));
    } else {
      setCardData(addItem(id, id + 1));
    }
  };

  return (
    <>
      <CustomHeader
        title={Strings.CARD_SWIPEABLE_EXAMPLE}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.swipeableCardView}>
        <Text style={styles.cardTextStyle}>{Strings.CARD_SWIPEABLE}</Text>
        {imageData.map((item, index) => {
          return (
            <AnimatedCard.Swipeable key={item.id} style={styles.cardStyle}>
              <Image source={item.image} style={styles.imageStyle} />
            </AnimatedCard.Swipeable>
          );
        })}
      </View>

      <View style={styles.simpleCardView}>
        <Text style={styles.cardTextStyle}>{Strings.CARD_SIMPLE}</Text>
        {cardData.map((item, index) => {
          return (
            <AnimatedCard
              style={styles.cardStyle}
              key={item.id}
              onLeftSwipeEnd={() => {
                removeItem(item.id);
              }}
              onRightSwipeEnd={() => {
                removeItem(item.id);
              }}
              renderCard={({onLeftSwipe, onRightSwipe}: SwipeCallBackProps) => (
                <RenderCard
                  item={item}
                  onLeftSwipe={onLeftSwipe}
                  onRightSwipe={onRightSwipe}
                />
              )}
            />
          );
        })}
      </View>
    </>
  );
};

export default CardSwipeableScreen;
