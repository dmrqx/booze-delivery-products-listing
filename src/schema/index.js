import React from 'react'
import { element } from 'prop-types'
import { ApolloProvider } from 'react-apollo'

import client from './client'

const propTypes = {
  children: element.isRequired
}

export default function Schema ({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

Schema.propTypes = propTypes
