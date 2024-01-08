import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function ConfirmationScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city
  // const userInformation = route.params?.userInformation

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Please check your booking information below:
      </Text>
      <Text />

      <View style={styles.information}>
        <Text style={styles.textStyle}>City: {city}</Text>
        <Text style={styles.textStyle}>
          Car: {item.brand} {item.model}
        </Text>
        <Text />
        <Text style={styles.textStyle}>First name: PLACEHOLDER</Text>
        <Text style={styles.textStyle}>Last name: PLACEHOLDER</Text>
        <Text style={styles.textStyle}>Email: PLACEHOLDER</Text>
        <Text style={styles.textStyle}>Return Date: PLACEHOLDER</Text>
      </View>

      <TouchableHighlight
        style={[
          styles.button,
          {
            marginTop: '8%',
            backgroundColor: '#fff',
          },
        ]}
        delayPressOut={400}
        underlayColor="#eee"
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.buttontext, { color: '#000' }]}>Edit</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[
          styles.button,
          {
            marginTop: '5%',
            marginBottom: '60%',
          },
        ]}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() =>
          navigation.navigate('Receipt' /* , { userInformation } */)
        }
      >
        <Text style={styles.buttontext}>Book</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
  },
  information: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: '5%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '50%',
    height: 45,
    elevation: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
