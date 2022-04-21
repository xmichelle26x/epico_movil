import React from 'react'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet} from 'react-native'
import { theme } from '../core/theme'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header style={styles.title}>{i18n.t('website_title')}</Header>
      <Paragraph style={styles.subtitle}>{i18n.t('mainpage_title')}</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        {i18n.t('home.login')}
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        {i18n.t('login.register')}
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.white,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
  }
})