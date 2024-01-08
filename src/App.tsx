import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'

import CitySelectionScreen from './screens/CitySelectionScreen'
import CarSelectionScreen from './screens/CarSelectionScreen'
import BookingScreen from './screens/BookingScreen'
import CarDetailsScreen from './screens/CarDetailsScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import ReceiptScreen from './screens/ReceiptScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CitySelection"
          component={CitySelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CarSelection"
          component={CarSelectionScreen}
          options={({ route }: any) => ({
            title: route.params.cities[route.params.selected - 1].value,
            headerStyle: { shadowColor: '#000' },
            cardStyle: { backgroundColor: '#fff' },
          })}
        />
        <Stack.Screen
          name="CarDetails"
          component={CarDetailsScreen}
          options={({ route }: any) => ({
            title: route.params.item.brand + ' ' + route.params.item.model,
            headerStyle: { shadowColor: '#000' },
          })}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={() => ({
            headerStyle: { shadowColor: '#000' },
          })}
        />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Receipt" component={ReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#000',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // shadow: {
  //   shadowColor: '#000',
  //   elevation: 10,
  // },
  // headerShadow: {
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowColor: '#000',
  //   shadowRadius: 1,
  //   shadowOpacity: 0.5,
  // },
})
