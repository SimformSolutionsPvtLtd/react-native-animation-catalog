import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {
  AnimatedList, ColorSet, GradientProgress
} from 'react-native-animation-catalog';
import { CustomCard, CustomHeader } from '../../components';
import { AnimationComponentData } from '../../constants/DummyData';
import { NavProps } from '../../services/Types';
import styles from './styles/styles';

const HomeScreen = () => {
  const navigation = useNavigation<NavProps>();
  const changeColor = (id: number) =>
    id % 2 === 0 ? ColorSet.Primary : ColorSet.AccentPrimary;

  return (
    <View style={styles.screen}>
      <CustomHeader title="Animation Components" />
      <AnimatedList
        animationType={'left'}
        style={styles.animatedListStyle}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparatorStyle} />
        )}
        data={AnimationComponentData(navigation)}
        contentContainerStyle={styles.contentContainerStyle}
        cardStyle={styles.cardStyle}
        renderItem={({item}) => {
          return (
            <CustomCard style={styles.cardStyle} onPress={item.screen}>
              <GradientProgress
                speed={800}
                colors={changeColor(item.id)}
                style={styles.gradientProgressStyle}>
                <View>
                  <Text style={styles.componentNameTextStyle}>{item.name}</Text>
                </View>
              </GradientProgress>
            </CustomCard>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;