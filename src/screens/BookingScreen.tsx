import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  return <View style={styles.container}>{<Text>{item.model}</Text>}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
})
