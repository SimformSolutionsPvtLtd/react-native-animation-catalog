import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ParallaxHeader } from 'react-native-animation-catalog';
import Images from '../../assets';
import { Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import type { RenderHeadersProps } from '../ParallaxHeader/types';
import styles from './styles/styles';

export const Header = ({ navigation, title }: RenderHeadersProps) => {
  return (
    <>
      <TouchableOpacity
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Image style={styles.backButtonImageStyle} source={Images.arrow_back} />
      </TouchableOpacity>
      <Image style={styles.photo} source={Images.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{Strings.LETS_START}</Text>
        <TouchableOpacity style={styles.followTouchableStyle}>
          <Text style={styles.textFollow}>{Strings.FOLLOW}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const StickyHeader = ({ navigation, title }: RenderHeadersProps) => {
  return (
    <View style={styles.stickyHeaderContainerStlye}>
      <TouchableOpacity
        style={styles.stickyHeaderBackButtonStyle}
        onPress={() => navigation.goBack()}>
        <Image style={styles.backButtonImageStyle} source={Images.arrow_back} />
      </TouchableOpacity>
      <Text style={styles.textStickyHeader}>{title}</Text>
      <View style={styles.backButtonImageStyle} />
    </View>
  );
};

const ParallaxHeaderScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <ParallaxHeader
      renderHeader={() => (
        <Header navigation={navigation} title={Strings.PARALLAX_HEADER} />
      )}
      renderStickyHeader={() => (
        <StickyHeader navigation={navigation} title={Strings.PARALLAX_HEADER} />
      )}
    />
  );
};

export default ParallaxHeaderScreen;
