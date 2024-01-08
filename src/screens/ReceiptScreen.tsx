import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function ReceiptScreen({ navigation }: any) {
  const route = useRoute<any>()
  //   const user = route.params?.item

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 20,
        }}
      >
        Congratulations, PLACEHOLDER NAME!
      </Text>
      <Text />

      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.textStyle}>
          Your booking has been successfully registered.
        </Text>
        <Text />
        <Text style={styles.textStyle}>
          The confirmation has been sent to your email address:
          <Text style={{ fontWeight: '600' }}> PLACEHOLDER EMAIL</Text>
        </Text>
      </View>

      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() => navigation.navigate('CitySelection')}
      >
        <Text style={styles.buttontext}>Go back to Home</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    width: '80%',
    height: 45,
    elevation: 5,
    marginTop: '15%',
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    margin: 8,
  },
})
