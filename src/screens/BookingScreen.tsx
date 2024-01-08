import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import imageSelect from '../searchImage'
import DatePicker, {
  getToday,
  getFormatedDate,
} from 'react-native-modern-datepicker'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function nameApproved(name: string): boolean {
    const naming: RegExp = /^[a-zA-Z]+$/
    return naming.test(name)
  }

  function emailApproved(email: string): boolean {
    const regexMail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    return regexMail.test(email)
  }

  function inputsApproved(): boolean {
    return (
      nameApproved(firstName) && nameApproved(lastName) && emailApproved(email)
    )
  }

  const today = new Date()

  const startDate = getFormatedDate(today)
  //let test = today.setDate(today.getDate())

  // const startDate = getFormatedDate(
  //   today.setDate(today.getDate() + 1),
  //   // today,
  //   'YYYY/MM/DD'
  // )

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(/*today.toDateString*/ '01/01/2024')
  //let [disableNext] = useState(true)
  let [buttonBG] = useState('#000')

  // if (inputsApproved()) {
  //   disableNext = false
  //   buttonBG = '#434343'
  // }

  function handleOnPress() {
    setOpen(!open)
    console.log(open)
  }

  return (
    <View style={styles.container}>
      <View style={styles.carOverview}>
        <Image source={imageSelect(item.model)} style={styles.image} />
        <Text style={{ fontSize: 22, marginHorizontal: 6 }}>
          {item.price}
          <Text style={{ fontSize: 15 }}> kr/day</Text>
        </Text>
      </View>

      <View style={styles.information}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}
          overScrollMode="never"
        >
          <View /* style={{ alignSelf: 'center' }} */>
            <Text id="Your information" style={styles.header}>
              Your information
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(newText) => setFirstName(newText)}
              placeholder="First name*"
            />
            <Text style={styles.inputError}></Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(newText) => setLastName(newText)}
              placeholder="Last name*"
            />
            <Text style={styles.inputError}></Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(newText) => setEmail(newText)}
              placeholder="Email*"
            />
            <Text style={styles.inputError}></Text>
            <TextInput
              style={styles.textInput}
              onPressIn={handleOnPress}
              placeholder="Return date*"
            />
            <Modal animationType="slide" transparent={true} visible={open}>
              <View style={styles.calendarScreen}>
                <View style={styles.calendar}>
                  <DatePicker
                    mode="calendar"
                    minimumDate={startDate}
                    selected={date}
                    onDateChange={
                      (propDate) => setDate(propDate) /*handleChange*/
                    }
                  />
                  <TouchableHighlight onPressIn={handleOnPress}>
                    <Text>Close</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <Text style={styles.inputError}></Text>
          </View>
        </ScrollView>
      </View>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: buttonBG }]}
        delayPressOut={400}
        activeOpacity={0.7}
        underlayColor="#434343"
        onPress={() => {
          if (inputsApproved()) {
            navigation.navigate('Confirmation', {
              item,
              city,
              firstName,
              lastName,
              email,
            })
          }
        }}
        //disabled={disableNext}
      >
        <Text style={styles.buttontext}>Next</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },

  carOverview: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '55%',
    resizeMode: 'contain',
  },

  information: {
    flex: 1,
    // alignSelf: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    // flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
  },

  header: {
    fontSize: 28,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
  },

  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 3,
    marginHorizontal: 10,
    marginTop: 5,
    padding: 10,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '50%',
    borderRadius: 25,
    height: 45,
    marginBottom: '10%',
    elevation: 5,
  },

  buttontext: {
    color: '#fff',
    fontSize: 16,
  },

  inputError: {
    marginHorizontal: 10,
    color: 'red',
  },

  calendarScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 12,
  },

  calendar: {
    margin: 20,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 5,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
})
