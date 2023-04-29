import { useStore } from 'zustand'
import handleEnter from '../modules/handleEnter'

function Field(props) {
    const field = (
        <div className='field'>
            <label htmlFor={`${props.className}`} >{`${props.label} :`} </label>
            <input className={`assetTag ${props.className}`} onKeyUp={event => handleEnter(event)} onChange={ useStore.handleChange }/>
        </div>
    )
    return field
}

export default Field