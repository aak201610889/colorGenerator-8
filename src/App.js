import React, { useState } from 'react';
import Values from 'values.js';
function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e)=> { 
    e.preventDefault();
    console.log('helloworld');
  }

  return (
    <div className="App">
      <h2>color Generator</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={e => { setColor(e.target.value) }} placeholder='#ff0' />
        <button type="submit">Submit</button>
        </form>
      
    </div>
  );
}

export default App;
