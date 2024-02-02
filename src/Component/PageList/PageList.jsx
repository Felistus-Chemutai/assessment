import React from 'react'
import { useState } from 'react'

const PageList = () => {
    const[pageItems, SetPageItems]= useState('')

  return (
    <div className='page-items'>
        <button className={`_prev`}
        disabled={!pageItems}onClick={()=>PageList(page-1)}>_Prev</button>
        <div className='page-items'>
        <button className={`_next`}
        disabled={!pageItems}onClick={()=>PageList(page-1)}>_Next</button>
        </div>
    </div>
  )
}

export default PageList
