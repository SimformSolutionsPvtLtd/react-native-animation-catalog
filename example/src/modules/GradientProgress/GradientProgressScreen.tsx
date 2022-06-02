import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {
  ColorSet,
  GradientProgress
} from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { NavProps } from '../../services/Types';
import styles from './styles/styles';

const GradientProgressScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View>
      <CustomHeader
        title={Strings.gradientProgressExample}
        isBack={true}
        onBackPress={() => navigation.goBack()}
      />

      <Text style={styles.textStyle}>
        {Strings.SIMPLE_GRADIENT_PROGRESS_BAR}
      </Text>
      <GradientProgress style={styles.simpleGradientStyle} />

      <Text style={styles.textStyle}>
        {Strings.GRADIENT_PROGRESS_BAR_WITH_PROPS_AND_STYLING}
      </Text>
      <View style={styles.containerView}>
        <GradientProgress
          colors={ColorSet.Primary}
          speed={200}
          start={{x: 0, y: 0.2}}
          end={{x: 0, y: 0.2}}
          style={styles.gradientStyle}
        />
      </View>

      <Text style={styles.textStyle}>
        {Strings.GRADIENT_PROGRESS_BAR_WITH_CHILD_COMPONENT}
      </Text>
      <View style={styles.containerView}>
        <GradientProgress
          colors={ColorSet.AccentPrimary}
          speed={500}
          start={{x: 0, y: 0.2}}
          end={{x: 0, y: 0.2}}
          style={styles.gradientChildStyle}>
          <Text style={styles.textStyle}>{Strings.CHILD_COMPONENT}</Text>
        </GradientProgress>
      </View>
    </View>
  );
};

export default GradientProgressScreen;
