import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function CarDetailsScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={{ marginLeft: 10, fontSize: 20 }}>
          Additional information:
        </Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.textStyle}>Smoke Free</Text>
          <Text style={styles.textStyle}>{item.seats} seats</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.textStyle}>DOOR door</Text>
          <Text style={styles.textStyle}>{item.transmission}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.textStyle}>SOMETHING</Text>
          <Text style={styles.textStyle}>SOMETHING</Text>
        </View>
        <Text style={styles.textStyle}>A/C OR NOT</Text>
      </View>
      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#434343"
        onPress={() => navigation.navigate('Booking', { item })}
      >
        <Text style={styles.buttontext}>Selectado</Text>
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
  details: {
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '50%',
    height: 45,
    marginBottom: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
