import { StyleSheet, View, Text, FlatList, Image, Linking } from 'react-native'
import React from 'react'
import CourseAPI from '../api/CourseAPI';
import CourseDetails from '../component/CourseDetails';

const Course = () => {



  const courseDetails = ({item}) => {


    return (
      <View style={[styles.mainContainer, {paddingHorizontal: 20}]}>
      
        <View style={styles.courseContainer}>
          
          <View style={styles.imgContainer}>
            <Image style={styles.cardImg} source={item.Image} resizeMode='contain'/>
          </View>

          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDiscription}>{item.discription}</Text>

          <CourseDetails onPress={() => {
            Linking.openURL(item.courseUrl)
          }}/>
        </View>

      </View>
    );
  }

  return (
      <FlatList data={CourseAPI} keyExtractor={(item) => item.id}
        renderItem={courseDetails}
        showsVerticalScrollIndicator={false}
      />
  )
}

const styles = StyleSheet.create({
  courseContainer: {
    padding: 30,
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 30,
    shadowColor: 'grey',
    textAlign: 'center',
  },

  cardImg: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },

  cardTitle: {
    textAlign: 'center',
    fontSize: 26,
    paddingBottom: 10,
    textTransform: 'uppercase',
    color: '#344055',
    fontWeight: '600',
    letterSpacing: 1,
  },

  cardDiscription: {
    textAlign: 'left',
    fontSize: 20,
    paddingBottom: 20,
  },
});

export default Course;
