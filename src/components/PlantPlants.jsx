

import ActionButtons from './ActionButtons'

import handleEnter from '../modules/handleEnter'

function PlantPlants () {

    const plantPlants = (
        <div className='PlantPlants'>
            <div className='inputField'>
            <label htmlFor='potAssetTag' >Pot Asset Tag: </label>
            <input className='assetTag potAssetTag' onKeyUp={event => handleEnter(event)}/>
            <label htmlFor='plotAssetTag'>Plot Asset Tag: </label>
            <input className='assetTag plotAssetTag' onKeyUp={event => handleEnter(event)}/>
            </div>
            {<ActionButtons />}
        </div>
    )
    return plantPlants
}

export default PlantPlants

