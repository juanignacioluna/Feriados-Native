import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function LinksScreen() {

  const [ano, setAno] = useState("2020");
  const [mes, setMes] = useState(1);

  const [feriados, setFeriados] = useState([]);




  useEffect(() => {

      fetch("http://nolaborables.com.ar/api/v2/feriados/2020")
      .then(response => response.json())
      .then((responseJson)=> {

        setFeriados(responseJson)

      })
  
  }, []);


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View style={styles.selects}> 

          <Picker
            selectedValue={ano}
            style={styles.anos}
            onValueChange={(itemValue, itemIndex) => {

                    setAno(itemValue)

                    setFeriados([])

                    fetch("http://nolaborables.com.ar/api/v2/feriados/" + itemValue)
                    .then(response => response.json())
                    .then((responseJson)=> {

                      setFeriados(responseJson)

                    })

            }}
          
          >

            <Picker.Item label="2011" value="2011" />
            <Picker.Item label="2012" value="2012" />
            <Picker.Item label="2013" value="2013" />
            <Picker.Item label="2014" value="2014" />
            <Picker.Item label="2015" value="2015" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2021" value="2021" />
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
            <Picker.Item label="2026" value="2026" />
            <Picker.Item label="2027" value="2027" />
            <Picker.Item label="2028" value="2028" />
            <Picker.Item label="2029" value="2029" />
            <Picker.Item label="2030" value="2030" />


          </Picker>

          <Picker
            selectedValue={mes.toString()}
            style={styles.meses}
            onValueChange={(itemValue, itemIndex) => setMes(parseInt(itemValue))}
          >

            <Picker.Item label="Enero" value="1" />
            <Picker.Item label="Febrero" value="2" />
            <Picker.Item label="Marzo" value="3" />
            <Picker.Item label="Abril" value="4" />
            <Picker.Item label="Mayo" value="5" />
            <Picker.Item label="Junio" value="6" />
            <Picker.Item label="Julio" value="7" />
            <Picker.Item label="Agosto" value="8" />
            <Picker.Item label="Septiembre" value="9" />
            <Picker.Item label="Octubre" value="10" />
            <Picker.Item label="Noviembre" value="11" />
            <Picker.Item label="Diciembre" value="12" />

          </Picker>

      </View>


      <View style={styles.feriadosDiv}>


          {
              feriados.map(function(feriado, index){ 

                  if(feriado.mes==mes){

                      return(

                          <View style={styles.feriado} key={index}>


                              <View style={styles.feriadoTXTDiv}>


                                  <Text style={styles.motivo}>Día {feriado.dia}</Text>

                                  <Text style={styles.motivo}>{feriado.motivo}</Text>


                              </View>

                          </View>

                      );

                  }

              
              })
          }


      </View>



    </ScrollView>
  );


}




const styles = StyleSheet.create({


  feriadoTXTDiv:{

    display: 'flex',

    flexDirection: 'row',

  },


  feriadosDiv:{

    display: 'flex',

    flexDirection: 'column',

    marginTop: 20,

    marginLeft: 20,

    marginRight: 20,

  },


  feriado:{

    backgroundColor: '#878787',

    marginBottom: 20,

    height: 120,

    display: 'flex',

    flexDirection: 'row',

    alignItems: 'center',

    borderRadius: 20,

  },

  motivo:{

    color: 'white',

    width: '50%',

    textAlign: 'center',

    fontSize: 17,  

  },

  selects:{

    display: 'flex',

    flexDirection: 'row',

    justifyContent: 'center',

  },

  meses: {

    height: 80,

    width: '45%',

    backgroundColor: 'white',

    marginLeft: 20

  },

  anos: {

    height: 80,

    width: '45%',

    backgroundColor: 'white',


  },

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  contentContainer: {

    paddingTop: 15,

  },

});
