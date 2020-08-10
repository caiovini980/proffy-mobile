import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses()
{
    const navigation = useNavigation();

    function handleNavigateBack()
    {
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <ImageBackground 
                resizeMode= 'contain' 
                source={giveClassesBgImg} 
                style={styles.content} 
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, primeiro você precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Certinho</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;