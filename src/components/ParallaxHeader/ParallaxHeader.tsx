import React, { memo } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { Header, StickyHeader } from './components';
import { data, FOLLOWERS, Strings } from './constants';
import { useParallaxHeader } from './hooks';
import styles from './styles';
import type { ParallaxHeaderProps, RenderCardsProps } from './types';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const RenderCards = ({ value, index }: RenderCardsProps) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <View style={styles.card}>
        <View style={styles.profileContainerStyle}>
          <Image style={styles.image} source={{ uri: value.photo }} />
          <Text style={styles.name}>{FOLLOWERS[2].name}</Text>
        </View>
        <View style={styles.descriptionStyle}>
          {value.image ? (
            <ImageBackground
              source={value.image}
              borderRadius={10}
              style={styles.imageBackgroundStyle}
              resizeMode={'stretch'}
            />
          ) : null}
          <Text
            numberOfLines={5}
            ellipsizeMode={'tail'}
            style={styles.textDescriptionStyle}
          >
            {Strings.LOREM}
          </Text>
          <View style={styles.hashtagTextViewStyle}>
            <TouchableOpacity>
              <Text style={styles.hashtagTextStyle}>#React-Native</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.hashtagTextStyle}>#Android</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.hashtagTextStyle}>#IOS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const ParallaxHeader = ({
  renderHeader,
  renderStickyHeader,
  stickyHeadertitle,
  children,
}: Partial<ParallaxHeaderProps>) => {
  const {
    scrollRef,
    handleHeaderLayout,
    scrollHandler,
    sharedProps,
    headerContainerStyle,
    collapsedOverlayStyle,
  } = useParallaxHeader();

  return (
    <View style={styles.container}>
      <Animated.View onLayout={handleHeaderLayout} style={headerContainerStyle}>
        {!renderHeader ? <Header /> : <Header>{renderHeader()}</Header>}
      </Animated.View>
      <Animated.View style={collapsedOverlayStyle}>
        {!renderStickyHeader ? (
          <StickyHeader name={stickyHeadertitle} />
        ) : (
          <StickyHeader>{renderStickyHeader()}</StickyHeader>
        )}
      </Animated.View>
      <AnimatedScrollView
        ref={scrollRef}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        {...sharedProps}
      >
        {!children
          ? data.map((value, _index) => (
              <RenderCards value={value} index={_index} />
            ))
          : children}
      </AnimatedScrollView>
    </View>
  );
};

export default memo(ParallaxHeader);
