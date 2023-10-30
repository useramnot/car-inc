import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import SelectionScreen from './screens/SelectionScreen'
import HomeScreen from './screens/HomeScreen'
import CarDetailsScreen from './screens/CarDetailsScreen'
import BookingScreen from './screens/BookingScreen'

import {selected} from './screens/SelectionScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Selection' component={SelectionScreen} 
          options={{headerShown: false}} />
        <Stack.Screen name='Home' component={HomeScreen} 
          options={{headerTitle: `${selected}`}} />
        <Stack.Screen name='CarDetails' component={CarDetailsScreen} />
        <Stack.Screen name='Booking' component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});