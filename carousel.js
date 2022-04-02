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
    borderRadius: 8,
    width: ITEM_WIDTH,
    padding: 2, 
    elevation:6
  },
  image: {
    width: 287,
    height: 180,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem