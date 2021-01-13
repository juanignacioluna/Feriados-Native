import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Text style={styles.titulo}>FERIADOS</Text>

          <Image
            style={styles.logo}
            source={require('../assets/images/calendario.png')}
          />

          <Text style={styles.subtitulo}>¿Alguna vez te pasó que no sabias que día iba a ser el próximo
          feriado? Bueno, esta aplicación te ayudará a saberlo muy rápidamente :)</Text>

          <TouchableOpacity
            style={styles.boton}
            onPress={() =>
              navigation.navigate('Feriados')
            }
          >
              <Text style={styles.botonTxt}>EMPEZAR</Text>
          </TouchableOpacity>


        </View>

      </ScrollView>

    </View>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({

  logo:{
    width: 200,
    height: 200,
  },

  botonTxt:{
    fontSize: 40,
  },

  boton:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 25,
    color: '#f2f2f2',
    textAlign: 'justify',
    marginTop:15,
    marginBottom:10,
  },

  titulo: {
    fontSize: 60,
    color: '#f2f2f2',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  contentContainer: {
    paddingTop: 30,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

});
