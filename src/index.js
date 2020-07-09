import React from 'react'
import { render } from 'react-dom'

import 'core-js/es/map'
import 'core-js/es/set'
import 'raf/polyfill'

import App from '@z/components/App'
import { AppContextProvider } from '@z/components/contexts'
import Schema from '@z/schema'
import Store from '@z/store'

const rootComponent = (
  <Store>
    <Schema>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Schema>
  </Store>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
