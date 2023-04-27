import { create } from 'zustand'
import { v4 as uuid } from 'uuid'


const sproutSeedsFields = ({
  id: uuid(),
  fieldSet: [{
      description: 'Seed Asset Tag',
      value: null},{
      description: 'Pod Asset Tag',
      value: null},{
      description: 'Seed UPC',
      value: null},{
      description: 'Seed Name',
      value: null
  }]
})

const potSproutsFields = ({
  id: uuid(),
  fieldSet: [{
      description: 'Pod Asset Tag',
      value: null},{
      description: 'Pot Asset Tag',
      value: null
  }]
})

const plantPlantsFields = ({
  id: uuid(),
  fieldSet: [{
      description: 'Pot Asset Tag',
      value: null},{
      description: 'Plot Asset Tag',
      value: null
  }]
})




const sproutSeeds = ({
  mode: 'sproutSeeds',
  modeDescription: 'Sprouting Seeds',
  fieldsTemplate: sproutSeedsFields,
  fields: []
})

const potSprouts = ({
  mode: 'potSprouts',
  modeDescription: 'Potting Sprouts',
  fieldsTemplate: potSproutsFields,
  fields: []
})

const plantPlants = ({
  mode: 'plantPlants',
  modeDescription: 'Planting Plants',
  fieldsTemplate: plantPlantsFields,
  fields: []
})




const addFields = (state) => ({
  ...state,
  fields: [...state.fields, state.fieldsTemplate]
})

const deleteFieldSet = (state) => {
    console.log(state)
    return ({
      ...state,
      fields: state.fields.filter((field, index) => index !== 1 )
    })
}
  
export const useStore = create((set) => ({
  ...sproutSeeds,
  sproutSeeds: () => set({...sproutSeeds, fields: [...sproutSeeds.fields, sproutSeeds.fieldsTemplate]}),
  potSprouts: () => set({...potSprouts, fields: [...potSprouts.fields, potSprouts.fieldsTemplate]}),
  plantPlants: () => set({...plantPlants, fields: [...plantPlants.fields, plantPlants.fieldsTemplate]}),
  addFields: () => set(state => addFields(state)),
  deleteFieldSet: () => set((state) => deleteFieldSet(state))
}))