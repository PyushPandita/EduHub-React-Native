import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: "https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Online-Education-education-vectorslab-flat-vectorslab.png"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
    }
});

export default Welcome
