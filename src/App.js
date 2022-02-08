import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';
function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e)=> { 
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    }
    catch (err) {
      setError(true)
      console.log(err)
    }
    
  }

  return (
    <div className="App">
      <h2>color Generator</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={e => { setColor(e.target.value) }} placeholder='#ff0' />
        <button type="submit">Submit</button>
      </form>
      {error ? <p>Invalid color</p> : null}
      
      <section>
        {list.map((color, i) =>
        { return (<SingleColor key={i} {...color} index={i} hex={ color.hex}/>)}
        )}
        
      </section>

      
    </div>
  );
}

export default App;
