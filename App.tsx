import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import AppStack from './src/routes/AppStack';


export default function App(){
  return (
    <>
      <AppStack />
      <StatusBar translucent backgroundColor="transparent" />
    </>
  );
};

