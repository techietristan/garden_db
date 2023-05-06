import ActionButtons from './ActionButtons'
import Field from './Field'

function FieldSet(props) {
    const fields = props.fields
    const id = props.id

    const fieldSet = (
        <div className={`fieldSet ${props.mode}`} id={id} key={id}>
            <div className='inputFields'>
                {fields.map((field, index)=> <Field className={field.className} label={field.label} fieldSetId={id} value ={field.value} key={`${id}-${index}`} />)}
            </div>
            {<ActionButtons id={id}/>}
        </div>
    )
    return fieldSet
}

export default FieldSet