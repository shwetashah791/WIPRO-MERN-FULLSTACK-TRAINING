import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledRegistrationForm from './components/ControlledRegistrationFrom'
import UncontrolledRegistrationForm from './components/UncontrolledRegistrationForm'
import JsonRegistrationForm from './components/JsonRegistrationForm'
import JsonControlledRegistrationForm from './components/JsonControlledRegistrationFrom'
import MixedRegistrationForm from './components/MixedRegistrationForm'
import CourseList from './components/CoursesList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ControlledRegistrationForm />
    </div>

     {/* <div>
      <UncontrolledRegistrationForm />
    </div> */}
{/*       
      <JsonRegistrationForm /> 
      <JsonControlledRegistrationForm />  
      <MixedRegistrationForm /> */}
      <div>
       <CourseList />
       </div>
    </>
  )
}

export default App
