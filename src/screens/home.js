import React, { Component } from 'react';
import { Button, Image, Picker, StyleSheet, TextInput, View, Text } from 'react-native';
import colors from './styles/colors';
import api from '../services/api';

export default class Home extends Component {

  static navigation = this.props;

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

  state = {
    email: 'felipe.florentino01@gmail.com',
    erro: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handleSignInPress = async () => {
    if (this.state.email.length === 0) 
    {
      this.setState({ erro: 'Preencha o email para continuar!' }, () => false);
    } 
    else 
    {
      try 
      {
        const response = await JSON.stringify(api.post('/ifciencia2018/per/webservice/per_valida_email.php'), {
          email: this.state.email,
        });
        this.navigation.navigate('Atividades');
      } 
      catch (err) 
      {
        this.setState({ erro: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render(){
      return(
        <View style={styles.viewContainer}>
          <View style={styles.container}>
            <Image style={styles.image} source={require('./images/logo/logo.jpg')} /> 
          </View>
          <View style={styles.body}>
            <TextInput 
                style={styles.textinput} 
                placeholder="Email" 
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={this.handleEmailChange}
                autoCorrect={false}
                autoCapitalize="none"
            />
            
            <Picker style={styles.picker} selectedValue={this.state.evento} 
            onValueChange={(itemValue) => this.setState({evento: itemValue})} >
              <Picker.Item label='IFCiência' value='ifciencia2018' />
            </Picker>

            <Text style={styles.errorMessage}> {this.state.erro} </Text>

            <Button 
                title="Logar" 
                onPress={this.handleSignInPress}> </Button>
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
    errorMessage: {
      marginLeft: 10,
      fontSize: 15,
    }
  }
);