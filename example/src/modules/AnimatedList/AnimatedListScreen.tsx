import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { AnimatedList } from 'react-native-animation-catalog';
import Images from '../../assets';
import { CustomHeader } from '../../components';
import { sampleData, Strings } from '../../constants';
import { NavProps } from '../../navigation/types';
import { SampleDataProps } from '../AnimatedList/Types';
import styles from './styles/styles';

const RenderSwipeableCardItem = ({ item }: SampleDataProps) => {
  return (
    <>
      <View style={styles.backgroundImageView}>
        <ImageBackground
          source={item.image}
          style={styles.backgroundHorizontalImageStyle}
          resizeMode={'stretch'}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
      </View>

      <View style={styles.likeCommentSectionStyle}>
        <View style={styles.imageViewStyle}>
          <Image source={Images.fav} style={styles.imageIconStyle} />
        </View>
        <View style={styles.imageViewStyle}>
          <Image
            source={Images.comment}
            style={styles.imageIconStyle}
          />
        </View>
        <View style={styles.imageViewStyle}>
          <Image
            source={Images.bookmark}
            style={styles.imageIconStyle}
          />
        </View>
      </View>
    </>
  )
}

const RenderSimpleCardItem = ({ item }: SampleDataProps) => {
  return (
    <>
      <View style={styles.backgroundImageView}>
        <ImageBackground
          source={item.image}
          style={styles.backgroundImageStyle}
          resizeMode={'stretch'}
        />
        <Text style={styles.textStyle}>{item.title}</Text>
      </View>

      <View style={styles.likeCommentSectionStyle}>
        <View style={styles.imageViewStyle}>
          <Image source={Images.fav} style={styles.imageIconStyle} />
        </View>
        <View style={styles.imageViewStyle}>
          <Image
            source={Images.comment}
            style={styles.imageIconStyle}
          />
        </View>
        <View style={styles.imageViewStyle}>
          <Image
            source={Images.bookmark}
            style={styles.imageIconStyle}
          />
        </View>
      </View>
    </>
  )
}

const AnimatedListScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <CustomHeader
        title={Strings.animationComponent}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />

      <Text style={styles.titleTextStyle}>
        {Strings.animatedListHorizontalExample}
      </Text>
      <View style={styles.horizontalViewStyle}>
        <AnimatedList
          data={sampleData}
          style={styles.animatedListStyle}
          animationType={'fade-up'}
          animationDelay={600}
          animationDuration={1200}
          horizontal={true}
          contentContainerStyle={styles.contentContainerHorizontalStyle}
          cardStyle={styles.cardHorizontalStyle}
          renderItem={({item}: SampleDataProps) => (
            <RenderSwipeableCardItem item={item} />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorHorizontalStyle} />
          )}
        />
      </View>

      <Text style={styles.titleTextStyle}>
        {Strings.animatedListVerticalExample}
      </Text>
      <AnimatedList
        data={sampleData}
        style={styles.animatedListStyle}
        animationType={'fade-down'}
        animationDelay={600}
        animationDuration={1200}
        renderItem={({item}: SampleDataProps) => <RenderSimpleCardItem item={item}/> }
        ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      />
    </View>
  );
}

export default AnimatedListScreen;
