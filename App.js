import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signin from './src/screens/Sign/Signin';
import Reset from './src/screens/Reset/Reset';
import Createacc from './src/screens/Createaccount/Createacc'
import Login from './src/screens/Loginscreen/Login';
import MyHome from './src/screens/Homepage/Home'
import DrawerContent from './src/screens/Draw/DrawerContent'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Friends from './src/screens/Friend/Friends'
import Profile from './src/screens/Myprofile/Profile'
import Chat from './src/screens/Chatscreen/Chat'

const screens = [
  {
    key: 1,
    Image: require('./android/msg.png'),
    title: 'Private Messages',
    text: 'Communicate with your friends via private messages.',

  },
  {
    key: 2,
    Image: require('./android/camera.png'),
    title: 'Send Photos & Videos',
    text: 'Have fun with your friends by sending photos and videos to each other.',

  },
  {
    key: 3,
    Image: require('./android/bell.png'),
    title: 'Get Notified',
    text: 'Receive notifications when your friends are looking for you'
  }
]
function Intro() {
  const [home, setHome] = useState(false)
  const { navigate } = useNavigation();

  function renderscrens({ item }) {
    return (
      <View style={{ flex: 1, backgroundColor: '#3395FF' }}>
        <Image
          source={item.Image}
          style={{ width: 100, height: 100, top: 200, alignItems: 'center', marginLeft: 150 }}
        />
        <Text style={{ textAlign: 'center', top: 270, color: 'white', fontWeight: 'bold', fontSize: 23 }}>{item.title}</Text>
        <Text style={{ textAlign: 'center', top: 285, fontSize: 18, color: 'white' }}>{item.text}</Text>
      </View>
    )
  }

  if (home) {
    return <Text>Home</Text>
  } else {
    return (
      <AppIntroSlider
        renderItem={renderscrens}
        data={screens}
        onDone={() => navigate('Home screen')}
      />
    )
  }
}

const Stack = createStackNavigator();
function stack({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Intro" component={Intro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Home screen" component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen name="Create" component={Createacc}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ChatScreen" component={Chat}
        options={{
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon name="cog" size={27} color={'blue'} style={{ right: 10 }}
            />
          )
        }}
      />
      <Stack.Screen name="Signin" component={Signin}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Home" component={MyHome}
        options={{
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon name="bars" size={25} color="white" style={{ left: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
      <Stack.Screen name="My Profile" component={Profile}
        options={{
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon name="bars" size={25} color="white" style={{ left: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
      <Stack.Screen name="friends" component={Friends}
        options={{
          headerStyle:{
            backgroundColor:'black'
          },
          headerTintColor:'white',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon name="bars" size={25} color="white" style={{ left: 10 }}
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
      <Stack.Screen name="Reset" component={Reset}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent  {...props} />}>
        <Drawer.Screen name="stack screen" component={stack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name="home" size={25} style={{ focused, color, size }} />
            ),
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;