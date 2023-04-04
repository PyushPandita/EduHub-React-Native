import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const About = () => {

  const discription = "Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. Highly-skilled with 4 years in Web and app design, development and integration. Advanced knowledge of Web, Mobile and Native App Development. Logical and professional with excellent problem-solving skills. Dedicated Application Developer adept at creating new programs and solutions. Knowledgeable in React, React Native.";

  //Go to github
  const gotoGithub = () => {
    Linking.openURL("https://github.com/U1qui0rr4")
  };


  //Go to linkedIn
  const gotoLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/pyush-pandita-4a0567192/")
  };


  //Go to twitter
  const gotoTwitter = () => {
    Linking.openURL("https://twitter.com/panditaPyush")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoName}>Pyush Pandita (U1qui0rr4)</Text>
      <Text style={styles.infoDiscription}>I am a React and React Native Developer</Text>
    
      <View style={styles.infoImgContainer}> 
        <Image style={styles.infoImg} source={{uri: "https://i.pinimg.com/564x/2f/ed/5f/2fed5fc9f6c9a45dac2338cdb75d078f.jpg"}}/>
      </View>

      <View style={styles.infoAboutContainer}>
        <Text style={styles.infoAboutHeader}>About Me</Text>
        <Text style={styles.infoAbout}>{discription}</Text>
      </View>

      <Text style={styles.infoContact}>Reach me at</Text>

      <View style={styles.menuStyle}>
      <TouchableOpacity onPress={gotoGithub} style={styles.buttonStyle}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/3d-fluency/512/github.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={gotoLinkedIn} style={styles.buttonStyle}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/color/512/linkedin-circled.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={gotoTwitter} style={styles.buttonStyle}>
        <Image style={styles.img} source={{uri: "https://img.icons8.com/color/512/twitter-circled.png"}}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
},

  infoName: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,   
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  infoDiscription: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    textTransform: 'capitalize',
    color: '#7d7d7d',
    letterSpacing: 1,
  },

  infoImgContainer: {
    alignItems: 'center',
  }, 

  infoImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  infoAboutContainer: {
    backgroundColor: '#4c5dab',
    marginVertical: 30,
    padding: 20, 
    borderRadius: 20,
  },

  infoAboutHeader: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 24,
    color: '#eee',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },

  infoAbout: {
    fontSize: 20,
    color: '#eee',
    textAlign: 'left',
    letterSpacing: 0.8,
  },

  infoContact: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'capitalize',
    color: '#7d7d7d',
    fontWeight: 'bold',
  },

  menuStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'grey',
    padding: 10,
    marginHorizontal: 30,
  },

  img: {
    width: 60,
    height: 60,
  },
});

export default About;