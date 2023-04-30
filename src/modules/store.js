import { create } from 'zustand'
import { v4 as uuid } from 'uuid'


const sproutSeedsFieldSet = () => ({
  id: uuid(),
  type: 'sproutSeeds',
  fieldSet: [{
      label: 'Seed Asset Tag',
      className: 'seedAssetTag',
      value: null},{
      label: 'Pod Asset Tag',
      className: 'podAssetTag',
      value: null},{
      label: 'Seed UPC',
      className: 'seedUPC',
      value: null},{
      label: 'Seed Name',
      className: 'seedName',
      value: null
  }]
})

const potSproutsFieldSet = () => ({
  id: uuid(),
  type: 'potSprouts',
  fieldSet: [{
      label: 'Pod Asset Tag',
      className: 'podAssetTag',
      value: null},{
      label: 'Pot Asset Tag',
      className: 'potAssetTag',
      value: null
  }]
})

const plantPlantsFieldSet = () => ({
  id: uuid(),
  type: 'plantPlants',
  fieldSet: [{
      label: 'Pot Asset Tag',
      className: 'potAssetTag',
      value: null},{
      label: 'Plot Asset Tag',
      className: 'plotAssetTag',
      value: null
  }]
})

const getState = (state, mode, modeDescription, fieldSetTemplate) => {
  const fieldSetsForCurrentMode = state.fieldSets.filter(fieldSet => fieldSet.type === mode).length
  const fieldSets = (fieldSetsForCurrentMode ? [...state.fieldSets] : [...state.fieldSets, fieldSetTemplate()])
  return ({ mode, modeDescription, fieldSetTemplate, fieldSets })
}

const addFields = (state) => ({
  ...state,
  fieldSets: [...state.fieldSets, state.fieldSetTemplate()]
})

const initialState = getState({fieldSets: [sproutSeedsFieldSet()]}, 'sproutSeeds', 'Sprouting Seeds', sproutSeedsFieldSet)
  
export const useStore = create((set) => ({
  ...initialState,
  sproutSeeds: () => set(state => getState(state, 'sproutSeeds', 'Sprouting Seeds', sproutSeedsFieldSet)),
  potSprouts: () => set(state => getState(state, 'potSprouts', 'Potting Sprouts', potSproutsFieldSet)),
  plantPlants: () => set(state => getState(state, 'plantPlants', 'Planting Plants', plantPlantsFieldSet)),
  
  addFields: () => set(state => addFields(state)),
  deleteFieldSet: (id) => set(state => ({...state, fieldSets: state.fieldSets.filter(fieldSet => fieldSet.id != id)})),
}))