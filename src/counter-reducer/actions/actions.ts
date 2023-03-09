//* asi queremos que luzcan las acciones (actions) , type es exclusivo de TS
export type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };
