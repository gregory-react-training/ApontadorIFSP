import React from 'react';
import { View, Image, Button, Text, TextInput, StyleSheet } from 'react-native';
import RNPicker from 'react-native-picker-select';

const Page1 = ({ navigation }) => (
  <View style={styles.view}>
    <Text style={styles.title}>IFCIÊNCIA {new Date().getFullYear()}</Text>
	  <View>
      <Image style={styles.image} source={require('./images/logo.jpg')} /> 
    </View>
    <View>
      <TextInput style={styles.textinput} placeholder="Digite seu Email" />
      <RNPicker style={styles.picker} label='Eventos' onValueChange={(value) => console.log(value)} 
      items={[
        { label: 'IFCiência', value: 'IFCiência' },
        { label: 'Flisol', value: 'Flisol' },
      ]}/>
      <Button title="Logar" onPress={() => navigation.navigate('Eventos')} />
    </View>
  </View>
);

Page1.navigationOptions = {
  title: 'Login',
}

const styles = StyleSheet.create({
    view:{
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: 'white',
      height: 500
    },
    image:{
      height: 200,
      width: 200,
      marginBottom: 10,
    },
    textinput:{
      height: 40, 
      width: 300,
      borderColor: 'black', 
      borderWidth: 1,
      marginBottom: 15,
      backgroundColor: 'white',
      color: 'black',
    },
    title: {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    picker: {
      paddingBottom: 10,
    },

}
);

export default Page1;