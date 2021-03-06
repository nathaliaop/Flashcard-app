import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import GoogleImg from '../../assets/google.png';
import {styles} from './styles';

type Props = TouchableOpacityProps & {
    title: string, //title?: string mostra que o título é opcional
}

export function Button({title, ...rest} : Props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={GoogleImg} style={styles.icon} />
            </View>
            <Text style ={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}