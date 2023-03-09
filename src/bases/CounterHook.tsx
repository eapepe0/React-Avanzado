import { useCounter } from "../hooks/useCounter";
//* importamos nuestro hook

export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  }); //* desestructuramos algo del hook useCounter , en nuestro caso el counter , counterElement y el handleClick
  //* le damos de valor al maxCount 15
  return (
    <>
      <h1>CounterHook :</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
