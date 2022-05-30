import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  //it run every time the dependencies changed
  //in this case its run only at first load because of []  
  useEffect(()=>{
    const storedUserLoggedInInformation=localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation==='1'){
      setIsLoggedIn(true);
    }

  }, [])

  //use the local storage to save the status
  localStorage.setItem('isLoggedIn','1');
  const loginHandler = (email, password) => {
    
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
