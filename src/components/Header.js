import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.headerTitle} {...props} />
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    paddingVertical: 40,
  },
  headerTitle: {
      color: theme.colors.secondary,
      fontSize: 18,
      fontWeight: 'bold',
  },
  headerTitleWrapper: {flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

})
