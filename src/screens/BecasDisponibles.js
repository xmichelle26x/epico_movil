import React, { useState, Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet, Image, SafeAreaView } from "react-native";
import { theme } from '../core/theme'
import Becas from '../components/Becas'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'

i18n.fallbacks = true
i18n.translations = { es, en }
i18n.locale = Localization.locale

const IMAGES = {
  image1: require('../../assets/scholarships/back.jpg'),
  image2: require('../../assets/scholarships/data.jpg'),
  image3: require('../../assets/scholarships/front.jpg')
};
const { height, width } = Dimensions.get('window')

/*
const BecasDisponibles = props => {
  const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 }
  ]);
  return (
    <View
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled
    >
      <ScrollView>
        { images.map(item => (
          <View key={item.id}>
            <Image
                key={item.id}
                style={{ width: '90%', height: '90%' }}
                resizeMode="contain"
                source={item.image}
              />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
*/

class BecasDisponibles extends Component {
  render() {
    return (
      <ScrollView scrollEventThrottle={16}>
        <View style={{backgroundColor: theme.colors.secondary }}>
          <View>
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            >
              <Becas imageUri={require('../../assets/scholarships/back.jpg')}
                  name={i18n.t('scholarships.front')}
              />
              <Becas imageUri={require('../../assets/scholarships/data.jpg')}
                  name={i18n.t('scholarships.back')}
              />
              <Becas imageUri={require('../../assets/scholarships/front.jpg')}
                  name={i18n.t('scholarships.ds')}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default BecasDisponibles;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
