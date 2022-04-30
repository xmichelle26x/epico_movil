import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from '../navigation/DrawerNavigator'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'

i18n.fallbacks = true
i18n.translations = { es, en }
i18n.locale = Localization.locale
const navigationRef = createRef()
const nav = () => navigationRef.current

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
          <NavigationContainer ref={navigationRef} independent={true}>
              <DrawerNavigator nav={nav} />
          </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})