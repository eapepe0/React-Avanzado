import { useState } from "react";

interface Props {
  //* aca ponemos el tipo de las props que va a recibir el componente
  initialValue?: number; //* ? el signo de pregunta simboliza que podemos recibir o no la prop en el componente
}
export const CounterBy = ({ initialValue = 5 }: Props) => {
  //* aca ponemos que initialValue lo va a buscar en las definiciones que hacemos en interface Props

  //* definimos nuestro estado como un objeto que lo inicializamos de la siguiente forma
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    clicks: 0,
  });

  //* extraemos de counterState
  const { counter, clicks } = counterState;

  //* una funcion que recibimos el valor value el cual es un numero
  const handleClick = (value: number) => {
    //* seteamos el counter el cual es un objeto de la siguiente forma
    setCounterState((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };
  return (
    <>
      <h1>CounterBy : {counter}</h1>
      <h1>ClicksBy : {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
