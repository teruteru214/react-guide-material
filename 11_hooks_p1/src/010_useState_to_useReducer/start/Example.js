import { useReducer, useState } from "react";

const Example = () => {
  const [ state, setState ] = useState(0);
  const [ rstate, dispatch ] = useReducer((prev, { type, step }) =>  {
    switch(type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
      default:
        throw new Error('不明なactionです');
    }
  }, 0)

  const countUp = () => {
    setState(prev => ++prev)
  }

  const rcountUp = () => {
    dispatch({ type: '+', step: 2 });
  }
  const rcountDown = () => {
    dispatch({ type: '-', step: 3 });
  }
  return (
    <>
      <h3>{state}</h3>
      <button onClick={countUp}>+</button>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
