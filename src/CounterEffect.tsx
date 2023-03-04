import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAX_COUNT = 10;
export const CounterEffect = () => {
  //* aca ponemos que initialValue lo va a buscar en las definiciones que hacemos en interface Props
  const [counter, setCounter] = useState(5);

  //* cuando se cambie el valor de counterElement no va a disparar un re - renderizado
  const counterElement = useRef<HTMLHeadingElement>(null);

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

    const tl = gsap.timeline(); //* la forma recomendada es usar un timeline
    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: "ease.out" });
    tl.to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    //* creamos la animacion que afecta al ref counterElement , donde y se movera hacia arriba con un valor negativo en un transcurso de 0.2 seg
    //* gsap.to es una promesa asi que usando un .then podemos controlar lo que se ejecuta cuando se cumple la promesa
    //* en este caso usamos otra animacion para simular un rebote
  }, [counter]); //* se ejecuta el useEffect cada vez que cambia el counter ( o sea cuando hacemos click en el boton)

  return (
    <>
      <h1>CounterEffect :</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
