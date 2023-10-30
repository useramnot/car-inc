import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableHighlight, Image} from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

// const navigation = useNavigation<any>()        // @TODO

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
    price: 376.91,
    brand: "Kia",
    model: "Ceed",
    transmission: "Automatic",
    seats: 5,
    image: require('../../assets/cars/kia-ceed.png')
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
  <TouchableHighlight 
    onPress={onPress}
    style={[styles.item, {backgroundColor}]}
    activeOpacity={0.7}
    underlayColor={'#eee'}>
    <View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flex: 0.5, alignItems: 'flex-start'}}>
          <Text style={styles.model}>{item.model}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
        </View>

        <View style={{flex: 0.5, alignItems: 'flex-end'}}>
          <Text style={styles.transmission}>{item.transmission}</Text>
          <Text style={styles.seats}>
            <Text style={{fontSize: 18}}>Seats: </Text>
          {item.seats}</Text>
        </View>
      </View>

      <Image source={item.image} style={styles.image} />

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.7, justifyContent: 'center'}}>
          <Text style={styles.price}>
            {/* <Text style={{fontSize: 20}}>From: </Text> */}
            {item.price}
            <Text style={{fontSize: 18}}> kr </Text>
          </Text>
        </View>

        <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight
            style={styles.button}
            // onPress={() => navigation.navigate.goBack()}
          >
            <Text style={styles.buttontext}>Select{/*See details*/}</Text>
          </TouchableHighlight>
        </View>
      </View>

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

  price: {
    fontSize: 24,
  },

  transmission: {
    fontSize: 24,
  },

  seats: {
    fontSize: 24,
  },

  image:{
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginTop: 5,
  },

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    // margin: 10,
    width: '90%',
    height: 40,
  },

  buttontext:{
    color: '#fff',
    fontSize: 15,
    margin: 10,
  },
})