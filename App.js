import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import { HomeScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    Regular: require('./assets/fonts/DMSans-Regular.ttf'),
    Medium: require('./assets/fonts/DMSans-Medium.ttf'),
    Bold: require('./assets/fonts/DMSans-Bold.ttf'),
  });

  return fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}