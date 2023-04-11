import { useState } from 'react'
import './App.css'
import AssetTagInputs from './components/AssetTagInputs'

function App() {
  const [state, updateState] = useState(({
    mode: 'sproutSeeds',
    modeDescription: 'Sprouting Seeds'
  }))

  return (
    <div className="App">
      <h1>The Garden Database</h1>
      <div className="card">
        <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'sproutSeeds', modeDescription: 'Sprouting Seeds'}))}>
          Sprout Seeds
        </button>
        <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantSeeds', modeDescription: 'Planting Seeds'}))}>
          Plant Seeds
        </button>
        <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantPlants', modeDescription: 'Planting Plants'}))}>
          Plant Plants
        </button>
        <h2>{state.modeDescription}</h2> 
          <form>
            <AssetTagInputs state={state} />
          </form>
        </div>
    </div>
  )
}

export default App
