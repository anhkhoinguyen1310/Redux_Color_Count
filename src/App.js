import './App.css';
import { useSelector } from 'react-redux';
import { Container, Button, InputGroup, Form} from 'react-bootstrap';
import { useDispatch } from "react-redux";


function App() {
  const {count, color, boxColors} = useSelector(state => state)
  const dispatch = useDispatch();

  function incrementCount() {
    console.log("Click")
    dispatch({type: 'INCREMENT'})
  }
  function decrementCount() {
    console.log("Click")
    dispatch({type: 'DECREMENT'})
  }
  function onChangeColor(e, idx){
    console.log({idx})
    if(!idx)

    { dispatch({type: 'CHANGE_COLOR', payload: e.target.value})}
    else 
    {
      dispatch({type: 'CHANGE_COLOR_OF_BOX_INDEX', idx, payload: e.target.value})
    }
  }
  
  return (
    <div className="App">
    <Container> 
   
      <h1>Coder Count</h1>
      <h3>{count}</h3>

      <InputGroup onChange = {onChangeColor } className="mt-3" >
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
      />
        <Form.Control aria-label="Text input with checkbox" placeholder='Color' />

      <Button variant="primary" onClick={incrementCount}>Increment</Button>{' '}
      <Button variant="primary" onClick={decrementCount}>Decrement</Button>{' '}

      </InputGroup>
      {(count > 0) ? Array.from(Array(count)).map((c,idx) => {
        const boxColor = boxColors[idx]||color;
        return <div className='mt-3 border p-5 box' key = {idx} style = {{backgroundColor: boxColor}}> 
        <h2>Box {idx + 1}  
        <input placeholder= "Color" className='inputBox' onChange={(e) => onChangeColor(e,idx)}/>
        </h2>
        </div>
      }) : ''}
    
    </Container>
    </div>
  );
}

export default App;
