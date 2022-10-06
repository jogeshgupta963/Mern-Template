import {configureStore} from '@reduxjs/toolkit';
import crudSlice from './features/crud/crudSlice';
export const Store=configureStore({
    reducer:{
        crud:crudSlice
    }
})