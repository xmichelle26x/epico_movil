import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import CarouselCards from '../components/carouselcards'
import MyTabBar from '../components/BottomMenu'


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Card>
        <Header>{i18n.t('website_title')}</Header>
        <Paragraph>
        {i18n.t('login.welcome')}
        </Paragraph>
        <SafeAreaView style={styles.carousel}>
            <CarouselCards />
        </SafeAreaView>
        <MyTabBar />
      </Card>
      <Logo />
    </Background>
  )
}

const styles = StyleSheet.create({
    carousel: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        alignItems: 'center', 
        marginBottom:350,
        padding:40,

    }
}) 