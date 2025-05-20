import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../providers/AuthProvider'

function Home() {
  const authInfo = useContext(AuthContext)
  console.log(authInfo)
  return (
    <div>
        <h2 className="text-3xl">Thhis is for : {authInfo.name}</h2>
    </div>
  )
}

export default Home