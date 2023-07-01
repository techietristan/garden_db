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
  
export {
    updateState,
    addFieldSet,
    deleteFieldSet,
    updateField
}