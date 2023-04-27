
const sproutSeedsFields = ({
    id: uuid(),
    seedAssetTag: {
        description: 'Seed Asset Tag',
        value: null
    },
    podAssetTag: {
        description: 'Pod Asset Tag',
        value: null
    },
    seedUPC: {
        description: 'Seed UPC',
        value: null
    },
    seedName: {
        description: 'Seed Name',
        value: null
    }
  })
  
  const potSproutsFields = ({
    id: uuid(),
    podAssetTag: {
        description: 'Pod Asset Tag',
        value: null
    },
    potAssetTag: {
        description: 'Pot Asset Tag',
        value: null
    }
  })
  
  const plantPlantsFields = ({
    id: uuid(),
    potAssetTag: {
        description: 'Pot Asset Tag',
        value: null
    },
    plotAssetTag: {
        description: 'Plot Asset Tag',
        value: null
    }
  })
