import React, { useState } from 'react';


function App() {


  const [result, setResult] = useState(null);
  const [chosenNumber, setNumber] = useState(0);

  const fizz = function(value) {
    if(value % 2 ==0) {
      return 'fizz'
    }
    return '';
  }


  const buzz = function(value) {
      if(value % 5 ==0) {
          return 'buzz';
      }
      return '';
  }

  const sendNumber = function() {
    let result = '';
    for(let i=0;i<chosenNumber;i++) {
      if(!fizz(i) && !buzz(i)) {
          result += i;
      }
      else {
          result += fizz(i);
          result += buzz(i);
      }

    }

    setResult(result)
  }


  return (
    <div className="App">

      <input type="number" value={chosenNumber} onInput={e => setNumber(e.target.value)}/>
      <input type="button" value="Envoyer" onClick={sendNumber} />
      

      <code>{result != null ? result : ''}</code>
    </div>
  );
}

export default App;
