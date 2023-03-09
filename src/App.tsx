import {
  Counter,
  CounterBy,
  CounterEffect,
  CounterHook,
  CounterReducerComponent,
} from "./bases/";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterHook />
      <hr />
      <CounterReducerComponent />
    </>
  );
}

export default App;
