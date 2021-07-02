import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { padding } from 'styled-system'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


function Friends() {
  const [red, setRed] = useState(
    [
      {
        title: 'Rahul',
        text: 'Accept',
        Image: require('../../../android/p1.jpg'),
      },
      {
        title: 'Sahil',
        text: 'Accept',
        Image: require('../../../android/p2.jpg'),
      },
      {
        title: 'Ram Singh',
        text: 'Accept',
        Image: require('../../../android/p3.jpg'),
      },
      {
        title: 'Raghav',
        text: 'Accept',
        Image: require('../../../android/p4.jpg'),
      },
      {
        title: 'Pardeep',
        text: 'Accept',
        Image: require('../../../android/p5.jpg'),
      },
      {
        title: 'Prince',
        text: 'Accept',
        Image: require('../../../android/p6.jpg'),
      },
      {
        title: 'Satnam',
        text: 'Accept',
        Image: require('../../../android/p7.jpg'),
      },
      {
        title: 'Amanpreet',
        text: 'Accept',
        Image: require('../../../android/nature.jpg'),
      },
      {
        title: 'Riya Singh',
        text: 'Accept',
        Image: require('../../../android/man.jpg'),
      },
      {
        title: 'Arvind',
        text: 'Accept',
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
        data={red}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <Image style={styles.img} source={item.Image} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity>
                <Text style={styles.title2} >{item.text}</Text>
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
    marginHorizontal: 8,
    marginTop: 15,
    color: 'white'
  },
  img: {
    height: 60,
    width: 60,
    marginHorizontal: 8,
    borderRadius: 30
  },
  title2: {
    color: 'black',
    backgroundColor: '#5c5c5c',
    padding: 5,
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft:230,
    marginTop:-15
  },
  inp: {
    backgroundColor: '#5c5c5c',
    marginHorizontal: 12,
    marginTop: 10,
    height: 35,
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: 'row',
  }

})

export default Friends;