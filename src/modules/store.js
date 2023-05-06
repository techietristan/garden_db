import { create } from 'zustand'
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

const updateState = (state, mode, modeDescription, fieldSetTemplate) => {
  const fieldSetsForCurrentMode = state.fieldSets.filter(fieldSet => fieldSet.type == mode).length
  const fieldSets = (fieldSetsForCurrentMode ? [...state.fieldSets] : [...state.fieldSets, fieldSetTemplate()])
  return ({ mode, modeDescription, fieldSetTemplate, fieldSets })
}

const addFieldSet = (state) => {
  return ({...state, fieldSets: [...state.fieldSets, state.fieldSetTemplate()]})
}

const deleteFieldSet = (state, id) => {
  return ({ ...state, fieldSets: state.fieldSets.filter(fieldSet => fieldSet.id != id) })
}

const updateField = (state) => {
  return (fieldSetId, fieldClass, value) => {
    const fieldSets = state.fieldSets
    const updatedFieldSets = fieldSets.map((fieldSet) => {
      if (fieldSet.id == fieldSetId) {
        fieldSet.fieldSet.map(field => {
          if (field.className == fieldClass) {
            field.value = value
            return field
          } else return field
        })
        return fieldSet
      } else return fieldSet
    })
    return { ...state, fieldSets: updatedFieldSets }
  }
}

const initialState = updateState({ fieldSets: [sproutSeedsFieldSet()] }, 'sproutSeeds', 'Sprouting Seeds', sproutSeedsFieldSet)

export const useStore = create((set) => ({
  ...initialState,
  sproutSeeds: () => set(state => updateState(state, 'sproutSeeds', 'Sprouting Seeds', sproutSeedsFieldSet)),
  potSprouts: () => set(state => updateState(state, 'potSprouts', 'Potting Sprouts', potSproutsFieldSet)),
  plantPlants: () => set(state => updateState(state, 'plantPlants', 'Planting Plants', plantPlantsFieldSet)),
  addFieldSet: () => set(state => addFieldSet(state)),
  deleteFieldSet: (id) => set(state => deleteFieldSet(state, id)),
  handleChange: (fieldSetId, fieldClass, value) => set(state => updateField(state)(fieldSetId, fieldClass, value))
}))