import { useRoute } from '@react-navigation/native'
import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import imageSelect from '../../assets/cars/searchImage'
// import DatePicker from 'react-native-date-picker'

export default function BookingScreen({ navigation }: any) {
  const route = useRoute<any>()
  const item = route.params?.item

  // @TODO
  //   const [firstName, setFirstName] = useState('')
  //   const [lastName, setLastName] = useState('')
  //   const [email, setEmail] = useState('')

  // const [birthDate, setBirthDate] = useState(new Date())

  let firstName = ''
  let setFirstName = (value: any) => {
    firstName = value
  }
  let lastName = ''
  let setLastName = (value: any) => {
    lastName = value
  }
  let birthDate = '' // TO BE DELETED
  let setBirthDate = (value: any) => {
    // console.log(Object.keys(value))
    // console.log(Object.values(value))
    // let result = Object.values(value.values)
    const regexddmmyyyy: RegExp =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[0-2])[- /.](19|20)\d\d$/
    // let valueStr = ''
    // valueStr = value.
    // Object.values()
    //console.log(value)

    if (regexddmmyyyy.test(value)) {
      birthDate = value
      console.log('valid DATE')
    } else {
      console.log('ERROR invalid date')
    }
  }
  let email = ''
  let setEmail = (value: any) => {
    email = value
  }

  let returnDate = ''
  let setReturnDate = (value: any) => {
    returnDate = value
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
              id="Email"
              onEndEditing={setEmail}
              //   value={email}
              placeholder="Email*"
            />
            <Input
              id="Email"
              onEndEditing={setEmail}
              //   value={email}
              placeholder="Return date*"
            />
          </View>
        </ScrollView>
      </View>
      <TouchableHighlight
        style={styles.button}
        delayPressOut={400}
        underlayColor="#444"
        onPress={() => navigation.navigate('Confirmation')}
      >
        <Text style={styles.buttontext}>Book</Text>
      </TouchableHighlight>
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
    //alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
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
    marginTop: 15,
    padding: 10,
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '40%',
    borderRadius: 25,
    height: 45,
    marginBottom: 5,
  },

  buttontext: {
    color: '#fff',
    fontSize: 16,
  },
})
