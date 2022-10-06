import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    data:[],
    isLoading:true
}

const url='//=====//';//Put your url for Fetching Data here

//Fetching the Data
export const getData=createAsyncThunk('data/getData',async(data,thunkAPI)=>{
try{
    console.log(data);
    console.log(thunkAPI);
    console.log(thunkAPI.getState());
    const resp=await axios(url);
    return resp.data;
}catch(err){
    return thunkAPI.rejectWithValue('Something went Wrong')
}
})

const crudSlice=createSlice({
    name:'CRUD',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getData.pending]:(state)=>{
            state.isLoading=true
        },
        [getData.fulfilled]:(state,action)=>{
            console.log(action);
            state.isLoading=false;
            state.data=action.payload;
        },
        [getData.rejected]:(state)=>{
            state.isLoading=false
        }
    }
})

export default crudSlice.reducer;