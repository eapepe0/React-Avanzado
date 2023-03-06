import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

//* Le vamos a dar el valor maximo
export const useCounter = ({ maxCount = 10 }) => {
  //* aca ponemos el valor inicial del counter
  const [counter, setCounter] = useState(5);

  //* cuando se cambie el valor de elementToAnimate no va a disparar un re - renderizado
  const elementToAnimate = useRef<any>(null); //* usamos el <any> asi podemos usar los efectos en cualquier elemento HTML

  const tl = useRef(gsap.timeline());
  //* se va a crear una sola vez y se almacena la referencia en memoria

  const handleClick = () => {
    //* al hacer click en el boton
    setCounter((prev) => Math.min(prev + 1, maxCount));
    //* usamos el Math.min (evalua un a serie de numeros y devuelve el menor) al llagar a MAX_COUNT , siempre lo va devolver por eso nunca lo va a superar
  };

  //* se asegura que ya tengamos construidos nuestros elementos HTML , o sea que las dimensiones ya esten correctamente establecidas
  //* y se ejecuta la primera vez
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return; //* si la referencia no esta establecida no hace nada

    //* le agregamos el .current por que con el useRef es como hacerle una envoltura
    tl.current.to(elementToAnimate.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });
    tl.current.to(elementToAnimate.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
    tl.current.pause(); //* pausa el efecto
  }, []); //* se ejecuta cuando nuestros elementos HTML ya estan correctamente establecidas

  useEffect(() => {
    //if (counter < maxCount) return;
    //* se ejecuta si el counter es menor al maximo que establecimos del contador
    //* dandole el efecto que salta si llego al maximo establecido , si lo sacamos salta cada vez que el counter cambia
    tl.current.play(0); //* cada vez que cambia el counter empezamos la animacion del useEffectLayout
  }, [counter]); //* se ejecuta el useEffect cada vez que cambia el counter ( o sea cuando hacemos click en el boton)

  //* devolvemos lo que vamos a necesitar como si fuera un objeto
  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
