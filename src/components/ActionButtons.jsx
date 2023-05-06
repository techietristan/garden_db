import { useStore } from '../modules/store'

function ActionButtons(props) {
    const id = props.id
    const deleteFieldSet = useStore(state => state.deleteFieldSet)
    const addFieldSet = useStore(state => state.addFieldSet)

    const actionButtons = (
        <div className='buttons'>
            <button className='actionButton updateOneEntry' title='Update the Database with this Entry.'>&#9989;</button>
            <button className='actionButton AddInputs' title='Add an Entry.' onClick={() => addFieldSet()}>&#10133;</button>
            <button className='actionButton deleteInputs' title='Delete this Entry.' onClick={ () => deleteFieldSet(id)}>&#10060;</button>
        </div>
    )

    return actionButtons
}

export default ActionButtons