import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

export default function HomeScreen() {  
  const [searchText, setSearchText] = useState('')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />

        <TextInput
          maxLength={32}
          style={styles.textinput}
          value={searchText}
          onChangeText={setSearchText}
          textAlign='center'
          placeholder='Find a location'
          placeholderTextColor={'#aaa'}
          cursorColor={'#000'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttontext}>Search</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image:{
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  textinput: {
    color: '#000',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 100,
    height: 40,
    width: '75%'
  },

  button:{
    margin: 10,
    backgroundColor: '#000',
    borderRadius: 100,
    width: '75%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  buttontext:{
    fontSize: 14,
    margin: 10,
    color: '#fff'
  }
});