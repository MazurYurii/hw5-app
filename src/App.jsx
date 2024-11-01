import './App.css'
import { useRef, useState } from 'react'
import Comments from './components/Comments.jsx';
import Posts from './components/Posts.jsx';
import Props from './components/Props.jsx';
import { useEffect } from 'react';


function App() {
  const inputName = useRef();
  const inputSecName = useRef();
  const inputEmail = useRef();

  const [user, setUser] = useState([]);

  const [stateProps, setStateProps] = useState(0);

  const [value, setValue] = useState(0);

  function addUsers() {
    setUser([...user, `${inputName.current.value} ${inputSecName.current.value} ${inputEmail.current.value}`])
  }

  useEffect(() => {
    console.log('Render component');
  }, [value]);
  
  return (
    <>
      <input ref={inputName} type="text" />
      <input ref={inputSecName} type="text" />
      <input ref={inputEmail} type="text" />
      <br />
      <button onClick={addUsers} > Add user</button>
      
      <ul>
        {user.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
      <br />
      
      <Comments />
      <Posts />
      <Props 
        statePtops={stateProps}
        setStatePtops={setStateProps}
      />

      <h3>{value}</h3>
      <button onClick={() => setValue(value + 5)}>Change state</button>
      
    </>
  )
}

export default App
