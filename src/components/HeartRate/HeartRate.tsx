import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../theme';
import FollowUpHeartRate from './FollowUpHeartRate';
import { useHeartRate } from './hooks';
import SimpleHeartRate from './SimpleHeartRate';
import style from './styles';
import { HeartRateEnum, type HeartRatePropsType } from './types';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const HeartRate = ({
  size = 240,
  gridColor = Colors.lightPurple60,
  heartRateType = HeartRateEnum.DEFAULT,
  isGridVisible = true,
  pulseColor = Colors.redVelvet,
  pulseWidth = 5,
  speed = 3000,
}: Partial<HeartRatePropsType>) => {
  const styles = style({ size, gridColor });

  const {
    squareCount,
    defaultPath,
    followUpPath,
    followUpAnimationProps,
    defaultAnimationProps,
  } = useHeartRate(speed);

  return (
    <View style={styles.canvas}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.1 }}
        colors={[
          Colors.white,
          isGridVisible ? gridColor : Colors.white,
          Colors.white,
        ]}
        style={styles.gradientStyle}
      />
      {isGridVisible &&
        new Array(squareCount).fill(0).map((_, index) => {
          return <View key={index} style={styles.box} />;
        })}
      <View
        style={
          heartRateType === HeartRateEnum.DEFAULT
            ? styles.simpleHeartRateParent
            : styles.followUpHeartRateParent
        }
      >
        <Svg height={size} width={size * 1.5}>
          {heartRateType === HeartRateEnum.DEFAULT && (
            <SimpleHeartRate
              {...{
                size,
                pulseColor,
                pulseWidth,
                defaultPath,
                AnimatedPath,
                defaultAnimationProps,
              }}
            />
          )}
          {heartRateType === HeartRateEnum.FOLLOWUP && (
            <FollowUpHeartRate
              {...{
                size,
                pulseColor,
                pulseWidth,
                followUpPath,
                AnimatedPath,
                followUpAnimationProps,
              }}
            />
          )}
        </Svg>
      </View>
    </View>
  );
};

export default HeartRate;
