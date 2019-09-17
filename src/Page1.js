import React from 'react';
import { View, Image, Button, Text, TextInput, StyleSheet } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={styles.view}>
    <Text style={styles.title}>IFCIÊNCIA {new Date().getFullYear()}</Text>
	  <View>
        <Image style={styles.image} source={require('./images/logo.jpg')} /> 
    </View>
    <TextInput style={styles.textinput} placeholder="Digite seu Email" />
    <Button title="Logar" onPress={() => navigation.navigate('Eventos')} />
  </View>
);

Page1.navigationOptions = {
  title: 'Login',
}

const styles = StyleSheet.create({
    view:{
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: '#7CFC00',
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
    }
}
);

export default Page1;