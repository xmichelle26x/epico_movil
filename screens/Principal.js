import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import CarouselCards from '../carouselcards'

export default function Inicio({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Principal')
    }

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
            <Text style={styles.title}>Sistema de Gestión de Becas EPICO</Text>
            <SafeAreaView style={styles.carousel}>
                <CarouselCards />
                <Text style={styles.parrafo}>Desde ÉPICO seguimos desarrollando más programas de becas e iniciativas para potenciar el talento
                    digital y brindar nuevas y mejores oportunidades a los guayaquileños. 
                Queremos seguir contribuyendo a construir un Guayaquil digital.</Text>

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
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 30,
        color: '#003366',
        marginTop:50,
        padding:20
        
    },
    image: {
        flex: 1,

    },
    carousel: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom:350,
        padding:40,
        
    },
    parrafo: {
        marginTop: 0, 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'justify',

    }

})