import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

function DrawerContent({ ...props }) {
    return (
        <View style={{ flex: 1 , justifyContent:'center',marginTop:200,marginLeft:40}}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home Page"
                    onPress={() => { props.navigation.navigate('Home') }}
                />
                   <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => { props.navigation.navigate('My Profile') }}
                />
                  <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="users"
                            color={color}
                            size={20}
                        />
                    )}
                    label="Friends"
                    onPress={() => { props.navigation.navigate('friends') }}
                />
                  <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="search"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Search"
                    onPress={() => { props.navigation.navigate('Create') }}
                />
                  <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="power-off"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Logout"
                    onPress={() => { props.navigation.navigate('Intro') }}
                />
            </DrawerContentScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
})

export default DrawerContent;