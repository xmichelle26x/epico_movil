import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import CarouselCards from '../carouselcards'

export default function Inicio({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Principal')
    }

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
            <SafeAreaView style={styles.carousel}> 
                <CarouselCards/>

            </SafeAreaView>
        </ImageBackground>
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
    },
    carousel: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    }

})