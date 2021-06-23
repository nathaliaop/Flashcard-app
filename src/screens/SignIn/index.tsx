import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from './styles';
import Flashcard from '../../assets/flashcard.png'
import { Button } from '../../components/Button'

export function SignIn(){

    return(
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />

            <Image source={Flashcard} style={styles.image}/>

            <Text style={styles.title}>Flash</Text>

            <Text style={styles.subtitle}>
                Crie flashcards com perguntas {'\n'}
                e memorize qualquer coisa
            </Text>
            <Button
                title='Entrar com o Google'
                activeOpacity={0.7}
            />
        </View>
    )
}