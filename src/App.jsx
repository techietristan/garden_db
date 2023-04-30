import { v4 as uuid } from 'uuid'

import './App.css'

import ModeSelect from './components/ModeSelect'
import FieldSet from './components/FieldSet'

import { useStore } from './modules/store'

function App() {
  const mode = useStore((store) => store.mode);
  const modeDescription = useStore((store) => store.modeDescription)
  const fieldSets = useStore((store) => store.fieldSets);
  return (
    <div className="App">
      <h1>The Garden Database</h1>
      <h2>{modeDescription}</h2>
      <ModeSelect />
      {
      fieldSets
        .filter(fieldSet => fieldSet.type === mode)
        .map(fieldSet => <FieldSet mode={mode} fields={fieldSet.fieldSet} key={uuid()} id={fieldSet.id}/>)
      }

    </div>
  )
}

export default App