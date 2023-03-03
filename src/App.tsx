import { Counter } from "./Counter";
import { CounterBy } from "./CounterBy";
import { CounterEffect } from "./CounterEffect";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
