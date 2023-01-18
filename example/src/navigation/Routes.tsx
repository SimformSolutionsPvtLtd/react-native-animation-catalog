import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationStrings } from '../constants';
import {
  AnimatedCheckMarkScreen,
  AnimatedFlickerLoaderScreen,
  AnimatedListScreen,
  AnimatedNotificationScreen,
  AnimatedScannerScreen,
  AnimatedSwitchScreen,
  AnimatedWalletScreen,
  CardSwipeableScreen,
  GradientProgressScreen,
  HomeScreen,
  MediaButtonScreen,
  ParallaxHeaderScreen,
  ParallaxHeaderTabScreen,
  StrikeImageScreen,
  WirelessChargerScreen,
} from '../modules';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationStrings.HOME}>
        <Stack.Screen
          name={NavigationStrings.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.GRADIENT}
          component={GradientProgressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.CARD_SWIPEABLE}
          component={CardSwipeableScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_LIST}
          component={AnimatedListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.PARALLAX_HEADER}
          component={ParallaxHeaderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.PARALLAX_HEADER_WITH_TABS}
          component={ParallaxHeaderTabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.MEDIA_BUTTON}
          component={MediaButtonScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_CHECK_MARK}
          component={AnimatedCheckMarkScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_WALLET}
          component={AnimatedWalletScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_SCANNER}
          component={AnimatedScannerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_SWITCH}
          component={AnimatedSwitchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_NOTIFICATION}
          component={AnimatedNotificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.ANIMATED_FLICKER_LOADER}
          component={AnimatedFlickerLoaderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.STRIKE_IMAGE}
          component={StrikeImageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationStrings.WIRELESS_CHARGER}
          component={WirelessChargerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
