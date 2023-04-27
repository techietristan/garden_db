import ActionButtons from './ActionButtons'
import Field from './Field'
import { v4 as uuid } from 'uuid'

function PlantPlants(props) {

    const plantPlants = (
        <div className='fieldSet PlantPlants' id={props.index}>
            <div className='inputFields'>
                <Field id={uuid()} className={'potAssetTag'} description={'Pot Asset Tag: '}/>
                <Field id={uuid()} className={'plotAssetTag'} description={'Plot Asset Tag: '}/>
            </div>
            {<ActionButtons index={props.index} />}
        </div>
    )
    return plantPlants
}

export default PlantPlants

