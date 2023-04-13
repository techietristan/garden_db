import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'

import PlantPlants from './components/PlantPlants'
import PotSprouts from './components/PotSprouts'
import SproutSeeds from './components/SproutSeeds'

const sproutSeedsFields = ({
  seedAssetTag: null, 
  podAssetTag: null,
  seedUPC: null,
  seedName: null 
})

const potSproutsFields = ({
  podAssetTag: null,
  potAssetTag: null
})

const plantPlantsFields = ({
  potAssetTag: null,
  plotAssetTag: null
})

const initialState = ({
    mode: 'sproutSeeds',
    modeDescription: 'Sprouting Seeds',
    fields: [ sproutSeedsFields ]
})

function App() {
  const [state, updateState] = useState(initialState)

  return (
    <div className="App">
      <h1>The Garden Database</h1>
      <h2>{state.modeDescription}</h2>
      <div className="card modeSelect">
            <div className='buttons'>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'sproutSeeds', modeDescription: 'Sprouting Seeds', fields: [ sproutSeedsFields ]}))}>
                    Sprout Seeds
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'potSprouts', modeDescription: 'Potting Sprouts', fields: [ potSproutsFields ]}))}>          
                    Pot Sprouts
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantPlants', modeDescription: 'Planting Plants', fields: [ plantPlantsFields ]}))}>   
                    Plant Plants
                </button>
            </div>
      </div>
      { state.mode === 'sproutSeeds'  && state.fields.map(field => <SproutSeeds key={uuid()} />) }
      { state.mode === 'potSprouts'   && state.fields.map(field => <PotSprouts key={uuid()} />) }
      { state.mode === 'plantPlants'  && state.fields.map(field => <PlantPlants key={uuid()} />) }

  </div>
  )
}

export default App