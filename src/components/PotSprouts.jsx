

import ActionButtons from './ActionButtons'

import handleEnter from '../modules/handleEnter'

function PlantSeeds () {

    const plantSeeds = (
        <div className='PlantSeeds'>
            <div className='inputField'>
            <label htmlFor='podAssetTag' >Pod Asset Tag: </label>
            <input className='assetTag podAssetTag' onKeyUp={event => handleEnter(event)}/>
            <label htmlFor='potAssetTag'>Pot Asset Tag: </label>
            <input className='assetTag potAssetTag' onKeyUp={event => handleEnter(event)}/>
            </div>
            {<ActionButtons />}
        </div>
    )
    return plantSeeds
}

export default PlantSeeds

