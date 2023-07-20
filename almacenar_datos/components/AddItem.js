import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducers/reducer';
import axios from 'axios';

/* primero se crea las variables que se van a utilizar en este caso
[nombre, descripcion, tipo, stock]; 
*/
const AddItem = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [stock, setStock] = useState('');
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(addItem({ nombre, descripcion, tipo, stock }));
    /*
    Con axios se manda la infirmacion a la api creada en laravel
    se crean las variables que quieren mandar a la api, los nombres
    de dicha variable se nombrar de igual manera que se encunetra en la api  
    */ 
   const {data} = axios.post('http://192.168.85.239:8000/api/productos', {
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
    /* luego se debe limpear lo mandado */
    setNombre('');
    setDescripcion('');
    setTipo('');
    setStock('');
  };



  /* manera de como el usuario va ver la informacion que se va a ingresar

  */ 
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
       {/* keyboardType='numeric', es una propiedad del textInput
       para que solo salga el teclado numerico, esto se hace en este caso
       debido a que el stock en la api se coloco que solo se puendan ingresar
       numeros enteros */}
      <TextInput
        placeholder="Stock"
        keyboardType='numeric'
        value={stock}
        onChangeText={setStock}
      />
      <Button title="Guardar" onPress={handlePress} />
    </View>
  );
};

export default AddItem;
