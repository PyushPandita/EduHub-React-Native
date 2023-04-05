import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CourseDetails = (props) => {

  return (
    <View style={[styles.buttonContainer, {alignItems: 'center',}]}>
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Course Details</Text>
        </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#809fff",
        paddingHorizontal: 25,
        paddingVertical: 15,    
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },

      buttonText: {
        fontSize: 18,
        color: '#eee',
        fontWeight: '400',
        letterSpacing: 1,
        textTransform: 'capitalize',
      },
});

export default CourseDetails