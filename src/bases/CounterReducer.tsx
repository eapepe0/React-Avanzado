import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(first, INITIAL_STATE);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>CounterReducer : {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

//* el reducer es una funcion pura , es pura por que solo debe trabajar con los argumentos que recibe
//* no tiene que tener interaccion con el mundo externo, no puede ser asincrona
//* recibe unos arguementos y devuelve un estado
//* el initialState es el estado inicial del reducer
