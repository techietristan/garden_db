import { v4 as uuid } from 'uuid'

import './App.css'

import ModeSelect from './components/ModeSelect'
import PlantPlants from './components/PlantPlants'
import PotSprouts from './components/PotSprouts'
import SproutSeeds from './components/SproutSeeds'

import { useStore } from './modules/store'

function App() {
  const mode = useStore((store) => store.mode);
  const modeDescription = useStore((store) => store.modeDescription)
  const fields = useStore((store) => store.fields);

  return (
    <div className="App">
      <h1>The Garden Database</h1>
      <h2>{modeDescription}</h2>
      <ModeSelect />
      { mode === 'sproutSeeds'  && fields.map((field, index) => <SproutSeeds  key={uuid()} index={index} />) }
      { mode === 'potSprouts'   && fields.map((field, index) => <PotSprouts   key={uuid()} index={index} />) }
      { mode === 'plantPlants'  && fields.map((field, index) => <PlantPlants  key={uuid()} index={index} />) }

  </div>
  )
}

export default App