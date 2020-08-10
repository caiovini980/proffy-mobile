import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

Ionicons.loadFont();

function StudyTabs()
{
    return(
        <Navigator
            tabBarOptions={{
                style: 
                {
                    elevation: 0,
                    height: 64
                },

                tabStyle:
                {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },

                iconStyle:
                {
                    flex: 0,
                    width: 20,
                    height: 20
                },

                labelStyle:
                {
                    fontFamily: 'Archivo Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },

                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen
                name='TeacherList' 
                component={TeacherList} 
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel-outline" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
            <Screen 
                name='Favourites' 
                component={Favourites} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart-outline" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    ) 
}

export default StudyTabs;