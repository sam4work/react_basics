import React, { createContext, useContext } from 'react'

export const MyFamilyNameContext = createContext()

export default function FamilyNameContext(children) {

    const familyName = "Mike";
    
  return (
    <MyFamilyNameContext.Provider value = {{ familyName:  }}
  )
}
