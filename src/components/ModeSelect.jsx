function ModeSelect(updateState) {
    return (
        <div className="card modeSelect">
            <div className='buttons'>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'sproutSeeds', modeDescription: 'Sprouting Seeds'}))}>
                    Sprout Seeds
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantSeeds', modeDescription: 'Planting Seeds'}))}>
                    Plant Seeds
                </button>
                <button type='button' className='modeButton' onClick={() => updateState(({ mode: 'plantPlants', modeDescription: 'Planting Plants'}))}>
                    Plant Plants
                </button>
            </div>
        </div>   
    )
}

export default ModeSelect