import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Transaction from '../components/Transaction';
const {width,height} = Dimensions.get("window")


const MyCardScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.menuIcon} size={28} color="#979797" name="arrow-back-ios" />
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'row' ,justifyContent: 'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>My Card</Text>
          </View>
        </View>
          <View  style={{ 
              flexDirection:'row', 
              alignItems:'center',
              padding:15,
              justifyContent:'center' }}>  
            <Image 
            source={require('../../assets/cards/Card1.png')}
            style={{
              width:343, 
              height: 199,
            }}
            />
          </View>
          <View style={{ 
              flexDirection:'row', 
              alignItems:'center',
              padding:15,
              justifyContent:'center' }}>
              <Image 
              source={{uri:'https://i.ibb.co/7CKYfCv/Set-Card-Limit.png'}}
              style={{
              width:400,
              height:200
            }}
            />
          </View>
            <Transaction/>
    </SafeAreaView>
  )
}

export default MyCardScreen

const styles = StyleSheet.create({
  menuIcon: {
    padding: 2
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    margin: 5
  }
})