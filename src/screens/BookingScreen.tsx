import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import imageSelect from '../searchImage'
import DatePicker, {
  getToday,
  getFormateDate,
} from 'react-native-modern-datepicker'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item
  const city = route.params?.city

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [returnDate, setReturnDate] = useState('')

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
  // let birthDate = ''
  // let setBirthDate = (value: any) => {
  //   // console.log(Object.keys(value))
  //   // console.log(Object.values(value))
  //   // let result = Object.values(value.values)
  //   const regexddmmyyyy: RegExp =
  //     /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[0-2])[- /.](19|20)\d\d$/  DON'T DELETE THAT YET
  //   // let valueStr = ''
  //   // valueStr = value.
  //   // Object.values()
  //   //console.log(value)

  type InputProps = {
    id: string
    onEndEditing: any
    // value: string
    placeholder: string
  }

  const Input = (props: InputProps) => {
    return (
      <TextInput
        id={props.id}
        onEndEditing={props.onEndEditing}
        // value={props.value}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={'#666'}
        enablesReturnKeyAutomatically={true}
        // autoComplete="name"
      />
    )
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
              onChangeText={(newText) => setReturnDate(newText)}
              placeholder="Return date*"
            />
            <Text style={styles.inputError}></Text>
          </View>
        </ScrollView>
      </View>
      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() => navigation.navigate('Confirmation', { item, city })}
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
})
