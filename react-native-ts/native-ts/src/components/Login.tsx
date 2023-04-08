import { useEffect, useReducer } from "react";


export interface IAuthStateProps {

    isValidating: boolean;
    token       : string | null;
    username    : string;
    name        : string;

}

const initialState : IAuthStateProps = {
    isValidating: true,
    token:null,
    username:'',
    name:''
}

type LoginPayload = {

    name    :string;
    username: string;

}

type AuthActions = 
|{ type:"[Auth-Reducer]-Logout" }
|{ type:"[Auth-Reducer]-Login",payload:LoginPayload }
|{ type:"[Auth-Reducer]-Logout-User", }


const authReducer = ( state:IAuthStateProps, action:AuthActions ): IAuthStateProps =>{
  switch( action.type ){

    case "[Auth-Reducer]-Logout":
        return{
            ...state,
            isValidating:false,
            token       :null,
            username    :'',
            name        :''

        }
        case "[Auth-Reducer]-Login":
            return{
                ...state,
                token:'abd123',
                username:action.payload.username,
                name    :action.payload.name
    
            }
            case "[Auth-Reducer]-Logout-User":
                return{
                    ...state,
                    isValidating:false,
                    token       :null,
                    username    :'',
                    name        :''
        
                }
    default: return state;
  }
}
export const Login = () => {

const [ state, dispath ] = useReducer( authReducer,initialState );
const { isValidating, token }  = state;


const handleLogin = () =>{
    dispath( { type:"[Auth-Reducer]-Login", payload:{
        username    :'Loly',
        name        :'Lola Monasterio'} } )
}
const handleLogout = () =>{
    dispath( { type:"[Auth-Reducer]-Logout-User" })
}

useEffect(() => {
 
    setTimeout( () => {
        dispath( { type:"[Auth-Reducer]-Logout" } )
    },1500 )

  
}, [])


  return (
    <div>
        <h1>Login</h1>
        {
            isValidating 
            ?
             (
                <div className="alert alert-info" >
            Validando...
        </div>
            )
            :
            (
            <>
            {
                token ? <div className="alert alert-success" >
                    Autenticado

                    <pre>{ JSON.stringify( state,null,2 ) }</pre>
                    </div>
                : <div className="alert alert-danger" >No autenticado</div>
            }
               
                
            </>
            )
        }
        
        {
            token ? (
                <button
                className="btn btn-danger"
                onClick={handleLogout }
                >
                    LogOut
                </button>
            ):(
                <button
                className="btn btn-primary"

                onClick={ handleLogin }
                >
                    Login
                </button>
            )
        }

       
       
    </div>
  )
}
