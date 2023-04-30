import { useStore } from '../modules/store'

function ModeSelect() {

    const modeSelect = (
        <div className="card modeSelect">
            <div className='buttons'>
                <button type='button' className='modeButton' onClick={useStore((store) => store.sproutSeeds)}>
                    Sprout Seeds
                </button>
                <button type='button' className='modeButton' onClick={useStore((store) => store.potSprouts)}>
                    Pot Sprouts
                </button>
                <button type='button' className='modeButton' onClick={useStore((store) => store.plantPlants)}>
                    Plant Plants
                </button>
            </div>
        </div>
    )

    return modeSelect
}

export default ModeSelect