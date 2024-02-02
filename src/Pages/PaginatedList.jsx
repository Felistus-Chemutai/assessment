import React from 'react'
import { useState } from 'react'
import {Outlet, Link}  from 'react-router-dom'

const PaginatedList = () => {
    

  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/contacts">Contacts </Link>
            </li>
            <li>
                <Link to ="/">Home</Link>
            </li>
        </ul>
    </nav>
      <Outlet/>
    </>
  )
}

export default PaginatedList
