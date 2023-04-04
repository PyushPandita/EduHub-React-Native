import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';

const Home = (props) => {

  const photo = "https://ies.ed.gov/ncee/edlabs/regions/central/images/0619-highschoolflex-large.jpg";
  const discription = "Unlock your potential with our innovative learning solutions. Our education startup is here to help you achieve your academic and career goals with personalized guidance and cutting-edge technology.";

  return (
    <View style={styles.parent}>
      <View style={[styles.imgContainer, {marginVertical: 50}]}>
        <Image style={styles.img} source={{uri: photo}}/>
      </View>

      <View style={styles.textHeaderContainer}>
        <Text style={[styles.textHeader, {letterSpacing: 1}]}>WELCOME TO</Text>
        <Text style={[styles.textHeader, {color: 'blue',letterSpacing: 3}]}>{props.channelName}</Text>
      </View>

      
        <Text style={styles.textInfo}>{discription}</Text>

      <View>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, {marginVertical: 20,}]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parent: {
      // alignItems: 'center',
      height: '100%',
      padding: 20,
    },

    imgContainer: {
      alignItems: 'center',
    },

    img: {
      width: 325,
      height: 225,
      borderRadius: 20,
    },

    textHeaderContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },

    textHeader: {
      fontSize: 30,
      // textTransform: 'uppercase',
      fontWeight: '600',
    },

    textInfo: {
      flex: 1,
      paddingHorizontal: 20,
      fontSize: 20,
      textTransform: 'capitalize',
      lineHeight: 28,
      color: '#5A5A5A',
      textAlign: 'left',
      paddingBottom: 50,
    },

    lineStyle: {
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: 'grey',
    }
});

export default Home
