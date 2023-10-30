import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableHighlight, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

type ItemData = {
  id: string
  price: number
  model: string
  brand: string
  transmission: string
  seats: number
  image: any
}

const DATA: ItemData[] = [
  {  
    id: '1',
    "price": 376.91,
    "brand": "Kia",
    "model": "Ceed",
    "transmission": "Automatic",
    "seats": 5,
    "image": require('../../assets/cars/kia-ceed.png')
  },
  {
    id: '2',
    price: 21.37,
    brand: "Volkswagen",
    model: "Passat",
    transmission: "Manual",
    seats: 5,
    image: require('../../assets/cars/volkswagen-passat.png')
  },
  {  
    id: '3',
    price: 846.05,
    brand: "Toyota",
    model: "Rav4",
    transmission: "Automatic",
    seats: 5,
    image: require('../../assets/cars/toyota-rav4.png')
  }
]


type ItemProps = {
  item: ItemData
  onPress: () => void
  backgroundColor: string
}

const Item = ({item, onPress, backgroundColor}: ItemProps) => (
  <TouchableHighlight onPress={onPress}
    style={[styles.item, {backgroundColor}]}
    activeOpacity={0.7}
    underlayColor={'#eee'}>
    <View>
      <Text style={styles.model}>{item.model}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Image source={item.image} style={styles.image} />
    </View>
  </TouchableHighlight>
)


export default function HomeScreen(){
  const [selectedId, setSelectedId] = useState<string>()
  
  const renderItem = ({item}: {item: ItemData}) => {
    return(
      <Item 
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={item.id === selectedId ? '#ddd' : '#fff'}
      />
    )
  }

  return(
    // <NavigationContainer independent={true}>
        <FlatList style={styles.container}
          overScrollMode='never'
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          
        />
    // </NavigationContainer>
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
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  model: {
    fontSize: 32,
    marginTop: -10,
  },

  brand: {
    fontSize: 24,
  },

  image:{
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginTop: 5,
  },
})