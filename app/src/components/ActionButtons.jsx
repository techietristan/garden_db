import { useStore } from '../modules/store'
import ActionButton from './ActionButton'

function ActionButtons(props) {
    const id = props.id
    const deleteFieldSet = useStore(state => state.deleteFieldSet)
    const addFieldSet = useStore(state => state.addFieldSet)

    const actionButtons = (
        <div className='buttons'>
            <ActionButton className='updateOneEntry' title='Update the Database with this Entry.' onClick={() => {}} buttonText='&#9989;' />
            <ActionButton className='AddInputs' title='Add an Entry.' onClick={() => addFieldSet()} buttonText='&#10133;' />
            <ActionButton className='deleteInputs' title='Delete this Entry.' onClick={ () => deleteFieldSet(id)} buttonText='&#10060;' />
        </div>
    )

    return actionButtons
}

export default ActionButtons