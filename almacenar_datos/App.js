import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

axios.get('http://api.example.com/api/usuarios')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <AddItem />
        <ItemList />
      </View>
    </Provider>
  );
};

export default App;