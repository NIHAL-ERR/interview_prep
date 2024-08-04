import React, { useState } from 'react'
export default function increment(OldComponent) {
  return function EnhancedCounter()
  {
    const[count ,setCount] = useState(0);
    return <OldComponent count={count} increment={()=>{setCount(count+1)}}/>
  }

}

