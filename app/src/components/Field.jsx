import { useStore } from '../modules/store'
import handleEnter from '../modules/handleEnter'

function Field(props) {
    const handleChange = useStore(state => state.handleChange)
    const fieldSetId = props.fieldSetId
    const fieldClass = props.className
    const value = props.value
    const field = (
        <div className='field'>
            <label htmlFor={`${fieldClass}`} >{`${props.label} :`} </label>
            <input 
                className={`assetTag ${fieldClass}`} 
                value={value}
                onKeyUp={event => handleEnter(event)}
                onChange={(event) => handleChange(fieldSetId, fieldClass, event.target.value)}
            />
        </div>
    )
    return field
}

export default Field