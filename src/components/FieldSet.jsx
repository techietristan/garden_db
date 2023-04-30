import ActionButtons from './ActionButtons'
import Field from './Field'
import { v4 as uuid } from 'uuid'

function FieldSet(props) {
    const fields = props.fields
    const id = props.id

    const fieldSet = (
        <div className={`fieldSet ${props.mode}`} id={id}>
            <div className='inputFields'>
                {fields.map(field => <Field className={field.className} label={field.label} key={uuid()} />)}
            </div>
            {<ActionButtons id={id}/>}
        </div>
    )
    return fieldSet
}

export default FieldSet