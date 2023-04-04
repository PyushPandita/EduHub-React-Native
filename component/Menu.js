import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation();

    //go to Course
    const gotoCourse = () => {
        return ( navigation.navigate('Course'));
    }

    //go to Student Enrollment
    const gotoEnrollment = () => {
        return ( navigation.navigate('Student Details'));
    }

    //go to About Me
    const gotoAbout = () => {
        return ( navigation.navigate('About'));
    }

    //go to Contact Us
    const gotoContact = () => {
        return ( navigation.navigate('Contact'));
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={gotoCourse} style={styles.buttonStyle}>
        {/* <Text>Course</Text> */}
        <Image style={styles.img} source={{uri: "https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-course-university-flaticons-flat-flat-icons-4.png"}}/>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={gotoEnrollment} style={styles.buttonStyle}>
        <Image style={styles.img}source={{uri: "https://img.icons8.com/color/512/user-group-skin-type-7.png"}}/>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={gotoAbout} style={styles.buttonStyle}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/plasticine/512/info-popup.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={gotoContact} style={styles.buttonStyle}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-telephone-communication-and-media-flatart-icons-flat-flatarticons.png"}}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

 img: {
    width: 60,
    height: 60,
  }
});

export default Menu;