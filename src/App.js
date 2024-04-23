import React from 'react'
import Provider from './Provider'
import Routing from './Routing'

const App = () => {
  return (
    <div>
      <Provider>
        <Routing />
      </Provider>
    </div>
  )
}

export default App
