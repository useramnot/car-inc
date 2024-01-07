import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'

import BookingScreen from './screens/BookingScreen'
import CarDetailsScreen from './screens/CarDetailsScreen'
import CitySelectionScreen from './screens/CitySelectionScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

export default function App({ route }: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Selection"
          component={CitySelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    elevation: 10,
  },
  headerShadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
})
