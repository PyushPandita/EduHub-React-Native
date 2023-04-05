import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const ContactUs = ({navigation}) => {

  const [name, setName] = useState("");
  const [email, SetEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if(!name && !email && !mobile && !message) {
      Alert.alert("Enter all the fields");
    } else {
      Alert.alert(`Thank You ${name}. Your response has been recorded`);
      navigation.navigate("Home");
    }
  }
  
  return (
    <View style={styles.mainContainer}>

      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.discription}>You can reach us anytime via abc@gmail.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput style={styles.inputStyles} placeholder='Your Name'
          value={name}
          onChangeText={(userData) => setName(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your email</Text>
        <TextInput style={styles.inputStyles} placeholder='Your Email'
          value={email}
          onChangeText={(userData) => SetEmail(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Mobile number</Text>
        <TextInput style={styles.inputStyles} placeholder='Your Mobile No.'
          value={mobile}
          onChangeText={(userData) => setMobile(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>How can we help you?</Text>
        <TextInput style={styles.inputStyles} placeholder='Tell us about yourself'
          value={message}
          onChangeText={(userData) => setMessage(userData)}
          numberOfLines={6} multiline={true}
        />
      </View>

      <View style={styles.wapper}>
        <Checkbox 
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630EB' : undefined}
        />
        <Text style={[styles.wapperText, {fontWeight: agree ? '600' : '100'}]}>I have read and agreed with the T&C*</Text>
      </View>

      <TouchableOpacity onPress={submit} style={[styles.buttonStyle, {
        backgroundColor: agree ? '#4630EB' : 'grey'
      }]}
      disabled={!agree}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    // alignItems: 'center',
    height: '100%',
    paddingHorizontal: 30,
  },

  mainHeader: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    letterSpacing: 1,
    color: '#344055',
    fontWeight: '500',
  },

  discription: {
    fontSize: 22,
    paddingBottom: 15,
    color: '#7d7d7d',
    letterSpacing: 1,
  },

  inputContainer: {
    marginTop: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#7d7d7d',
    letterSpacing: 1,
  },

  inputStyles: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
  },

  wapper: {
    flexDirection: 'row',
    marginTop: 20,
  },

  wapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
    fontSize: 18,
    // fontWeight: 'bold',
    letterSpacing: 1,
  },

  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },

  buttonText: {
    color: '#eee',
    fontSize: 18,
    letterSpacing: 1,
  }
});

export default ContactUs;
