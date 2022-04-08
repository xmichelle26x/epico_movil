import React from 'react'
import { View, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 50
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        // source={require('../epico_movil/assets/carousel/carousel4.jpg' )}
        source={{ uri: item.imgUrl }} 
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