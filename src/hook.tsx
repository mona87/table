import { SelectionInterface, ActionTypes } from './tableContext';


const reducer = (state: SelectionInterface, action: ActionTypes) => {
    const { selectionStore, selectAll } = state
    switch (action.type) {
        case 'UPDATE_CHECKBOX': {
            const arr = selectionStore.map(obj => {
                return { ...obj, selected: selectAll === 'indeterminate' || !selectAll ? true : false }
            })
            return { ...state, selectionStore: arr }
        }

        case 'UPDATE_SELECT_ALL': {
            if (selectionStore.every(({ selected }) => selected === true)) {
                return { ...state, selectAll: true }
            }
            else if (selectionStore.every(({ selected }) => selected === false)) {
                return { ...state, selectAll: false }

            }
            else {
                return { ...state, selectAll: 'indeterminate' }
            }
        }
        case 'TOGGLE_CHECKBOX': {
            const arr = selectionStore.map(obj => {
                if (obj.id === action.payload) {
                    return { ...obj, selected: !obj.selected }
                }
                return obj
            })
            return {...state, selectionStore: arr}
        }
        case 'TOGGLE_ALERT': {
            console.log(action.payload)
            return {...state, showAlert: action.payload}
        }

        case 'UPDATE_COUNT':{
           const count = selectionStore.filter(({ selected }) => selected).length;
           return {...state, count}
        }

        case 'UPDATE_AVAILABLE_FILES':{
            const arr = selectionStore.filter(({ selected }) => selected === true)
			.filter(({ status }) => status === 'Available').length;
            return {...state, availableFiles: arr}
        }
        default: {
            return state
        }

    }
}

export default reducer;