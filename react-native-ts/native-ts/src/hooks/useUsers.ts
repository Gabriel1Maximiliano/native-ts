import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { IUser, IRequestResponseList } from "../interfaces/resApiInterfaces";

export const useUsers = () => {

    const [ users,setUsers ] = useState<IUser[]>([]);
    console.log(users)

    const pageRef = useRef( 0 );

   useEffect(() => {
    
       // fetch('https://reqres.in/api/users')
       //      .then( data=> data.json() )
       //      .then( response=> setData( response ))

       // axios.get('https://reqres.in/api/users')
       //      .then( ( { data } ) => setData( data ) )
       // //      .catch( error =>console.log(error) )

       //      reqResApi.get<IRequestResponseList>( '/users' )
       //               .then( (  data  ) => setUsers( data.data.data ) )
       //               .catch( error =>console.log(error) )

       chargeUsers();
   }, [])



   const chargeUsers = async() =>{
   
   const  resp = await reqResApi.get<IRequestResponseList>( '/users',{
       params:{ page:pageRef.current }} ) 
       setUsers( resp.data.data )       
   }

   const nextPage = ()=>{
    pageRef.current++;
    chargeUsers();
     
   }

   const prevPage = () =>{

    if( pageRef.current > 1 ){
      pageRef.current--;
      chargeUsers();
    }
  
   }
   

 return{
    users,
    prevPage,
    nextPage
 
 }
}

