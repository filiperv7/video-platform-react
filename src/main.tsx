import React from 'react'
import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { client } from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
