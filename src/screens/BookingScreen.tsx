import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import imageSelect from '../../assets/cars/searchImage'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item

  // @TODO
  //   const [firstName, setFirstName] = useState('')
  //   const [lastName, setLastName] = useState('')
  //   const [email, setEmail] = useState('')

  let firstName = ''
  let setFirstName = (value: any) => {
    firstName = value
  }
  let lastName = ''
  let setLastName = (value: any) => {
    lastName = value
  }
  let email = ''
  let setEmail = (value: any) => {
    email = value
  }

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
        <Text style={{ fontSize: 26, marginHorizontal: 10 }}>
          {item.price} kr
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
            <Input
              id="First name"
              onEndEditing={setFirstName}
              //   value={firstName}
              placeholder="First name*"
            />
            <Input
              id="Last name"
              onEndEditing={setLastName}
              //   value={lastName}
              placeholder="Last name*"
            />
            <Input
              id="E-mail"
              onEndEditing={setEmail}
              //   value={email}
              placeholder="E-mail*"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  carOverview: {
    flex: 0.18,
    // alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
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
    // justifyContent: 'center',
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
    marginTop: 15,
    padding: 10,
  },
})
