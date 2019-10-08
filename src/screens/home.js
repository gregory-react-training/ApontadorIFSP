import React, { Component } from 'react';
import { Button, Image, Picker, StyleSheet, TextInput, View } from 'react-native';
import colors from './styles/colors';
import api from '../services/api';

class Home extends Component {

  state = {
    email: '',
    evento: '',
  };

  static navigationOptions = {
      title: "Apontador de Presença",
      headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.titleFontColor,
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
  }

  logar() {
    api.listagem(this.state.email);
  }

  render(){
      const { navigation } = this.props;
      return(
        <View style={styles.viewContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={require('./images/logo/logo.jpg')} /> 
          </View>
          <View style={styles.body}>
            <TextInput style={styles.textinput} placeholder="Email" keyboardType="email-address"
            onValueChange={(itemValue) => this.setState({email: itemValue})} />
            <Picker style={styles.picker} selectedValue={this.state.evento} 
            onValueChange={(itemValue) => this.setState({evento: itemValue})} >
              <Picker.Item label='IFCiência' value='ifciencia2018' />
            </Picker>
            <Button title="Logar" onPress={() => navigation.navigate('Atividades')} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewContainer: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container:{
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.borderSecondaryColor,
      borderRadius: 5,
      padding: 10,
    },
    image: {
      height: 200,
      width: 200,
    },
    body: {
      flex: 1, 
      alignItems: 'center',
    },
    picker: {
      height: 20,
      width: 250,
      transform: [{scaleX: 1.25}, {scaleY: 1.25}],
      marginTop: 25,
      marginBottom: 50,
    },
    textinput: {
      height: 50, 
      width: 325,
      borderColor: 'black', 
      borderWidth: 1,
      marginTop: 15,
      marginBottom: 15,
      fontSize: 15,
    },
  }
);

export default Home;

{/*const mapStateToProps = (state) => {
  const {} = state
  return {}
};

export default connect(mapStateToProps)(ScreenHome); */}