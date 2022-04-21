import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Dimensions, Image, View, Text } from 'react-native'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const IMAGES = {
  image1: require('../../assets/carousel/carousel1.jpg'),
  image2: require('../../assets/carousel/carousel2.jpg'),
  image3: require('../../assets/carousel/carousel4.jpg')
};

export default function Dashboard({ navigation }) {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 }
  ]);
  return (
    <Background>
        <Paragraph>
          {i18n.t('login.welcome')}
        </Paragraph>
        <SafeAreaView style={styles.carousel}>
          <Carousel
            layout="default"
            data={images}
            sliderWidth={width}
            itemWidth={width}
            autoplay
            renderItem={({ item, index }) => (
              <Image
                key={index}
                style={{ width: '90%', height: '90%' }}
                resizeMode="contain"
                source={item.image}
              />
            )}
          />
        </SafeAreaView>
      <Logo />
    </Background>
  )
}

const styles = StyleSheet.create({
    carousel: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 40,
    }
}) 