import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function ReceiptScreen({ navigation }: any) {
  const route = useRoute<any>()
  //   const item = route.params?.item
  //   const city = route.params?.city

  return (
    <View style={styles.container}>
      <Text>Congratulations, PLACEHOLDER NAME!</Text>
      <Text />
      <Text>Your booking has been successfully registered.</Text>
      <Text />
      <Text>
        The confirmation was sent to your email address: PLACEHOLDER EMAIL
      </Text>
      <Text />
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
