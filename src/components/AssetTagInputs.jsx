import { useState } from 'react'

function AssetTagInputs(state) {

  const handleEnter = (event) => {
    
    event.preventDefault() 
    if (event.which == 13) {
      const inputClassName = event.target
      console.log(inputClassName)
      if (inputClassName.classList.contains('seedAssetTag')){
        document.querySelectorAll('.podAssetTag')[0].focus()
        
      }
    }
  }

  const actionButtons = (
  <div className='buttons'>
    <button className='actionButton deleteInputs' title='Delete this Entry.'>&#10060;</button>
    <button className='actionButton AddInputs' title='Add an Entry.'>&#10133;</button> 
    <button className='actionButton updateDB' title='Update the Database.'>&#9989;</button>
  </div>)

  const sproutSeeds = (    
      <div className='SproutSeeds'>
        <div className='inputField'>
          <label htmlFor='seedUPC' autoFocus>Seed UPC: </label>
          <input className='assetTag seedUPC' onKeyUp={event => handleEnter(event)}/>
          <label htmlFor='seedAssetTag' >Seed Asset Tag: </label>
          <input className='assetTag seedAssetTag' onKeyUp={event => handleEnter(event)}/>
        </div>
        <div className='inputField'>
          <label htmlFor='seedName' >Seed Name: </label>
          <input className='assetTag seedName' onKeyUp={event => handleEnter(event)}/>
          <label htmlFor='podAssetTag'>Pod Asset Tag: </label>
          <input className='assetTag podAssetTag' onKeyUp={event => handleEnter(event)}/>
        </div>
        {actionButtons}
      </div>
    )


  return sproutSeeds
}

export default AssetTagInputs