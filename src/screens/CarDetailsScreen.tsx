import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function CarDetailsScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#434343"
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('Booking', { item })}
      >
        <Text style={styles.buttontext}>Select</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
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
