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

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Text>
          {item.name} - {item.description}{' '}
          <Text onPress={() => handleRemove(item.id)}>Eliminar</Text>
        </Text>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;
