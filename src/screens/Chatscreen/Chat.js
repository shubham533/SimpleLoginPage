import React from 'react'
import { View, Text, Image, TextInput, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { styles } from 'styled-system';

function Chat() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={Styles.txtt}>Just did a drive test today with this beauty</Text>
                <Image style={Styles.img} source={require('../../../android/p1.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Image style={Styles.img2} source={require('../../../android/mycar.jpg')} />
                <Image style={{ height: 35, width: 35, borderRadius: 30, marginRight: 10, marginTop: 180, marginLeft: 10 }} source={require('../../../android/p1.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Image style={Styles.img} source={require('../../../android/p6.jpg')} />
                <Text style={Styles.txtt2}>Wow , that's gorgeous</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={Styles.txtt}>Wow, is that how the fake engine sounds like?</Text>
                <Image style={Styles.img} source={require('../../../android/p1.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Image style={Styles.img} source={require('../../../android/p6.jpg')} />
                <Text style={Styles.txtt2}>That sound </Text>
            </View>
            <View style={{ flexDirection: 'row',marginTop:40}}>
                <Icon name="camera" size={27} color={'blue'} style={{top:10}}/>
                <TextInput style={Styles.inpt} placeholderTextColor="#515251" placeholder="Start typing..."/>
                <Image style={{height:30, width:30,top:5,left:5}} source={require('../../../android/paper.png')} />
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    txtt: {
        color: 'white',
        backgroundColor: 'blue',
        marginLeft: 40,
        padding: 13,
        fontSize: 17,
        borderRadius: 10
    },
    img: {
        height: 35,
        width: 35,
        borderRadius: 30,
        marginRight: 10,
        marginTop: 30,
        marginLeft: 10
    },
    img2: {
        height: 220,
        width: 270,
        borderRadius: 20,
        marginLeft: 60
    },
    txtt2: {
        color: 'black',
        backgroundColor: '#bdbfbe',
        marginLeft: 5,
        top:10,
        padding: 7,
        height:50,
        fontSize: 17,
        borderRadius: 10
    },
    inpt:{
        borderRadius:20,
        backgroundColor:'#b9bdba',
        width:310,
        paddingLeft:20,
        height:35,
        marginLeft:10
    }
})
export default Chat;