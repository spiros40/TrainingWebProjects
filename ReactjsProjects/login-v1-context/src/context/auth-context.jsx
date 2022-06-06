import React, {useState,useEffect} from "react";

//here i can put and the logic it handles the login function
const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email, password)=>{}
});

export const AuthContextProvider=(props)=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(()=>{
        const storedUserLoggedInInformation=localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation==='1'){
          setIsLoggedIn(true);
        }
    
      }, [])

    const logoutHandler=()=>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    const loginHandler=()=>{
        localStorage.setItem('isLoggedIn','1');
        setIsLoggedIn(true);
    };

    return(
        <AuthContext.Provider 
        value={{
                isLoggedIn:isLoggedIn,
                onLogout:logoutHandler,
                onLogin:loginHandler  
              }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;


/*another way to doit
    import React from "react";


const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{}
});

export default AuthContext;
*/