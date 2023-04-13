import ActionButtons from './ActionButtons'

import handleEnter from '../modules/handleEnter'

function SproutSeeds () {

    const sproutSeeds = (
        <div className='SproutSeeds'>
            <div className='inputField'>
            <label htmlFor='seedAssetTag' >Seed Asset Tag: </label>
            <input className='assetTag seedAssetTag' onKeyUp={event => handleEnter(event)}/>    
            <label htmlFor='podAssetTag'>Pod Asset Tag: </label>
            <input className='assetTag podAssetTag' onKeyUp={event => handleEnter(event)}/> 
            </div>
            <div className='inputField'>
            <label htmlFor='seedUPC' autoFocus>Seed UPC: </label>
            <input className='assetTag seedUPC' onKeyUp={event => handleEnter(event)}/>    
            <label htmlFor='seedName' >Seed Name: </label>
            <input className='assetTag seedName' onKeyUp={event => handleEnter(event)}/>

            </div>
            {<ActionButtons />}
        </div>
    )
    return sproutSeeds
}

export default SproutSeeds