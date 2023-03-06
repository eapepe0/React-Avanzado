import { useCounter } from "./hooks/useCounter";
//* importamos nuestro hook

export const CounterHook = () => {
  const { counter, counterElement, handleClick } = useCounter(); //* desestructuramos algo del hook useCounter , en nuestro caso el counter , counterElement y el handleClick
  return (
    <>
      <h1>CounterHook :</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
