import React from 'react'

import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'


export default function Inicio({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Principal')
    }

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../assets/background.png')}  style={styles.image}>
            
            </ImageBackground>

            

            

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        paddingHorizontal: 30,
        fontSize: 30,
        color: '#003366'
    },

   
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%'
    }
})