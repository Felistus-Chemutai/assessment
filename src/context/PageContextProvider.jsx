import React from 'react'
import PaginatedList from '../Pages/PaginatedList'
import PageContext from './pagecontex'

import React from 'react'
import { useState } from 'react'

const PageContextProvider = ({children}) => {
  const[items, setItems]= useState()
  return (
    <PageContext.Provider >
      {children}
    </PageContext.Provider>
      
    
  )
}

export default PageContextProvider
