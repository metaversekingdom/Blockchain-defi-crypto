import React, { FC, ReactNode, useState } from 'react';

import { Box } from 'native-base';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  NavigationState,
  TabView as RNTabView,
  SceneRendererProps,
  TabBar,
  Route as TabViewRoute,
} from 'react-native-tab-view';

import { useThemeValue } from '../Provider/hooks';

type State = NavigationState<TabViewRoute>;

export type Props = {
  autoWidth?: boolean;
  paddingX?: number;
  onIndexChange?: (index: number) => void;
  routes: TabViewRoute[];
  renderScene: (
    props: SceneRendererProps & {
      route: TabViewRoute;
    },
  ) => ReactNode;
};

// const generationRoutes = (customRoutes: TabViewRoute[]) => {
//   const routes = [];
//   for (let index = 0; index < customRoutes.length; index += 1) {
//     const route = customRoutes[index];
//     routes.push({ key: route.key, title: route.title });
//   }
//   return routes;
// };

// const generationSceneMap = (customRoutes: TabViewRoute[]) => {
//   const sceneMap = Object.create;
//   for (let index = 0; index < customRoutes.length; index += 1) {
//     const route = customRoutes[index];
//     sceneMap[route.key] = route.view;
//   }
//   return sceneMap;
// };

const TabView: FC<Props> = ({
  onIndexChange,
  routes,
  renderScene,
  autoWidth = false,
  paddingX = 0,
}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [myRoutes] = useState(routes);
  const tabWidth = (layout.width - paddingX * 2) / myRoutes.length;
  const bgColor = useThemeValue('background-default');
  const dividerColor = useThemeValue('border-subdued');
  const indicatorColor = useThemeValue('action-primary-default');
  const activeColor = useThemeValue('text-default');
  const inactiveColor = useThemeValue('text-subdued');

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State },
  ) => {
    const tabbarHeight = 54;

    const styles = StyleSheet.create({
      tabbar: {
        backgroundColor: bgColor,
        width: layout.width,
        height: tabbarHeight,
      },
      indicator: {
        backgroundColor: indicatorColor,
        height: 2,
      },
      indicatorContainer: {
        backgroundColor: dividerColor,
        height: 1,
        top: tabbarHeight - 2,
        left: paddingX,
        right: paddingX,
        width: layout.width - paddingX * 2,
      },
      tabStyle: {
        width: autoWidth ? 'auto' : tabWidth,
        left: paddingX,
        right: paddingX,
      },
      label: {
        fontFamily: 'PlusJakartaSans-Medium',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
      },
    });

    return (
      <Box>
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={styles.indicator}
          indicatorContainerStyle={styles.indicatorContainer}
          style={styles.tabbar}
          tabStyle={styles.tabStyle}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          labelStyle={styles.label}
          getLabelText={({ route }) => route.title}
          getAccessibilityLabel={({ route }) => route.title}
          // renderLabel={renderLabel}
          // renderTabBarItem={renderTabBarItem}
        />
      </Box>
    );
  };
  return (
    <RNTabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={(changeIndex: number) => {
        console.log(`changeIndex${changeIndex}`);

        setIndex(changeIndex);
        if (onIndexChange) {
          onIndexChange(changeIndex);
        }
      }}
      initialLayout={{ width: layout.width }}
      style={{
        backgroundColor: bgColor,
      }}
    />
  );
};
export { SceneMap } from 'react-native-tab-view';
export default TabView;
