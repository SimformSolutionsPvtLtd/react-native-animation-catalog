import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {
  AnimatedList,
  ColorSet,
  GradientProgress,
} from 'react-native-animation-catalog';
import { CustomCard, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { AnimationComponentData } from '../../constants/DummyData';
import type { NavProps } from '../../navigation/types';
import styles from './styles/styles';

const RenderItems = ({ item }: any) => {
  return (
    <CustomCard style={styles.cardStyle} onPress={item.screen}>
      <GradientProgress
        speed={350}
        colors={ColorSet.AccentPrimary}
        style={styles.gradientProgressStyle}>
        <View>
          <Text style={styles.componentNameTextStyle}>{item.name}</Text>
        </View>
      </GradientProgress>
    </CustomCard>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.screen}>
      <CustomHeader title={Strings.ANIMATION_COMPONENT} isBackEnabled={false} />
      <AnimatedList
        animationType={'left'}
        style={styles.animatedListStyle}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparatorStyle} />
        )}
        data={AnimationComponentData(navigation)}
        contentContainerStyle={styles.contentContainerStyle}
        cardStyle={styles.cardStyle}
        renderItem={({ item }) => <RenderItems item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
