import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHistory from './SubScreen/AllHistory';
import Income from './SubScreen/Income';
import Outcome from './SubScreen/Outcome';

const Tab = createMaterialTopTabNavigator();

const HistoryTransScreen = (props) => {
  const {navigation} = props;
  return (
    <>
      <View>
        <Text>Hello</Text>
      </View>
        <Tab.Navigator>
          <Tab.Screen name="All" component={AllHistory} />
          <Tab.Screen name="Income" component={Income} />
          <Tab.Screen name="Outcome" component={Outcome} />
        </Tab.Navigator>
    </>
  )
}

export default HistoryTransScreen;

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  }
})