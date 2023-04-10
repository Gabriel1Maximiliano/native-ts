import {  useRef } from "react";

import { IUser } from "../interfaces/resApiInterfaces";
import { useUsers } from "../hooks/useUsers";


export const Users = () => {


     const pageRef = useRef( 0 );

     const { users,nextPage,prevPage } = useUsers();

   

    const renderItem = ( user:IUser ) =>{
        return(
           
            <tr key={ user.id.toString() } >
                <td>
                  <img 
                  src={ user.avatar  } 
                  alt="avatar" 
                  style={{
                    width:35,
                    borderRadius:100

                  }}
                  />
                </td>
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
        <button 
        className="btn btn-primary" 
        onClick={ nextPage }
        
        >Siguiente</button>
              {' '}
          <button 
        className="btn btn-primary" 
  
        onClick={ prevPage }
        
        >Atras</button>
    </div>
  )
}