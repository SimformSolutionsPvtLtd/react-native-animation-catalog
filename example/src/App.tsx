import React from 'react';
import {View} from 'react-native';
import {applicationStyle} from './theme';
import {
  CounterButton,
  GradientProgress,
  ColorSet,
  TypingIndicator
} from 'react-native-animation-catalog';

const App = () => {
  return (
    <>
      <GradientProgress />
      <View style={applicationStyle.containerView}>
        <GradientProgress
          colors={ColorSet.Primary}
          speed={200}
          start={{x: 0, y: 0.2}}
          end={{x: 0, y: 0.2}}
          style={applicationStyle.gradientStyle}
        />
      </View>
      <CounterButton label={'Press Here'} />
     <View style={{marginBottom:400}}>
      <TypingIndicator  type='sine'/>
     </View>
    </>
  );
};

export default App;
