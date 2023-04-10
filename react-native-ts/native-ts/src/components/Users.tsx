import { useEffect, useState } from "react";

import axios from 'axios';
import { reqResApi } from "../api/reqRes";
import { IRequestResponseList, IUser } from "../interfaces/resApiInterfaces";


export const Users = () => {

     const [ users,setUsers ] = useState<IUser[]>();
     console.log(users)

    useEffect(() => {
     
        // fetch('https://reqres.in/api/users')
        //      .then( data=> data.json() )
        //      .then( response=> setData( response ))

        // axios.get('https://reqres.in/api/users')
        //      .then( ( { data } ) => setData( data ) )
        //      .catch( error =>console.log(error) )
             reqResApi.get<IRequestResponseList>( '/users' )
                      .then( (  data  ) => setUsers( data.data.data ) )
                      .catch( error =>console.log(error) )
    }, [])

    const renderItem = ( user:IUser ) =>{
        return(
            <tr key={ user.id.toString() } >
                <td>{user.avatar }</td>
                <td>{ user.first_name }</td>
                <td>{ user.email }</td>
            </tr>
        )
    }
    
  return (
    <div  className='table' >
        <h3>Users: </h3>

        <table className="table">
  <thead>
    <tr>
      
      <th >Avatar:</th>
      <th >Nombre:</th>
      <th >Email:</th>
    </tr>
  </thead>
        <tbody>
            {
               users?.map( ( user : IUser )=>( renderItem( user )
               ) )             }
        </tbody>
        </table>
    </div>
  )
}