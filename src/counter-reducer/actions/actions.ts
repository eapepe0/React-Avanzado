//* asi queremos que luzcan las acciones (actions) , type es exclusivo de TS
export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

//* las action creators comunmente arrancan con el do
//* devuelve un CounterAction

//* export const doReset = (): CounterAction => {
//*   return {
//*     type: "reset",
//*   };
//* };

export const doReset = (): CounterAction => ({ type: "reset" });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: "increaseBy",
  payload: { value },
});
