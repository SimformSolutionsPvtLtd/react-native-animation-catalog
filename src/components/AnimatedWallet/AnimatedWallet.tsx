import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme';
import { useAnimatedWallet } from './hook';
import styles from './styles';
import type { AnimatedWalletStyle } from './types';

const AnimatedWallet = ({
  size = 250,
  primaryColor = Colors.red,
  secondaryColor = Colors.orange,
  numberOfCards = 3,
}: Partial<AnimatedWalletStyle>) => {
  const {
    AnimatedGradientView,
    walletPinAnimation,
    lighterPrimaryColor,
    lighterSecondaryColor,
    gradientPosition,
    walletCards,
  } = useAnimatedWallet({ size, primaryColor, secondaryColor });

  const style = styles({
    size,
  });

  const renderCard = (numberOfCard: number) =>
    walletCards.map(
      ({ id, lighterColor, color, cardAnimation, cardStyle }) =>
        numberOfCard >= id && (
          <AnimatedGradientView
            colors={[color, lighterColor, color]}
            style={[{ ...style.card }, cardStyle, cardAnimation]}
            {...gradientPosition}
          />
        )
    );

  return (
    <View style={style.container}>
      <AnimatedGradientView
        colors={[primaryColor, lighterPrimaryColor]}
        style={style.wallet}
        {...gradientPosition}
      >
        <LinearGradient
          colors={[secondaryColor, lighterSecondaryColor]}
          style={style.walletPart}
          {...gradientPosition}
        />
        <AnimatedGradientView
          colors={[lighterSecondaryColor, secondaryColor]}
          style={[style.walletButton, walletPinAnimation]}
          {...gradientPosition}
        >
          <AnimatedGradientView
            colors={[lighterPrimaryColor, primaryColor]}
            style={[style.circle]}
            {...gradientPosition}
          />
        </AnimatedGradientView>
      </AnimatedGradientView>
      {renderCard(numberOfCards)}
    </View>
  );
};

export default AnimatedWallet;
