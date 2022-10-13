import {configureStore} from '@reduxjs/toolkit';
import crudSlice from './features/crud/crudGETSlice';
export const Store=configureStore({
    reducer:{
        crud:crudSlice
    }
})