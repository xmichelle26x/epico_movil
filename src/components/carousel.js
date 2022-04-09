import React from 'react'
import { View, StyleSheet, Dimensions, Image } from "react-native"
// import RNFS from 'react-native-fs';

export const SLIDER_WIDTH = Dimensions.get('window').width + 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const CarouselCardItem = ({ item, index }) => {
  console.log(item.src);
  console.log(typeof item.src);
  console.log('test');
  // console.log(RNFS.readDir(RNFS.MainBundlePath))
  // RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  // .then((result) => {
  // console.log('GOT RESULT', result);
  // console.log(RNFS.DocumentDirectoryPath);
  return (
    <View style={styles.container} key={index}>
      <Image
        source={require('../../assets/carousel/carousel4.jpg')}
        // source={{uri: 'file://' + RNFS.DocumentDirectoryPath + item.src}}

        // source={ require(item.src) } 
        // source{{ uri: item.src}}
        style={styles.image}
      />
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    width: ITEM_WIDTH,
    borderRadius:7,
    elevation:8
  },
  image: {
    width: ITEM_WIDTH,
    height: 180,
    borderRadius:6, 
  }
})

export default CarouselCardItem