import React, { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const Counter = () => {

  const { handleIncreaseBy,value  } =useCounter( 0 )

  return (
    <div className='container' >
      <h1>Counter-ts : { value }</h1>
      <hr />
      <button className='btn btn-primary' onClick={ ()=>handleIncreaseBy( +1 ) }> + </button>
     {' '}
      <button className='btn btn-primary' onClick={ ()=>handleIncreaseBy( -1 ) } > - </button>
    </div>
  )
}
