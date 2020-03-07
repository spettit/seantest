import React from "react"

import navbar from './navbar'
import Navbar from "./navbar"

export default ({ children }) => (
  <div style={{ margin: `5rem auto`, maxWidth: 650, padding: `0 1rem`, backgroundColor: 'lightblue' }}>
  <Navbar />
    {children}
  </div>
)