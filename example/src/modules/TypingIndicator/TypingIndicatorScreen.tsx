import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { TypingIndicator } from 'react-native-animation-catalog';
import { CustomHeader } from '../../components';
import type { NavProps } from '../../navigation/types';
import styles from './styles';

const TypingIndicatorScreen = () => {
  const navigation = useNavigation<NavProps>();
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState('');

  return (
    <View>
      <CustomHeader
        title="Typing Indicator"
        isBackEnabled={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => setText(value)}
          onChange={()=> {
            setIsTyping(true);
          }}
          onEndEditing={()=> {
            setIsTyping(false);
          }}
          value={text}
        />
        {isTyping && text !== '' && (
          <TypingIndicator
            dotRadius={10}
            dotAmplitude={3}
            dotSpacing={32}
            dotX={0}
            dotY={32}
            dotColor={'red'}
            dotSpeed={0.3}
          />
        )}
      </View>
    </View>
  );
};

export default TypingIndicatorScreen;
