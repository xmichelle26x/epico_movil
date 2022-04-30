import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import { screens } from '../RouteItems'

const Stack = createStackNavigator()
// const { width } = Dimensions.get('window');
// const IMAGES = {
//   image1: require('../../../assets/carousel/carousel1.jpg'),
//   image2: require('../../../assets/carousel/carousel2.jpg'),
//   image3: require('../../../assets/carousel/carousel4.jpg'),
// };
// const [images, setImages] = useState([
//   { id: '1', image: IMAGES.image1 },
//   { id: '2', image: IMAGES.image2 },
//   { id: '3', image: IMAGES.image3 }
// ]);

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {/* <SafeAreaView style={styles.carousel}>
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
    </SafeAreaView> */}
  </View>
)

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={screens.Home} component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 40,
  }
})

// import React, { createRef, useState } from 'react'
// import { SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, View, Text } from 'react-native'
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();
// const { width } = Dimensions.get('window');
// const IMAGES = {
//   image1: require('../../assets/carousel/carousel1.jpg'),
//   image2: require('../../assets/carousel/carousel2.jpg'),
//   image3: require('../../assets/carousel/carousel4.jpg'),
// };

// export default function Dashboard({ navigation }) {
//   const [images, setImages] = useState([
//     { id: '1', image: IMAGES.image1 },
//     { id: '2', image: IMAGES.image2 },
//     { id: '3', image: IMAGES.image3 }
//   ]);
//   return (
//     <Background>
//         <Paragraph>
//           {i18n.t('login.welcome')}
//         </Paragraph>
//         <SafeAreaView style={styles.carousel}>
//           <Carousel
//             layout="default"
//             data={images}
//             sliderWidth={width}
//             itemWidth={width}
//             autoplay
//             renderItem={({ item, index }) => (
//               <Image
//                 key={index}
//                 style={{ width: '90%', height: '90%' }}
//                 resizeMode="contain"
//                 source={item.image}
//               />
//             )}
//           />
//         </SafeAreaView>
//       <Logo />
//     </Background>
//   )
// }

// carousel: {
//   alignItems: 'center',
//   justifyContent: 'center',
//   alignItems: 'center', 
//   marginLeft: 40,
// }