import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Button } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const DATA = [
  { id: '1',
  title: 'Atividade 1', },
  { id: '2',
  title: 'Atividade 2', },
  { id: '3',
  title: 'Atividade 3', }
]

onSuccess = (e) => {
  alert(e.data);
};

QRCode = () => (
  <QRCodeScanner 
    onRead={(e) => this.onSuccess(e)} />
);

const Atividades = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <FlatList data={DATA} renderItem={({ item }) => (  
      <View style={styles.item}>
        <Button onPress={() => navigation.navigate('QRCode')} title={item.title}/>
      </View>
      )}
      keyExtractor={item => item.id} />
  </SafeAreaView>
);

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

Atividades.navigationOptions = {
  title: "Atividades"
};

export default Atividades;