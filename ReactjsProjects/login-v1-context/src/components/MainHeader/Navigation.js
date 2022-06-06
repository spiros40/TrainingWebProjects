import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

const Navigation = () => {
  /* with consumer context *not so good*
   <AuthContext.Consumer>
    {(ctx)=>{
      return(
        <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
      );  
    }}
    </AuthContext.Consumer>*/
  
    /* Preferred way to use context*/
  const ctx= useContext(AuthContext);

  return (
    <nav className={classes.nav}>
    <ul>
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <button onClick={ctx.onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </nav>

   
  );
};

export default Navigation;
