# Parallax Header
---
`Parallax Header` component can be used to show Parallax Header with custom animations.

- Parallax Header component have two different variants: `<ParallaxHeader />` and `<ParallaxHeader.WithTab />`.

> Note: Make sure to wrap your root component / entry point with SafeAreaProvider

```jsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default const App = () => {
  return <SafeAreaProvider>{/* content */}</SafeAreaProvider>;
}
```
#### 🎬 Preview

---

|                  Parallax Header                  | Parallax Header (With-Tabs)                |
| :-----------------------------------------------: | :----------------------------------------- |
| ![alt_tag](/assets/ParallaxHeaderWithoutTabs.gif) | ![alt_tag](/assets/ParallaxHeaderTabs.gif) |

#### Default Usage

---

```jsx
import React from 'react';
import { ParallaxHeader } from 'react-native-animation-catalog';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ParallaxHeaderScreen = () => {
  return (
    <SafeAreaProvider>
      <ParallaxHeader />
    </SafeAreaProvider>
  )
};

export default ParallaxHeaderScreen;
```

### 1. ParallaxHeader

---

##### Usage
---
```jsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ParallaxHeader } from 'react-native-animation-catalog';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>Design Header</Text>
        <Text style={styles.description}>Let's Start</Text>
        <TouchableOpacity style={styles.followTouchableStyle}>
          <Text style={styles.textFollow}>follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StickyHeader = () => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.stickyHeaderStyle}>Design Header</Text>
    </View>
  );
};

const ParallaxHeaderScreen = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.screen}>
        <ParallaxHeader
          renderHeader={() => <Header />}
          renderStickyHeader={() => <StickyHeader />}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: 120,
  },
  headerViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 35,
    fontWeight: '500',
    color: '#FF5252',
  },
  stickyHeaderStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF5252',
  },
  description: {
    fontSize: 15,
    marginTop: 4,
  },
  followTouchableStyle: {
    backgroundColor: '#FF5252',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
  },
  textFollow: {
    color: 'white',
  },
  textStickyHeader: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default ParallaxHeaderScreen;
```

#### 🎬 Usage Preview
---
![alt tag](/assets/ParallaxHeaderSimple.gif)

#### Properties
---
| Props              | Default | Type      | Description                                        |
| :----------------- | :------ | :-------- | :------------------------------------------------- |
| renderHeader       | -       | function  | Render custom header for ParallaxHeader.        |
| renderStickyHeader | -       | function  | Render   custom sticky header for ParallaxHeader. |
| stickyHeadertitle  | -       | string    | Title of display in default sticky header.       |
| children           | -       | component | Render child component.           |

---

### 2. ParallaxHeader-WithTabs

---

- `Parallax Header` with tabs have tabs prop which is array that include with fix type of defining array.

> Note: Make sure to wrap your root component / entry point with NavigationContainer

```jsx
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default const App = () => {
  return <SafeAreaProvider><NavigationContainer>{/* content */}</NavigationContainer></SafeAreaProvider>;
}
```
##### defining array

```jsx
const array = [
  {
    title: string,
    data: array,
    renderTabContent: component,
    tabOptions: object,
    renderFlatListProps: object,
  },
];
```

#### Array field
---
| Field                               | Type      | Description                                                                                                                         |
| :---------------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| <strong>title\*</strong>            | string    | Tab name which is always unique.                                                                                                    |
| <strong>data\*</strong>             | array     | Array of object to display items in tab list.                                                                                       |
| <strong>renderTabContent\*</strong> | component | Renders tab item content in tab list.                                                                                               |
| tabOptions                          | object    | <a href="https://reactnavigation.org/docs/material-top-tab-navigator/#options">Tab options</a> which is use to customize your tabs. |
| renderFlatListProps                 | any       | <a href="https://reactnative.dev/docs/flatlist#props">FlatList</a> props.                                                           |

##### Usage
---
```jsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ParallaxHeader } from 'react-native-animation-catalog';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const FOLLOWING = [
  {
    name: 'Arrow Macwan',
    photo: 'https://avatars.dicebear.com/api/initials/:arrow_macwan.png',
  },
  {
    name: 'Brus Taylor',
    photo: 'https://avatars.dicebear.com/api/initials/:brus_taylor.png',
  },
];

const FOLLOWERS = [
  {
    name: 'Nemi Crispor',
    photo: 'https://avatars.dicebear.com/api/initials/:nemi_crispor.png',
  },
  {
    name: 'John Millar',
    photo: 'https://avatars.dicebear.com/api/initials/:john_millar.png',
  },
  {
    name: 'Addy Brock',
    photo: 'https://avatars.dicebear.com/api/initials/:addy_brock.png',
  },
  {
    name: 'Samuel Johnson',
    photo: 'https://avatars.dicebear.com/api/initials/:samuel_johnson.png',
  },
  {
    name: 'Olivia Millar',
    photo: 'https://avatars.dicebear.com/api/initials/:olivia_millar.png',
  },
  {
    name: 'Jassica Wintage',
    photo: 'https://avatars.dicebear.com/api/initials/:jassica_wintage.png',
  },
  {
    name: 'Zedyy Williams',
    photo: 'https://avatars.dicebear.com/api/initials/:zeddy_williams.png',
  },
  {
    name: 'Jack Jones',
    photo: 'https://avatars.dicebear.com/api/initials/:jack_jones.png',
  },
  {
    name: 'Thenos',
    photo: 'https://avatars.dicebear.com/api/initials/:thenos.png',
  },
  {
    name: 'Chars Carlie',
    photo: 'https://avatars.dicebear.com/api/initials/:chars_carlie.png',
  },
  {
    name: 'Arrow Macwan',
    photo: 'https://avatars.dicebear.com/api/initials/:arrow_macwan.png',
  },
  {
    name: 'Brus Taylor',
    photo: 'https://avatars.dicebear.com/api/initials/:brus_taylor.png',
  },
  {
    name: 'Ricky Jackson',
    photo: 'https://avatars.dicebear.com/api/initials/:ricky_jackson.png',
  },
  {
    name: 'Wrons Wyen',
    photo: 'https://avatars.dicebear.com/api/initials/:wrons_wyen.png',
  },
];

interface RenderItemsProps {
  item: {
    photo: string,
    name: string,
  };
}

interface RenderListComponent {
  title: string;
}

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>Design Header</Text>
        <Text style={styles.description}>Let's Start</Text>
        <TouchableOpacity style={styles.followTouchableStyle}>
          <Text style={styles.textFollow}>follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StickyHeader = () => {
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.stickyHeaderStyle}>Design Header</Text>
    </View>
  );
};

const renderItems = ({ item }: RenderItemsProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.containerTabsItem}>
        <Image style={styles.imageTabsItem} source={{ uri: item.photo }} />
        <Text style={styles.nameTabsItem}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListComponent = ({ title }: RenderListComponent) => {
  return (
    <View style={styles.listComponentStyle}>
      <Text style={styles.listTextComponentStyle}>{title}</Text>
    </View>
  );
};

const ParallaxHeaderScreen = () => {
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
        ListEmptyComponent: () => <ListComponent title={'No Data'} />,
      },
    },
  ];

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.screen}>
          <ParallaxHeader.WithTab
            renderHeader={() => <Header />}
            renderStickyHeader={() => <StickyHeader />}
            tabs={tabsData}
            screenOptions={{
              tabBarActiveTintColor: '#FF5252',
              tabBarIndicatorStyle: { backgroundColor: '#FF5252' },
            }}
          />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    height: 120,
  },
  headerViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 35,
    fontWeight: '500',
    color: '#FF5252',
  },
  stickyHeaderStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FF5252',
  },
  description: {
    fontSize: 15,
    marginTop: 4,
  },
  followTouchableStyle: {
    backgroundColor: '#FF5252',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
  },
  textFollow: {
    color: 'white',
  },
  textStickyHeader: {
    fontSize: 20,
    fontWeight: '700',
  },
  containerTabsItem: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  imageTabsItem: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  nameTabsItem: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '500',
  },
  listComponentStyle: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  listTextComponentStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ParallaxHeaderScreen;
```

#### 🎬 Usage Preview
---
![alt tag](/assets/ParallaxHeaderWithTabs.gif)

#### Properties

| Props              | Default    | Type                            | Description                                                                                                                                                     |
| :----------------- | :--------- | :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderHeader       | -          | function                        | Render custom header for ParallaxHeader.                                                                                                                     |
| renderStickyHeader | -          | function                        | Render custom sticky header for ParallaxHeader.                                                                                                              |
| tabs               | -          | array                           | Array for render tabs and includes with their view and list style.                                                                                              |
| screenOptions      | -          | MaterialTopTabNavigationOptions | Default <a href="https://reactnavigation.org/docs/material-top-tab-navigator/#options">options</a> to use for the screens in the navigator.                     |
| onTabChange        | -          | function                        | A callback function which can be returns an active index.                                                                                                       |
| backBehavior       |  | string                          | <a href="https://reactnavigation.org/docs/material-top-tab-navigator/#props">Back Behavior</a> are `firstRoute`, `initialRoute`, `order`, `history` and `none`. |
| tabBarPosition     |         | string                          | <a href="https://reactnavigation.org/docs/material-top-tab-navigator/#props">Position</a> of the tab bar in the tab view. Values are `top` and `bottom`         |
| initialRouteName   | -          | string                          | The name of the route to render on first load of the navigator.                                                                                                 |

#### 🎬 Preview Example

---

[Parallax Header](/example/src/modules/ParallaxHeader/ParallaxHeaderScreen.tsx)

[ParallaxHeader-WithTabs](/example/src/modules/ParallaxHeader/ParallaxHeaderTabScreen.tsx)
