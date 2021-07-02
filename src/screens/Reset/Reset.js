import React from 'react'
import{View , Text , TextInput,TouchableOpacity} from 'react-native'

function Reset(){
  return(
    <View style={{flex:1,backgroundColor:'black'}}>
      <Text style={{fontSize:25,fontWeight:'bold',marginTop:30,marginLeft:30,color:'#3395FF'}}>Reset Password</Text>
      <TextInput placeholderTextColor="#474A4A" placeholder={"E-mail"} style={{borderWidth:1,borderColor:'#8EA2A3',borderRadius:30,paddingLeft:10,marginHorizontal:30,marginTop:60}}/>
      <TouchableOpacity>
        <Text style={{borderWidth:1,backgroundColor:'#3395FF',borderColor:'#3395FF',color:'white',padding:15,marginHorizontal:50,borderRadius:30,marginTop:30,textAlign:'center'}}>Send Link</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Reset;