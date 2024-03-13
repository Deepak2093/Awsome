import { View, Text } from 'react-native'
import React from 'react'
import Stack from './src/navigations/stack/Stack'
import { Provider } from 'react-redux'
import { mystore } from './src/Redux/Store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
let persist=persistStore(mystore)

const App = () => {
  return (
    <Provider store={mystore}>
          <PersistGate persistor={persist}>

<Stack/>
</PersistGate>
    </Provider>
   
  )
}

export default App