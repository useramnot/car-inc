import React from 'react'
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'

export default function SelectionScreen({ navigation }: any) {
  const [searchText, setSearchText] = useState()

  const [selected, setSelected] = useState(0)
  const [cities, setCities] = useState<any>([])

  const [error, setError] = useState(false)

  // const [disableSearch, setDisableSearch] = useState(true)
  let [disableSearch] = useState(false)

  let [buttonBG] = useState('#000')

  useEffect(() => {
    //Get Values from database
    axios
      .get(
        'https://my-json-server.typicode.com/MetaSoc/car-inc-database/cities'
      )
      .then((response) => {
        // Store Values in Temporary Array
        let citiesArray = response.data.map((item: any) => {
          return { key: item.id, value: item.name }
        })

        //Set Data Variable
        setCities(citiesArray)
        setError(false)
      })
      .catch((result) => setError(true))
  }, [])

  if (selected === 0) {
    // () => setDisableSearch(false)
    disableSearch = true
    buttonBG = '#434343'
  }

  // console.log(cities[selected-1].value)

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <View style={{ width: '75%' }}>
        <SelectList
          data={cities}
          boxStyles={styles.boxStyles}
          dropdownStyles={styles.dropdownStyles}
          placeholder="Pick a city"
          searchPlaceholder="Pick a city"
          setSelected={setSelected}
        />
      </View>

      <TouchableHighlight
        onPress={() => navigation.navigate('Home', { cities, selected })}
        style={[styles.button, { backgroundColor: buttonBG }]}
        activeOpacity={0.7}
        underlayColor="#434343"
        delayPressOut={400}
        disabled={disableSearch}
      >
        <Text style={styles.buttontext}>Search</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: '50%',
  },

  boxStyles: {
    justifyContent: 'center',
    padding: 50,
    borderColor: '#000',
    borderRadius: 20,
    borderWidth: 2,
  },

  dropdownStyles: {
    // @TODO something
  },

  button: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    margin: 10,
    width: '75%',
    height: 48,
  },

  buttontext: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
})
