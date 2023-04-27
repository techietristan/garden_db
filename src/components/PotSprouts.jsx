import ActionButtons from './ActionButtons'
import Field from './Field'
import { v4 as uuid } from 'uuid'

function PotSprouts(props) {

    const potSprouts = (
        <div className='fieldSet PotSprouts' id={props.index}>
            <div className='inputFields'>
                <Field id={uuid()} className={'podAssetTag'} description={'Pod Asset Tag: '}/>
                <Field id={uuid()} className={'potAssetTag'} description={'Pot Asset Tag: '}/>
            </div>
            {<ActionButtons index={props.index} />}
        </div>
    )
    return potSprouts
}

export default PotSprouts

