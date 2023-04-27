import ActionButtons from './ActionButtons'
import Field from './Field'
import { v4 as uuid } from 'uuid'

function SproutSeeds(props) {

    const sproutSeeds = (
        <div className='fieldSet SproutSeeds' id={props.index}>
            <div className='inputFields'>
                <Field id={uuid()} className={'seedAssetTag'} description={'Seed Asset Tag: '}/>
                <Field id={uuid()} className={'podAssetTag'} description={'Pod Asset Tag: '}/>
            </div>
            <div className='inputFields'>
                <Field id={uuid()} className={'seedUPC'} description={'Seed UPC: '}/>
                <Field id={uuid()} className={'seedName'} description={'Seed Name: '}/>
            </div>
            {<ActionButtons index={props.index} />}
        </div>
    )
    return sproutSeeds
}

export default SproutSeeds