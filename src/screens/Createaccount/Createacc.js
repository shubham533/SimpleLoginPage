import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

function Create(){
  const {navigate}=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Text style={{fontSize:25,fontWeight:'bold',marginTop:30,marginLeft:30,color:'#3395FF'}}>Create new account</Text>
      <TextInput placeholder={"First Name"} placeholderTextColor="#474A4A" style={{borderWidth:1,borderColor:'#8EA2A3',borderRadius:30,paddingLeft:10,marginHorizontal:30,marginTop:60}}/>
      <TextInput placeholder={"Last Name"} placeholderTextColor="#474A4A" style={{borderWidth:1,borderColor:'#8EA2A3',borderRadius:30,paddingLeft:10,marginHorizontal:30,marginTop:20}}/>
      <TextInput placeholder={"E-mail Address"} placeholderTextColor="#474A4A" style={{borderWidth:1,borderColor:'#8EA2A3',borderRadius:30,paddingLeft:10,marginHorizontal:30,marginTop:20}}/>
      <TextInput placeholder={"Password"} placeholderTextColor="#474A4A" style={{borderWidth:1,borderColor:'#8EA2A3',borderRadius:30,paddingLeft:10,marginHorizontal:30,marginTop:20}}/>
      <TouchableOpacity onPress={()=>navigate('Home')}>
        <Text style={{borderWidth:1,backgroundColor:'#3395FF',borderColor:'#3395FF',color:'white',padding:15,marginHorizontal:50,borderRadius:30,marginTop:30,textAlign:'center'}}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{fontSize:20,color:'#3395FF',fontWeight:'bold',textAlign:'center',marginTop:20}}>OR</Text>
      <TouchableOpacity>
        <Text style={{color:'#3395FF',textAlign:'center',marginTop:20}}>Sign up with phone number</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Create;