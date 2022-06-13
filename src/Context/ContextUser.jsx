import React from 'react';

export const UserContext = React.createContext();

export default function ContextUser({children}) {
    const user = {
        name:"Mahesh",
        age:23
    }
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

// function User() {
//   const value = React.useContext(UserContext);  
    
//   return <h1>{value}</h1>;
// }