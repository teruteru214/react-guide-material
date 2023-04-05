import { useSelector } from "react-redux";
import { useCounter } from "../context/CounterContext";

const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(state => state.counter);
  console.log(state);
  return <h3>{state}</h3>;
};

export default CounterResult;
