import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/Navigation/Navigation"
export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      </NavigationContainer>
  );
}
