import React, { createContext, useState } from 'react'

// Project modules
import firebase from '../firebase'

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
          setLoading(true)

          try {
              await firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then( async result => console.log(result))
              .catch( async error => console.log(error))
          } catch(e) {
            console.log("Error in sign in")
            console.log(e)
            
          }
          setLoading(false)
        },

        signup: async (displayName, email, password) => {
          
          setLoading(true)
          try {
              const credential = await firebase.auth().createUserWithEmailAndPassword(email, password)
   
              try {
                await credential.user.updateProfile({displayName: displayName,})
                console.log('Update succes user display name')
              } catch(e) {
                console.error('Error in update user display name')
                console.error(e)
              }
          } catch(e) {
              console.error(`Error in sign up: {e}`)
          }
          setLoading(false)
        },
  
        logout: async () => {
          try {
            await firebase.auth().signOut()
            console.log('user logout')
          } catch(e) {
            console.log('error at logout')
            console.log(e)
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};