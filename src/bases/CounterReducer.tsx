import { useReducer } from "react";

//* asi va a lucir el estado
interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

//* este seria el estado inicial
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};
//* ejemplo de funcion pura , no tiene interaccion con el mundo externo
//* y se resuelve con los argumentos que recibe

const sumar = (a: number, b: number) => {
  return a + b;
};

//* asi queremos que luzcan las acciones (actions) , type es exclusivo de TS
type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

//* el state seria como el CounterState , la accion seria como CounterAction y el retorno como el CounterState
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      //* si recibimos una accion del tipo reset devolvemos todo en 0
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    //* devolvemos otro estado , donde counter sea igual a el estado anterior + el valor enviado
    //* los cambios se sumaran en 1
    //* y el valor previo sera igual al contador
    case "increaseBy":
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        previous: state.counter,
      };
    default:
      //* si recibimos una accion que no este definida devolvemos el estado intacto
      return state;
  }
};
export const CounterReducerComponent = () => {
  //* desestructuramos el counter del counterState , usamos el dispatch para usar las acciones
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  //* despachamos la accion reset
  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  //* despachamos la accion increaseBy
  const increaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value: value } });
  };

  return (
    <>
      <h1>CounterReducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

//* el reducer es una funcion pura , es pura por que solo debe trabajar con los argumentos que recibe
//* no tiene que tener interaccion con el mundo externo, no puede ser asincrona
//* recibe unos arguementos y devuelve un estado
//* el initialState es el estado inicial del reducer

//* el reducer ==> recibe un estado , una accion y produce otro estado
