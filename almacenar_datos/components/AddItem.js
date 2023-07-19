import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/reducer';
import { axios } from 'axios';


const AddItem = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addItem({ nombre, descripcion, tipo, stock }));
    axios.post('http://127.0.0.1:8000/api/productos', {
      nombre: nombre,
      descripcion: descripcion,
      tipo: tipo,
      stock: stock
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setNombre('');
    setDescripcion('');
    setTipo('');
    setStock('');
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        placeholder="Tipo De Producto"
        value={tipo}
        onChangeText={setTipo}
      />
      <TextInput
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
      />
      <Button title="Guardar" onPress={handlePress} />
    </View>
  );
};

export default AddItem;
