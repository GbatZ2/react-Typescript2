import React from 'react';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import UseContext from './Components/UseContext';
import UseReducer from './Components/UseReducer';
import UseRef from './Components/UseRef';
import CustomHook from './Components/CustomHook';
import EvenMoreReact from './Components/EvenMoreReact';


function App() {
  return (
    <div className="App">
        <UseState/>
        <UseEffect/>
        <UseContext/>
        <UseReducer/>
        <UseRef/>
        <CustomHook/>
        <EvenMoreReact/>
    </div>
  );
}

export default App;
