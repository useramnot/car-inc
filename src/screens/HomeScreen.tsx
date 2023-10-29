import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: '1',
    title: 'Mitsubishi',
  },
  {
    id: '2',
    title: 'Toyota',
  },
  {
    id: '3',
    title: 'Volkswagen',
  },
  {
    id: '4',
    title: 'Mazda',
  },
  {
    id: '5',
    title: 'Audi',
  },
  {
    id: '6',
    title: 'BMW',
  },
  {
    id: '7',
    title: 'Polonez',
  },
  {
    id: '8',
    title: 'Supra',
  },
  {
    id: '9',
    title: 'Tata',
  },
  {
    id: '10',
    title: 'Chuj',
  },
];


type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
};

// const Item = ({title,}: ItemProps) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Item = ({item, onPress, backgroundColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);


export default function HomeScreen(){
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'purple' : '#fff';

    return(
      <Item 
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return(
    // <NavigationContainer independent={true}>
        <FlatList style={styles.container}
          overScrollMode='never'
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
    // </NavigationContainer>
    );
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

  title: {
    fontSize: 32,
  },
});