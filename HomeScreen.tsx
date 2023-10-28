import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>

        <View>
            <Text style={styles.title}>car rent</Text>
            <StatusBar style="auto" />
        </View>

        <TextInput
        value={searchText}
        onChangeText={setSearchText}
        textAlign='center'
        placeholder='Pick a location...'
        placeholderTextColor={"#d0d0d0"}
        cursorColor={"#f0f0f0"}
        style={styles.textinput}//{{borderWidth: 1, padding: 10}}
        />

        <TouchableOpacity
        style={styles.button}
        //TODO color to be decided
        onPress={() => Alert.alert('Search button pressed')}>
            <Text style={styles.buttontext}>Search</Text>
        </TouchableOpacity>
       
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    color: "#f0f0f0",
    padding: 40,
    fontSize: 30,
    // TODO fontFamily: 'Forte',
  },

  textinput: {
    color: "#f0f0f0",
    padding: 15,
    borderWidth: 2,
    borderColor: "#d0d0d0",
    borderRadius: 10,
    width: "80%",
  },

  button:{
    margin: 10,
    backgroundColor: "#333333",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#d0d0d0",
    width: "80%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttontext:{
    fontSize: 15,
    margin: 10,
    color: "#f0f0f0",
    // alignSelf: "center",
  }


});
