import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Balancecard from '../components/Balancecard';
import QuickAccess from '../components/QuickAccess';
import SendMoney from '../components/SendMoney';
import Transaction from '../components/Transaction';


function Home(props) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{marginHorizontal:10}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo style={styles.menuIcon} size={28} color="#979797" name="list" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("HistoryTransScreen")}>
          <Ionicons style={styles.menuIcon} name="notifications-outline" size={28} color="#979797" />
        </TouchableOpacity>

      </View>
      <View style={{ position: "absolute", marginTop: 60 }}>
        <Balancecard />
        <QuickAccess />
        <View>
          <SendMoney />
        </View>
        <View>
          <Transaction />
        </View>
      </View>
    </SafeAreaView>
  )
}

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

export default Home;