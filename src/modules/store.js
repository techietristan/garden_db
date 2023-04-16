import { create } from 'zustand'


const sproutSeedsFields = ({
    seedAssetTag: null, 
    podAssetTag: null,
    seedUPC: null,
    seedName: null 
  })
  
  const potSproutsFields = ({
    podAssetTag: null,
    potAssetTag: null
  })
  
  const plantPlantsFields = ({
    potAssetTag: null,
    plotAssetTag: null
  })
  
const sproutSeeds = ({
    mode: 'sproutSeeds',
    modeDescription: 'Sprouting Seeds',
    fields: [ sproutSeedsFields ]
  })
  
  const potSprouts = ({
    mode: 'potSprouts',
    modeDescription: 'Potting Sprouts',
    fields: [ potSproutsFields ]
  })
  
  const plantPlants = ({
    mode: 'plantPlants',
    modeDescription: 'Planting Plants',
    fields: [ plantPlantsFields ]
  })

export const useStore = create((set) => ({
    ...sproutSeeds,
    sproutSeeds: () => set(sproutSeeds),
    potSprouts: () => set(potSprouts),
    plantPlants: () => set(plantPlants),
    addFields: (state) => set({...state, fields: [ ...state.fields, state.fields[0]]})
}))