import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'


function Login() {
    const {navigate}=useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor:'black'}}>
      <Image style={styles.img} source={require('../../../android/cam.png')} />
      <Text style={{ fontSize: 28, marginTop: 35, fontWeight: 'bold', color: '#3395FF', textAlign: 'center' }}>Instachatty</Text>
      <Text style={{ fontSize: 15, marginHorizontal: 40, textAlign: 'center', marginTop: 20, color: '#3395FF' }}>Send texts, photos, videos, and audio messages to your close friends.</Text>
      <TouchableOpacity onPress={()=>navigate('Signin')}>
        <Text style={styles.btn}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigate('Create')} >
        <Text style={styles.btn2}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 130,
    marginTop: 100,
    marginLeft: 125
  },
  btn: {
    color: 'white',
    marginTop:50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#3395FF',
    backgroundColor:'#3395FF',
    padding: 17,
    marginHorizontal: 60,
    borderRadius: 40,
  },
  btn2:{
    color: '#3395FF',
    marginTop:18,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#3395FF',
    padding: 17,
    marginHorizontal: 60,
    borderRadius: 40,
  }
})
export default Login;