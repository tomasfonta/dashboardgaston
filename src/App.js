import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [env1version, setEnv1Version] = useState();
  const env1Url = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
  const rowNumber = 1;
  const startText = 4;
  const finishText = 10;

  useEffect(() => {
    fetch(env1Url)
      .then((r) => r.text())
      .then(text => {
        //Split text in rows
        const array = text.split('\n');
        // Get second row as example
        const row = array[rowNumber];
        // Get a part of the text
        const version = row.slice(startText, finishText);
        // Set state
        setEnv1Version(version);
      })
      .catch(error => {
        // Maybe present some error/failure UI to the user here if environment is down.
        setEnv1Version(" Environment not reachable.")
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>§
          Environment Version: {env1version}
        </p>
      </header>
    </div>
  );
}

export default App;
