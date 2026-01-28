import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import { EmployeeService } from "./services/EmployeeService";
import { ServiceContext } from "./contexts/ServiceContext";

function App() {
   const [count, setCount] = useState(0)
  return (
    <ServiceContext.Provider value={EmployeeService}>
      <EmployeeList />
    </ServiceContext.Provider>
  );
}

export default App;