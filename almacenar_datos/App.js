import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

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