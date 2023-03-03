import { useState } from "react";

interface Props {
  //* aca ponemos el tipo de las props que va a recibir el componente
  initialValue?: number; //* ? el signo de pregunta simboliza que podemos recibir o no la prop en el componente
}

//* asi debe lucir el counterState
interface CounterState {
  counter: number;
  clicks: number;
}
export const CounterBy = ({ initialValue = 5 }: Props) => {
  //* aca ponemos que initialValue lo va a buscar en las definiciones que hacemos en interface Props

  //* definimos nuestro estado como un objeto que lo inicializamos de la siguiente forma
  //* en la parte de <CounterState> definimos como se debe ver nuestro state
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  //* extraemos de counterState
  //* nos podemos ahorrar este paso si desestructuramos en la creacion del useState
  // const [counterState, setCounterState] = useState<CounterState>({...})
  //const { counter, clicks } = counterState;

  //* una funcion que recibimos el valor value el cual es un numero
  const handleClick = (value: number) => {
    //* seteamos el counter el cual es un objeto de la siguiente forma
    //* desestructuramos clicks y counter del estado
    setCounterState(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1,
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
