import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableHighlight, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

type ItemData = {
  id: string
  model: string
  brand: string
  image: any
}

const DATA: ItemData[] = [
  {
    id: '1',
    brand: 'Volkswagen',
    model: 'Passat',
    image: require('../../assets/cars/volkswagen-passat.jpg')
  },
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
    height: 160,
    resizeMode: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
})