import { useState, useEffect } from "react";

const MAX_COUNT = 10;
export const CounterEffect = () => {
  //* aca ponemos que initialValue lo va a buscar en las definiciones que hacemos en interface Props
  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
    //* usamos el Math.min (evalua una serie de numeros y devuelve el menor) al llagar a MAX_COUNT , siempre lo va devolver por eso nunca lo va a superar
  };
  useEffect(() => {
    if (counter < 10) return; //* si counter es menor que 10 volvemos no hacemos nada
    //* si es mayor a 10 mostramos el mensaje siguiente estilizado
    console.log(
      "%cSe llego al valor maximo!!!",
      "color:red; background-color:white"
    );
  }, [counter]); //* se ejecuta el useEffect cada vez que cambia el counter ( o sea cuando hacemos click en el boton)

  return (
    <>
      <h1>CounterEffect : {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
