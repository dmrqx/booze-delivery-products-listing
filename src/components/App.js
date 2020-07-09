import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'

import { GET_POC_CATEGORIES } from '@z/schema/queries'
import '@z/css/index.css'

export default function App () {
  const [getProductList, { data }] = useLazyQuery(GET_POC_CATEGORIES)

  console.log(data)

  return (
    <>
      <header>
        <h1>Receba sua bebida favorita</h1>
      </header>
      <main>
        <form>
          <div>
            <label htmlFor='user-address'>
              Quero receber o pedido agora em: &emsp;
            </label>
            <input
              id='user-address'
              name='user-address'
              placeholder='Endereço para entrega'
              aria-placeholder='Informe aqui o endereço onde devemos entregar seu pedido'
              value='Rua Américo Brasiliense, São Paulo'
              readOnly
            />
          </div>
          <button
            onClick={e => {
              e.preventDefault()
              getProductList()
            }}
          >
            Vai!
          </button>
        </form>
      </main>
      <footer>Beba com moderação</footer>
    </>
  )
}
