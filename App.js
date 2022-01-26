import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);

  const deleteItem = id => setItems(items.filter(item => item.id !== id));

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an Item', {text: 'OK'});
    } else {
      setItems([
        {
          id: uuidv4(),
          text,
        },
        ...items,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="RAI Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
