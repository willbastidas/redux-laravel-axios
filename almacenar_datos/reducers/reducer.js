import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
/**    
 * Se puede observar cómo Redux Toolkit es utilizado para dicho modelo mediante 
 el uso de la función createSlice, la cual acepta el estado inicial, un objeto con 
 funciones para efectuar los cambios en el estado (reducers) y un nombre para esta 
 porción del estado. La función retorna un objeto que contiene las acciones y sus 
 tipos para que podamos utilizarlas en la aplicación.
 */