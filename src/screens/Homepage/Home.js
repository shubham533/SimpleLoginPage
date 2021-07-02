import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function MyHome() {
  const {navigate}=useNavigation();
  const [data, setData] = useState(
    [
      {
        title: 'Rahul',
        text: 'hey! i love this great app  . 17:17 .',
        Image: require('../../../android/p1.jpg'),
      },
      {
        title: 'Sahil',
        text: 'i,m so glad we found this app  . 17:00.',
        Image: require('../../../android/p2.jpg'),
      },
      {
        title: 'Ram Singh',
        text: ' i Know , right!  . 12:17.',
        Image: require('../../../android/p3.jpg'),
      },
      {
        title: 'Raghav',
        text: 'hey ! cristiana  . 09:33.',
        Image: require('../../../android/p4.jpg'),
      },
      {
        title: 'Pardeep',
        text: 'we had so much fun last night  . 04:10.',
        Image: require('../../../android/p5.jpg'),
      },
      {
        title: 'Prince',
        text: 'Let me create a group  . 13:12',
        Image: require('../../../android/p6.jpg'),
      },
      {
        title: 'Satnam',
        text: 'hey! i love this great app  . 17:17',
        Image: require('../../../android/p7.jpg'),
      },
      {
        title: 'Amanpreet',
        text: 'i Know , right!  . 12:17',
        Image: require('../../../android/nature.jpg'),
      },
      {
        title: 'Riya Singh',
        text: 'hey ! cristiana  . 09:33.',
        Image: require('../../../android/man.jpg'),
      },
      {
        title: 'Arvind',
        text: 'we had so much fun last night  . 04:10.',
        Image: require('../../../android/girl.jpg'),
      }
    ])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.inp}>
        <Icon name="search" style={{ marginTop: 10 }} color={'#242424'} />
        <TextInput placeholderTextColor="#242424" placeholder={"search for friends"} />
      </View>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'column', marginVertical: 15 }}>
            <Image style={styles.img} source={item.Image} />
            <Text style={styles.title2}>{item.title}</Text>
          </View>
        )}
      />
      < FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Image style={styles.img} source={item.Image} />
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity onPress={()=>navigate('ChatScreen')}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.txt}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    marginTop: 8,
    color: 'white'
  },
  txt: {
    marginHorizontal: 10,
    marginTop: 8,
    color: '#757575'
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 8,
    borderRadius: 30
  },
  title2: {
    marginHorizontal: 8,
    marginTop: 8,
    color: 'white',
    marginBottom:10
  },
  inp: {
    backgroundColor: '#5c5c5c',
    marginHorizontal: 12,
    marginTop: 10,
    height: 35,
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: 'row'
  }


})
export default MyHome;