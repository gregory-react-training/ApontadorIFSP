import React from 'react';
import { View, Image, Button, Text, TextInput, StyleSheet } from 'react-native';
import RNPicker from 'react-native-picker-select';

const Home = ({ navigation }) => (
  <View style={styles.view}>
    <View>
      <Text style={styles.title}> IFCIÊNCIA {new Date().getFullYear()}</Text>
      <Image style={styles.image} source={require('./images/logo/logo.jpg')} /> 
    </View>
    <View style={styles.body}>
      <TextInput style={styles.textinput} placeholder="Digite seu Email" keyboardType="email-address"/>
      <RNPicker onValueChange={(value) => alert(value)} 
        items={[
          { label: 'IFCiência', value: 'IFCiência' },
          { label: 'Flisol', value: 'Flisol' },
		  { label: 'Feira de Sustentabilidade', value: 'Feira de Sustentabilidade' },
        ]}/>
    </View>
    <View style={styles.body}>
      <Button title="Logar" onPress={() => navigation.navigate('Atividades')} />
    </View>
  </View>
);

Home.navigationOptions = {
  title: 'Apontador de Presença',
}

const styles = StyleSheet.create({
    view:{
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: 'white',
      height: 750,
    },
    body:{
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: 'white',
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
      backgroundColor: 'white',
      color: 'black',
      marginTop: 15,
      marginBottom: 15,
      fontSize: 15,
    },
    title: {
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
}
);

export default Home;