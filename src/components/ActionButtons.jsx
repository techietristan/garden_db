function ActionButtons(state) {
    
    const actionButtons = (
        <div className='buttons'>
        <button className='actionButton deleteInputs' title='Delete this Entry.'>&#10060;</button>
        <button className='actionButton AddInputs' title='Add an Entry.'>&#10133;</button> 
        <button className='actionButton updateDB' title='Update the Database.'>&#9989;</button>
        </div>
    )
  
    return actionButtons
}
  
export default ActionButtons