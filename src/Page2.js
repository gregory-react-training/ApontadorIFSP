import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Evento 1',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function Page2() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#CCC',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

Page2.navigationOptions = {
  title: "Eventos"
};