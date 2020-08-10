import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

function Favourites()
{
    const [favourites, setFavourites] = useState([]);

    function loadFavourites()
    {
        AsyncStorage.getItem('favourites').then(response =>{
            if(response)
            {
                const favouritedTeachers = JSON.parse(response);

                setFavourites(favouritedTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavourites();
    })

    return(
        <ScrollView>
            <View style={styles.container}>
                <PageHeader title='Proffys disponíveis'></PageHeader>
                <ScrollView
                    style={styles.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 2
                    }}
                >

                {favourites.map((teacher: Teacher) => {
                    return(
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favourited={true}
                        />
                    )
                })}
                </ScrollView>
            </View>
        </ScrollView>
        
    );
}

export default Favourites;