import { TableInterface, ActionTypes } from './types'

//business logic for table
const reducer = (state: TableInterface, action: ActionTypes) => {
  const { files, selectAll } = state
  switch (action.type) {
    case 'UPDATE_ALL_CHECKBOXES': {
      const arr = files.map((obj) => {
        return {
          ...obj,
          selected: selectAll === 'indeterminate' || !selectAll ? true : false,
        }
      })
      return { ...state, files: arr }
    }

    case 'UPDATE_SELECT_ALL_CHECKBOX': {
      if (files.every(({ selected }) => selected === true)) {
        return { ...state, selectAll: true }
      } else if (files.every(({ selected }) => selected === false)) {
        return { ...state, selectAll: false }
      } else {
        return { ...state, selectAll: 'indeterminate' }
      }
    }
    case 'TOGGLE_CHECKBOX': {
      const arr = files.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, selected: !obj.selected }
        }
        return obj
      })
      return { ...state, files: arr }
    }
    case 'TOGGLE_ALERT': {
      return { ...state, showAlert: action.payload }
    }

    case 'UPDATE_COUNT': {
      const count = files.filter(({ selected }) => selected).length
      return { ...state, count }
    }

    case 'UPDATE_AVAILABLE_FILES': {
      const arr = files
        .filter(({ selected }) => selected === true)
        .filter(({ status }) => status === 'Available').length
      return { ...state, availableFiles: arr }
    }
    default: {
      return state
    }
  }
}

export default reducer
