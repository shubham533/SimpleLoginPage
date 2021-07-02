import React from 'react'
import { View, Text, TextInput, StyleSheet,Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/core'

function Profile() {
  const {navigate}=useNavigation();
  return (
    <View style={{flex:1, backgroundColor: 'black' }}>
      <View style={{ flexDirection: 'column', alignItems: 'center'}}>
        <Image style={{ height: 130, borderRadius: 100, marginTop: 30, width: 130 }} source={require('../../../android/p2.jpg')} />
        <Icon name="camera"  color="#6e9191" size={35} style={{marginLeft:80 ,marginTop:-36}}/>
        <Text style={{ color: 'white', fontSize: 18, marginTop: 50 }}>cristiana Kardaisian</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:50 , marginLeft:20}}>
      <Icon name="user-circle"  color={'white'} size={20} />
      <TouchableOpacity>
        <Text style={{color:'white' , marginLeft:30}}>Account Details</Text>
      </TouchableOpacity>
      <Image style={{height:16 ,width:16, marginLeft:190}} source={require('../../../android/right.png')}/>
      </View>
      <View style={{flexDirection:'row', marginTop:40 , marginLeft:20}}>
      <Icon name="cog"  color={'white'} size={20} />
      <TouchableOpacity>
        <Text style={{color:'white' , marginLeft:30}}>Settings</Text>
      </TouchableOpacity>
      <Image style={{height:16 ,width:16, marginLeft:240}} source={require('../../../android/right.png')}/>
      </View>
      <View style={{flexDirection:'row', marginTop:40 , marginLeft:20}}>
      <Image style={{height:18 ,width:18}} source={require('../../../android/telephone.png')}/>
      <TouchableOpacity>
        <Text style={{color:'white' , marginLeft:30}}>Contact Us</Text>
      </TouchableOpacity>
      <Image style={{height:16 ,width:16, marginLeft:220}} source={require('../../../android/right.png')}/>
      </View>
      <TouchableOpacity onPress={()=>navigate('Intro')}>
        <Text style={styles.bt}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
bt:{
  color: 'white',
    marginTop:30,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#808080',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
}
})
export default Profile;