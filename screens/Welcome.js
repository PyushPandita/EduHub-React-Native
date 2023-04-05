import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{uri: "https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Online-Education-education-vectorslab-flat-vectorslab.png"}}/>
      </View>
      
      <Text style={styles.textStyle}>Arigato 👋</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    padding: 20,
    margin: 20,
  },

  logo: {
    width: 150,
    height: 150,
  },

  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    color: '#7d7d7d'
  }
});

export default Welcome
