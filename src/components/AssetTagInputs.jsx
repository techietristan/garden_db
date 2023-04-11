import { useState } from 'react'

function AssetTagInputs(state) {

  const handleEnter = (event) => {
    if (event.which == 13) {
      event.preventDefault()
      let inputClassName = event.target
      if (inputClassName = 'input.seedAssetTag'){
        document.querySelectorAll('.podAssetTag')[0].focus()
      }
    }
  }

  const sproutSeeds = (    
      <div className='SproutSeeds'>
        <div className='inputField'>
          <label htmlFor='seedAssetTag' autoFocus>Seed UPC: </label>
          <input className='assetTag seedUPC' onKeyUp={event => handleEnter(event)}/>
          <label htmlFor='seedAssetTag' autoFocus>Seed Name: </label>
          <input className='assetTag seedName' onKeyUp={event => handleEnter(event)}/>
        </div>
        <div className='inputField'>
          <label htmlFor='seedAssetTag' autoFocus>Seed Asset Tag: </label>
          <input className='assetTag seedAssetTag' onKeyUp={event => handleEnter(event)}/>
          <label htmlFor='podAssetTag'>Pod Asset Tag: </label>
          <input className='assetTag podAssetTag' onKeyUp={event => handleEnter(event)}/>
        </div>
        <div className='buttons'>
          <button className='actionButton deleteInputs' title='Delete this Entry.'>&#10060;</button>
          <button className='actionButton AddInputs' title='Add an Entry.'>&#10133;</button> 
          <button className='actionButton updateDB' title='Update the Database.'>&#9989;</button>
        </div>
      </div>
    )

  return sproutSeeds
}

export default AssetTagInputs