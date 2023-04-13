import { useState, useCallback } from 'react'
import './App.css'
import ModeSelect from './components/ModeSelect'

const initialState = ({
    mode: 'sproutSeeds',
    modeDescription: 'Sprouting Seeds'
})

function App() {
  const [state, updateState] = useState(initialState)

  return (
    <div className="App">
      <h1>The Garden Database</h1>
      <h2>{state.modeDescription}</h2>
      <ModeSelect updateState={updateState}/>
    </div>
  )
}

export default App
