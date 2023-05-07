import { useStore } from '../modules/store'
import ModeButton from './ModeButton'

function ModeSelect() {

    const modeSelect = (
        <div className="card modeSelect">
            <div className='buttons'>
                <ModeButton onClick={useStore((store) => store.sproutSeeds)} buttonText='Sprout Seeds' />
                <ModeButton onClick={useStore((store) => store.potSprouts)} buttonText='Pot Sprouts' />
                <ModeButton onClick={useStore((store) => store.plantPlants)} buttonText='Plant Plants' />
            </div>
        </div>
    )

    return modeSelect
}

export default ModeSelect