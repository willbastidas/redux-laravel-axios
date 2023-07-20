import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducers/reducer';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeItem(id));
  };


  /* manera en la que se van a mostrar los productos y la manera 
  en la que desea que el usuario vea los datos */
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Text>
          {item.nombre} - {item.descripcion}{item.tipo} - {item.stock}{' '}
          <Text onPress={() => handleRemove(item.id)}>Eliminar</Text>
        </Text>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;
/*
La función despachadora (o simplemente función dispatch) 
es una función que acepta una acción o una acción asíncrona; 
entonces puede o no despachar una o más acciones al store.
*/ 