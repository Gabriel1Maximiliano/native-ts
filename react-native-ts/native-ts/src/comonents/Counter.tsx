import React, { useState } from 'react';

export const Counter = () => {

  const [ counter, setCounter ] = useState<number>( 0 );

  const handleIncreaseBy = ( value:number ): void =>{
  
    setCounter( ( prev ) => prev + value  )

  }

  return (
    <div className='container' >
      <h1>Counter-ts : { counter }</h1>
      <hr />
      <button className='btn btn-primary' onClick={ ()=>handleIncreaseBy( +1 ) }> + </button>
     {' '}
      <button className='btn btn-primary' onClick={ ()=>handleIncreaseBy( -1 ) } > - </button>
    </div>
  )
}
