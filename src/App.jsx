import { useState } from 'react'
import './App.css'

import PlantPlants from './components/PlantPlants'
import PotSprouts from './components/PotSprouts'
import SproutSeeds from './components/SproutSeeds'

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
      <div className="card modeSelect">
            <div className='buttons'>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'sproutSeeds', modeDescription: 'Sprouting Seeds'}))}>
                    Sprout Seeds
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'potSprouts', modeDescription: 'Potting Sprouts'}))}>          
                    Pot Sprouts
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantPlants', modeDescription: 'Planting Plants'}))}>   
                    Plant Plants
                </button>
            </div>
      </div>
      { state.mode === 'sproutSeeds'  && <SproutSeeds /> }
      { state.mode === 'potSprouts'   && <PotSprouts /> }
      { state.mode === 'plantPlants'  && <PlantPlants /> }

  </div>
  )
}

export default App