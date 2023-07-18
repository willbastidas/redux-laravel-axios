import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
// import { axios } from 'axios';

// axios.get('http://127.0.0.1:8000/api/productos')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

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