import React from 'react';
import increment from './increment';

function hoverIncrement({count, increment}) {
  return (
    <>
    {/* /*on hover not working */}
    <h1 onClick={increment}>Hover me</h1>
    <h1>{count}</h1>
    </>
  )
}

export default increment(hoverIncrement);

