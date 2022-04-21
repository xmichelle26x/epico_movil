import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
    color: theme.colors.primary,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
})
