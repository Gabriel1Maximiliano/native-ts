import { useState } from "react";


export const useCounter = ( initialState:number ) => {

    const [ counter, setCounter ] = useState<number>( initialState );

    const handleIncreaseBy = ( value:number ): void =>{
    
      setCounter( ( prev ) => prev + value  )
  
    }

  return {

    value:counter,

    //Methods
    
    handleIncreaseBy,



  }
}
