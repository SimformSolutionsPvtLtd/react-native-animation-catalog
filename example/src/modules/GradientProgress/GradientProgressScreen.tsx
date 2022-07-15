import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GradientProgress} from 'react-native-animation-catalog';
import {CustomHeader} from '../../components';
import {Strings} from '../../constants';
import {NavProps} from '../../navigation/types';
import {Colors} from '../../theme';
import styles from './styles/styles';

const SimpleGradientProgressBar = () => {
  return (
    <View style={styles.simpleGradientContainerStyle}>
      <Text style={styles.textStyle}>
        {Strings.SIMPLE_GRADIENT_PROGRESS_BAR}
      </Text>
      <View style={styles.simpleGradientsStyle}>
        <GradientProgress style={styles.simpleGradientProgressBarStyle} />

        <GradientProgress
          style={styles.simpleGradientProgressBarStyle}
          colors={Colors.colorSet2}
          speed={250}
        />
        <GradientProgress
          style={styles.simpleGradientProgressBarStyle}
          colors={Colors.colorSet3}
          speed={250}
        />
      </View>
    </View>
  );
};

const CustomGradientProgressBar = () => {
  return (
    <View style={styles.customGradientContainerStyle}>
      <Text style={styles.textStyle}>{Strings.CUSTOM_GRADIENT_PROGRESS}</Text>
      <View style={styles.customGradientsStyle}>
        <GradientProgress
          colors={Colors.colorSet6}
          speed={500}
          start={{x: 0, y: 0.2}}
          end={{x: 1, y: 0.2}}
          style={styles.customGradientProgressBarStyle}
        />
        <View style={styles.customGradientProgressBarViewStyle}>
          <GradientProgress
            colors={Colors.colorSet5}
            speed={600}
            start={{x: 1, y: 0.2}}
            end={{x: 0, y: 0.2}}
            style={styles.customGradientStyle}
          />
          <GradientProgress
            colors={Colors.colorSet4}
            speed={600}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.customGradientProgressStyle}
          />
          <GradientProgress
            colors={Colors.colorSet4}
            speed={600}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.customGradientProgressStyle}
          />
        </View>
      </View>
    </View>
  );
};

const GradientProgressBarWithChild = () => {
  return (
    <View style={styles.gradientChildContainerStyle}>
      <Text style={styles.textStyle}>
        {Strings.GRADIENT_PROGRESS_BAR_WITH_CHILD_COMPONENT}
      </Text>
      <View style={styles.gradientChildViewStyle}>
        <GradientProgress
          colors={Colors.colorSet9}
          speed={1000}
          start={{x: 0.3, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradientChildStyle}>
          <Text style={styles.textChildStyle}>{Strings.CHILD_COMPONENT}</Text>
          <TouchableOpacity style={styles.clickButtonStyle}>
            <Text style={styles.clickTextStyle}>Click Here!!!</Text>
          </TouchableOpacity>
        </GradientProgress>
      </View>
    </View>
  );
};

const GradientProgressScreen = () => {
  const navigation = useNavigation<NavProps>();

  return (
    <View>
      <CustomHeader
        title={Strings.GRADIENT_PROGRESS_EXAMPLE}
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <SimpleGradientProgressBar />
      <CustomGradientProgressBar />
      <GradientProgressBarWithChild />
    </View>
  );
};

export default GradientProgressScreen;
