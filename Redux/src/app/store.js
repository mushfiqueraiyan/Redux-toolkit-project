import {configureStore} from '@reduxjs/toolkit'; //By using `configureStore you can create a store in reduxToolkit not react Redux. 

import todoReducer from '../features/Todo/todoSlice'


export const store = configureStore({
    reducer: todoReducer
});

