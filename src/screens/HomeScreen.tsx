import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
// import { NavigationContainer, useNavigation } from '@react-navigation/native'
import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import imageSelect from '../../assets/cars/searchImage'

type ItemData = {
  id: string
  price: number
  model: string
  brand: string
  transmission: string
  seats: number
}

type ItemProps = {
  item: ItemData
  onPress: () => void
  onPressSelect: () => void
  backgroundColor: string
}

const Item = ({ item, onPress, onPressSelect, backgroundColor }: ItemProps) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
    activeOpacity={0.7}
    underlayColor={'#eee'}
  >
    <View>
      <View
        id="Top part"
        style={{ flexDirection: 'row', justifyContent: 'center' }}
      >
        <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
          <Text style={styles.model}>{item.model}</Text>
          <Text style={{ fontSize: 24 }}>{item.brand}</Text>
        </View>

        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 22 }}>{item.transmission}</Text>
          <Text style={{ fontSize: 24 }}>
            <Text style={{ fontSize: 18 }}>Seats: </Text>
            {item.seats}
          </Text>
        </View>
      </View>

      <Image source={imageSelect(item.model)} style={styles.image} />

      <View id="Bottom part" style={{ flexDirection: 'row', marginTop: 5 }}>
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={{ fontSize: 28 }}>
            {/* <Text style={{fontSize: 20}}>From: </Text> */}
            {item.price}
            <Text style={{ fontSize: 22 }}> kr/day</Text>
          </Text>
        </View>

        <View
          id="Select button"
          style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableHighlight
            style={styles.button}
            delayPressOut={400}
            underlayColor="#434343"
            // onPress={() => setSelectedId(item.id)}
            onPress={onPressSelect}
          >
            <Text style={styles.buttontext}>Select</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  </TouchableHighlight>
)

export default function HomeScreen({ navigation }: any) {
  const route = useRoute<any>()
  const cities = route.params?.cities
  const selected = route.params?.selected

  const [selectedId, setSelectedId] = useState<string>()

  const [error, setError] = useState(false)
  const [carData, setCarData] = useState<ItemData[] | undefined>()

  useEffect(() => {
    axios
      .get(
        'https://my-json-server.typicode.com/MetaSoc/car-inc-database/' +
          cities[selected - 1].value
      )
      .then((result) => {
        //console.log("Got cars " + res.data)
        setCarData(result.data)
        //AsyncStorage.setItem("people", JSON.stringify(res.data))
        // .catch(error => console.log(error))
        setError(false)
      })
      .catch((result) => setError(true))
  }, [])

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('CarDetails', { item })}
        onPressSelect={() => navigation.navigate('Booking', { item })}
        backgroundColor={item.id === selectedId ? '#ddd' : '#fff'}
      />
    )
  }

  return (
    <FlatList
      style={styles.container}
      overScrollMode="never"
      data={carData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },

  model: {
    fontSize: 31,
    marginTop: -10,
  },

  image: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginTop: 5,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 18,
    width: '80%',
    height: 40,
  },

  buttontext: {
    color: '#fff',
    fontSize: 17,
    margin: 8,
  },
})
