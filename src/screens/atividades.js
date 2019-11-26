import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Button } from 'react-native';
import colors from './styles/colors'

class Atividades extends Component {

  state = {
    atividades: [
      {key: "0", desc: "Atividade 1"},
      {key: "1", desc: "Atividade 2"},
    ],
    email: 'allytori01@gmail.com',
  };

  static navigationOptions = {
    title: "Lista de Atividades",
    headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.titleFontColor,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
  }

  render() {
    const { navigation } = this.props;
    return(
      <SafeAreaView style={styles.container}>
        <FlatList data={this.state.atividades} renderItem={({  }) => (  
          <View style={styles.item}>
            <Button onPress={() => navigation.navigate('QRCode')} title={this.state.atividades.desc}/>
          </View>
          )}
          keyExtractor={item => item.id} />
      </SafeAreaView>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#CCC',
    padding: 15,
    marginVertical: 2.5,
    width: "auto",
  },
  title: {
    fontSize: 20,
  },
});

export default Atividades;