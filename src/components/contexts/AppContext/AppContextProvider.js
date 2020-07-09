import React from 'react'
import { useSelector } from 'react-redux'
import { node } from 'prop-types'

import AppContext from './'

const propTypes = {
  children: node.isRequired
}

export default function AppContextProvider ({ children }) {
  const poc = useSelector(state => state.poc)

  return <AppContext.Provider value={poc}>{children}</AppContext.Provider>
}

AppContextProvider.propTypes = propTypes
