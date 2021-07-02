import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function Signin() {
    const {navigate}=useNavigation();
  return (
    <View style={{ flex: 1 , backgroundColor:'black' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#3395FF', marginTop: 10 }}>Sign In</Text>
      <TextInput style={styles.inp} placeholderTextColor="#474A4A" placeholder={"E-mail"} />
      <TextInput style={styles.inp5} placeholderTextColor="#474A4A" placeholder={"Password"} />
      <TouchableOpacity onPress={()=>navigate('Reset')}>
        <Text style={{color:'#3395FF',textAlign:'right',marginTop:8,marginRight:35}}>Forget password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.inp2}>Send code</Text>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 20,color:'white', fontWeight: 'bold', marginTop: 30 }}>OR</Text>
      <TouchableOpacity>
        <Text style={styles.inp3}>Login With Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.inp4}>Sign in with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign:'center',marginTop:20, fontSize:18,color:'#3395FF'}}>Sign in with phone number</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderColor:'#8EA2A3',
    marginHorizontal: 30,
    marginTop: 60,
    borderRadius: 30,
    textAlign: 'center'
  },
  inp5:{
    borderWidth: 1,
    borderColor:'#8EA2A3',
    marginHorizontal: 30,
    marginTop: 18,
    borderRadius: 30,
    textAlign: 'center'
  },
  inp2: {
    borderWidth: 1,
    color:'white',
    backgroundColor:'#3395FF',
    borderColor:'#3395FF',
    marginHorizontal: 50,
    marginTop: 30,
    padding: 12,
    borderRadius: 30,
    textAlign: 'center'
  },
  inp3:{
    borderWidth: 1,
    backgroundColor:'#3b5998',
    color:'white',
    borderColor:'#3b5998',
    marginHorizontal: 50,
    marginTop: 30,
    padding: 12,
    borderRadius: 30,
    textAlign: 'center'
  },
  inp4: {
    borderWidth: 1,
    marginHorizontal: 50,
    marginTop: 20,
    backgroundColor:'#3395FF',
    color:'white',
    padding: 12,
    borderRadius: 30,
    textAlign: 'center'
  }
})

export default Signin;