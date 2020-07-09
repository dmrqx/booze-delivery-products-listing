import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: process.env.ZE_API
})

export default client
