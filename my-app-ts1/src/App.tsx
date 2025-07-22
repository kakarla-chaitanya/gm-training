
import { createContext, useState } from 'react';
import './App.css';
import Counter from './components/counter';
import FormComponent from './components/FormComponent';
import Greeting,{X} from './components/greeting';
import { CounterContextProvider } from './context/counter_context';
import { CartContextProvider } from './context/cart_context';
import Cart from './components/cart';

type ThemeContextType={
  mode:"light"|"dark";
  setMode:React.Dispatch<React.SetStateAction<"light" | "dark">>
};
const ThemeContext=createContext<ThemeContextType|null>(null);
function App() {
  const [mode,setMode]=useState<'light'|"dark">('light');
  return (
    <ThemeContext value={{mode:mode,setMode:setMode}}>
    <CounterContextProvider>
    <CartContextProvider>
    <div className={mode}>
      <Greeting name="Hello" age={30} />
      <X name="jdsbfjis" />
      <Counter />
      <FormComponent />
      <Cart />
    </div>
    </CartContextProvider>
    </CounterContextProvider>
    </ThemeContext>
    
  );
}

export default App;

export {ThemeContext};
