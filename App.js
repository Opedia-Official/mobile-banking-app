import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components/Navtigator/MyDrawer';


export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
  );
}