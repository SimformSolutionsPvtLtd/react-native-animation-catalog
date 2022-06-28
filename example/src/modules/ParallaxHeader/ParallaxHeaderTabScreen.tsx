import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ParallaxHeader, RenderDefaultProps } from 'react-native-animation-catalog';
import { FOLLOWERS, FOLLOWING, Strings } from '../../constants';
import type { NavProps } from '../../navigation/types';
import { Colors } from '../../theme';
import { Header, StickyHeader } from './ParallaxHeaderScreen';
import styles from './styles/styles';
import type { ListComponentProps } from './types';


const renderItems = ({ item }: RenderDefaultProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.containerTabsItem}>
        <Image style={styles.imageTabsItem} source={{uri: item.photo}} />
        <Text style={styles.nameTabsItem}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListComponent = ({ title }: ListComponentProps) => {
  return (
    <View style={styles.listComponentStyle}>
      <Text style={styles.listTextComponentStyle}>{title}</Text>
    </View>
  );
};

const ParallaxHeaderTabScreen = () => {
  const navigation = useNavigation<NavProps>();

  const tabsData = [
    {
      title: 'Tab 1',
      data: FOLLOWERS,
      renderTabContent: renderItems,
      tabOptions: {
        tabBarLabel: 'Followers',
      },
      renderFlatListProps: {
        ListHeaderComponent: () => (
          <ListComponent title={'Header of Component'} />
        ),
      },
    },
    {
      title: 'Following',
      data: FOLLOWING,
      renderTabContent: renderItems,
    },
    {
      title: 'About',
      data: [],
      renderTabContent: renderItems,
      renderFlatListProps: {
        ListEmptyComponent: () => (
          <ListComponent title={'No Data'} />
        ),
      },
    },
  ];

  return (
      <ParallaxHeader.WithTab
        renderHeader={() => (
          <Header
            navigation={navigation}
            title={Strings.parallaxHeaderWithTabs}
          />
        )}
        renderStickyHeader={() => (
          <StickyHeader
            navigation={navigation}
            title={Strings.parallaxHeaderWithTabs}
          />
        )}
        tabs={tabsData}
        screenOptions={{
          tabBarActiveTintColor: Colors.redVelvet,
          tabBarIndicatorStyle: {backgroundColor: Colors.redVelvet},
        }}
      />
  );
};

export default ParallaxHeaderTabScreen;
