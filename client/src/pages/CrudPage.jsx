import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../redux/features/crud/crudGETSlice';

const Page = () => {
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [postSuccessMsg,setPostSuccessMsg]=useState(false);
    const [putSuccessMsg,setPutSuccessMsg]=useState(false);
    const [delMsg,setDelMsg]=useState(false);
    const [allDbData,setAllDbData]=useState([]);

    //Redux State Data Import :
    const {data,isLoading}=useSelector((store)=>store.crud);
    
    useEffect(()=>{
      setAllDbData(data);
      // console.log('Db Data is : ',allDbData);
    },[data]);

    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getData('random'));
    },[]);


    //Crud Operations :
    //POST:
   const postFn=async(name)=>{
    try{
    const response= await axios.post(`http://localhost:3001/post/${id}`,{dataobject:name});
    console.log(response.data);
    setPostSuccessMsg(true);
    }catch(err){
      console.log('Error at POST Request : ',err);
    }
   }

   //UPDATE :
   const updateFn=async(name)=>{
    try{
      const resp=await axios.put(`http://localhost:3001/update/${id}`,{dataobject:name});
      console.log(resp.data);
      setPutSuccessMsg(true);
    }catch(err){
      console.log('Error at Update Request : ',err);
    }
   }

   //Delete :
   const deleteFn=async()=>{
    try{
      const resp=await axios.delete(`http://localhost:3001/delete/${id}`)
      console.log(resp.data);
      setDelMsg(true);
    }catch(err){
      console.log(err);
    }
   }

   //Redux loading condition :
   if(isLoading){
        return (<h1>Loading ...</h1>)
    }

  return (
    <div>

      <div style={{borderStyle:'solid',borderRadius:'10px',marginLeft:'35vw',marginRight:'35vw',padding:'3vw'}}>
        <h1>CRUD Page</h1>
        <div>
          <label htmlFor="name">Enter your name</label>
          <input onChange={(e)=>{setName(e.target.value)}} id="name" type='text'/>
        </div>
        <br/>
      <div>
          <label htmlFor="id">Enter your ID</label>
          <input onChange={(e)=>{setId(e.target.value)}} id="id" type='text'/>
        </div><br/>
          <button onClick={()=>{postFn(name)}}>Save Name</button>
          {postSuccessMsg?<><h2>Saved to DB </h2></>:<></>}
          </div>
          
          <br/>
          <br/>

          <div style={{borderStyle:'solid',borderRadius:'10px',marginLeft:'35vw',marginRight:'35vw',padding:'3vw'}}>
          <h1>Update Section</h1>
           <div>
          <label htmlFor="name">Enter your Updated name</label>
          <input onChange={(e)=>{setName(e.target.value)}} id="name" type='text'/>
        </div>
        <br/>
      <div>
          <label htmlFor="id">Enter your ID</label>
          <input onChange={(e)=>{setId(e.target.value)}} id="id" type='text'/>
        </div>
<br/>
          <button onClick={()=>{updateFn(name)}}>Update Name</button>
          {putSuccessMsg?<><h2>Updated in DB</h2></>:<></>}
          </div>
        <br/>
        <br/>


        <div style={{borderStyle:'solid',borderRadius:'10px',marginLeft:'35vw',marginRight:'35vw',padding:'3vw'}}>
      <div>
        <h1>Delete Section</h1>
          <label htmlFor="id">Enter ID to Delete</label>
          <input onChange={(e)=>{setId(e.target.value)}} id="id" type='text'/>
        </div><br/>
          <button onClick={()=>{deleteFn()}}>Delete ID</button>
          {delMsg?<><h2>Deleted from DB</h2></>:<></>}
          </div>
<br/>
<br/>

<h1>View Data in DB :</h1>

<div style={{borderStyle:'solid',marginLeft:'10vw',marginRight:'10vw',borderRadius:'100px'}}>
{allDbData.map((item)=>(
  <article style={{borderStyle:'solid',marginBottom:'5vw',marginTop:'5vw',marginLeft:'10vw',marginRight:'10vw',borderRadius:'100px'}} key={item.data2}>
    <h3>Name : {item.data1}</h3>
    <h3>ID  : {item.data2}</h3>
  </article>
))}
</div>

  <br/>
  <br/>
      <button><Link to="/">Go to Home Page</Link></button>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Page