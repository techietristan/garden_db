import { useStore } from 'zustand'
import handleEnter from '../modules/handleEnter'

function Field(props) {
    const field = (
        <div className='field' id={props.id}>
            <label htmlFor={`${props.className}`} >{props.description}</label>
            <input className={`assetTag ${props.className}`} onKeyUp={event => handleEnter(event)} onChange={ useStore.handleChange }/>
        </div>
    )
    return field
}

export default Field