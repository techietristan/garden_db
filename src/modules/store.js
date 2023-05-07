import { create } from 'zustand'
import { sproutSeedsFieldSet, potSproutsFieldSet, plantPlantsFieldSet } from './fieldSets'
import { updateState, addFieldSet, deleteFieldSet, updateField } from './reducers'

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