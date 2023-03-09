import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
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
