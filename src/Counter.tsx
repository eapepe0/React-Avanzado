import { useState } from "react";

interface Props {
  //* aca ponemos el tipo de las props que va a recibir
  initialValue?: number; //* ? el signo de pregunta simboliza que podemos recibir o no la prop en el componente
}
export const Counter = ({ initialValue = 0 }: Props) => {
  //* aca ponemos que initialValue lo va a buscar en las definiciones que hacemos en interface Props
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
