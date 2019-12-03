import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Button,
  Text,
} from 'react-native';
import colors from './styles/colors';
import api from '../services/api';

class Atividades extends Component {
  state = {
    atividades: '',
    email: 'allytori01@gmail.com',
  };

  static navigationOptions = {
    title: 'Lista de Atividades',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.titleFontColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  componentDidMount = async () => {
    try {
      const response = await api.post('/per_presenca.php', {
        email: this.state.email,
      });
      this.setState({atividades: response.data});
    } catch (err) {
      console.log(err);
      this.setState({erro: 'Houve um problema'});
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <Button
            onPress={() => navigation.navigate('QRCode')}
            title={this.state.atividades}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#CCC',
    padding: 15,
    marginVertical: 2.5,
    width: 'auto',
  },
});

export default Atividades;
