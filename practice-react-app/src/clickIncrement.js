import React from 'react';
import increment from './increment';

function clickIncrement({count, increment}) {
  return (
    <>
    <button onClick={increment}>Click me</button>
    <h1>{count}</h1>
    </>
  )
}

export default increment(clickIncrement);

