import ActionButtons from './ActionButtons'
import Field from './Field'
import { v4 as uuid } from 'uuid'

function FieldSet(props) {
    const fields = props.fields
    const fieldSet = (
        <div className={`fieldSet ${props.mode}`}>
            <div className='inputFields'>
                {console.log(fields)}
                {fields.map(field => <Field className={field.className} label={field.label} key={uuid()} />)}
            </div>
            {<ActionButtons />}
        </div>
    )
    return fieldSet
}

export default FieldSet