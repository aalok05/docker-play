import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/list/Users';
import Register from './components/Forms/register/Register';
import Sample from './components/Forms/sample/Sample';
import Api from './components/API/Api';
import UseState from './components/hooks/useState';
import UseEffect from './components/hooks/UseEffect';
import UseContext from './components/hooks/UseContext';
import UseReducer from './components/hooks/UseReducer';


export const UserContext = React.createContext();
export const ChanelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Sample/> */}
      {/* <Api/> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}

      {/* <UserContext.Provider value={ {user:{name:"Souradip",age:"Panja"}, address:{street:"belilious lane"}}}>
          <ChanelContext.Provider value={'fgh'}>
              <UseContext/>
          </ChanelContext.Provider>
      </UserContext.Provider> */}
    <UseReducer/>

    </div>
  );
}

export default App;
