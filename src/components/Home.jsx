import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Home = () => {
    const[data,setData]=useState([]);
    
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
            setData(response.data);
       }) 
       .catch(err=>console.log(err));
    },[]);

  return (
    <div className='container table-responsive mt-5 pt-5'>
        <table className="table">
             <thead>
                <tr className="table-success">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
        <tbody>
            {data.map((value,index)=>{
                return <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                </tr>
            })}
        </tbody>
        </table>
    </div>
  )
}

export default Home