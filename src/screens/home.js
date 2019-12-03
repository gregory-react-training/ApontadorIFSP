import React, {Component} from 'react';
import {
  Button,
  Image,
  Picker,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import colors from './styles/colors';
import api from '../services/api';
import RNFS from 'react-native-fs';
import '../config/DevToolsConfig';

export default class Home extends Component {
  state = {
    email: '',
    erro: '',
    eventos: [''],
    eventoSelecionado: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: 'allytori01@gmail.com',
      eventos: [' '],
      eventoSelecionado: ' ',
    };
  }

  static navigationOptions = {
    title: 'Apontador de Presença',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.titleFontColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handleEventoChange = evento => {
    this.setState({eventoSelecionado: evento});
  };

  handleSignInPress = async () => {
    const { navigation } = this.props;
    if (this.state.email.length === 0) {
      this.setState({ erro: 'Preencha o email para continuar!' }, () => false);
    } 
    else {
      try {
        const response = await api.post('/per_valida_email.php', 
        { 
          email: this.state.email 
        }); 
          if (response.data != "Usuário Inválido.") {
            navigation.navigate('Atividades')
          }
          else {
            this.setState({ erro: 'Usuário Inválido.' });
          }
      } 
      catch (err) {
        console.log(err);
        this.setState({ erro: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  carregaEventos = async () => {
    //Para teste -> Ao invés de escrever o arquivo, pegar do WS
    RNFS.writeFile(
      RNFS.DocumentDirectoryPath + '/teste.txt',
      'evento1;evento2;evento3;',
      'utf8',
    );
    await RNFS.readFile(
      RNFS.DocumentDirectoryPath + '/teste.txt',
      'utf8',
    ).then(data => this.setaEventosState(data));
  };

  setaEventosState = data => {
    var eventosCarregados = data
      .split(';')
      .filter(evento => evento != null && evento.trim(''));
    console.log(eventosCarregados);
    this.setState({
      eventos: eventosCarregados,
      eventoSelecionado: eventosCarregados[0],
    });
  };

  componentDidMount() {
    this.carregaEventos();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.viewContainer}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('./images/logo/logo.jpg')}
          />
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            placeholder="Email"
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
          />

          <Picker
            style={styles.picker}
            selectedValue={this.state.eventoSelecionado}
            onValueChange={itemValue => this.handleEventoChange(itemValue)}>
            {this.state.eventos.map((evento, index) => {
              return <Picker.Item label={evento} value={evento} key={index} />;
            })}
          </Picker>

          <Text style={styles.errorMessage}> {this.state.erro} </Text>

          <Button title="Logar" onPress={this.handleSignInPress}>
            {' '}
          </Button>
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
  container: {
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
  },
});
