import React, { useState } from 'react'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import { es, en } from '../i18n/supportedLanguages'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>{i18n.t('restore.title')}</Header>
      <TextInput
        label={i18n.t('restore.email')}
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description={i18n.t('restore.msg')}
      />
      <Button mode="contained" onPress={sendResetPasswordEmail} style={{ marginTop: 16 }}>
        {i18n.t('restore.send')}
      </Button>
    </Background>
  )
}