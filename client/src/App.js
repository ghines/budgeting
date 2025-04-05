import React, {Fragment} from 'react';
import InputEnvelope from './components/InputEnvelope';
import ListEnvelopes from './components/ListEnvelopes';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <ListEnvelopes />
        <InputEnvelope />
        
      </div>
    </Fragment>
  );
}

export default App;
