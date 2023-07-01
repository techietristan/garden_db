import { v4 as uuid } from 'uuid'

const sproutSeedsFieldSet = () => ({
    id: uuid(),
    type: 'sproutSeeds',
    fieldSet: [{
        label: 'Seed Asset Tag',
        className: 'seedAssetTag',
        value: ''
    }, {
        label: 'Pod Asset Tag',
        className: 'podAssetTag',
        value: ''
    }, {
        label: 'Seed UPC',
        className: 'seedUPC',
        value: ''
    }, {
        label: 'Seed Name',
        className: 'seedName',
        value: ''
    }]
})

const potSproutsFieldSet = () => ({
    id: uuid(),
    type: 'potSprouts',
    fieldSet: [{
        label: 'Pod Asset Tag',
        className: 'podAssetTag',
        value: ''
    }, {
        label: 'Pot Asset Tag',
        className: 'potAssetTag',
        value: ''
    }]
})

const plantPlantsFieldSet = () => ({
    id: uuid(),
    type: 'plantPlants',
    fieldSet: [{
        label: 'Pot Asset Tag',
        className: 'potAssetTag',
        value: ''
    }, {
        label: 'Plot Asset Tag',
        className: 'plotAssetTag',
        value: ''
    }]
})

  export {
    sproutSeedsFieldSet,
    potSproutsFieldSet,
    plantPlantsFieldSet
  }