import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function ConfirmationScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city

  return (
    <View style={styles.container}>
      <Text>City: {city}</Text>
      <Text>
        Car: {item.brand} {item.model}
      </Text>
      <Text />
      <Text>First name: PLACEHOLDER</Text>
      <Text>Last name: PLACEHOLDER</Text>
      <Text>Email: PLACEHOLDER</Text>
      <Text>Return Date: PLACEHOLDER</Text>
      <Text />
      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() => navigation.navigate('Confirmation', { item, city })}
      >
        <Text style={styles.buttontext}>Book</Text>
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
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '40%',
    height: 45,
    elevation: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
