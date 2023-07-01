import { useStore } from '../modules/store'
import ModeButton from './ModeButton'

function ModeSelect() {

    const modeSelect = (
        <div className="card modeSelect">
            <div className='buttons verbs'>
                <ModeButton onClick={useStore((store) => store.sprout)} buttonText='Sprout' />
                <ModeButton onClick={useStore((store) => store.pot)} buttonText='Pot' />
                <ModeButton onClick={useStore((store) => store.plant)} buttonText='Plant' />
            </div>
            <div className='buttons nouns'>
                
            </div>
        </div>
    )

    return modeSelect
}

export default ModeSelect