import React, { createContext } from 'react'
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({children})=> {
    const authInfo= {name: 'goru chagol vera mohish'}
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


AuthProvider.PropTypes= {
    children: PropTypes.node
}