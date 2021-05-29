import React, { createContext, useState } from 'react'

// Project modules
import { firebase, base } from '../firebase'

// Create a context
export const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        errMessage,
        setErrMessage,
  
        login: async (email, password) => {
          console.log('user login')
        },

        signup: async (displayName, email, password) => {
          
          setLoading(true)
          try {
              console.log('I am in try')
              await base
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then( async (credential) => {
                console.log('hello')
              })
              .catch( async (e) => setErrMessage(e.str))
          } catch(e) {
              console.error(`Error in sign up: {e}`)
          }
          setLoading(false)
        },
  
        logout: async () => {
          console.log('user logout')
        }
  
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};