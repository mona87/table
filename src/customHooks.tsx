import { useSelectionContext } from './tableContext';

const useHook = () => {

	const { selectionStore, selectAll, setSelectAll, setShowAlert, setSelectionStore } = useSelectionContext();

	const toggleCheckbox = (id: number) => {
		setSelectionStore(selectionStore.map(obj => {
			if (obj.id === id) {
				return { ...obj, selected: !obj.selected }
			}
			return obj
		}))
	}

	const updateSelectAll = () => {
		if (selectionStore.every(({ selected }) => selected === true)) {
			setSelectAll(true)
		}
		else if (selectionStore.every(({ selected }) => selected === false)) {
			setSelectAll(false)
		}
		else {
			setSelectAll('indeterminate')
		}
	}

	const updateCheckbox = () => {
		setSelectionStore(selectionStore.map(obj => {
			return { ...obj, selected: selectAll === 'indeterminate' || !selectAll ? true : false }
		}))
	}

	const toggleAlert = (value: boolean) => setShowAlert(value)

	const handleCounter = () => selectionStore.filter(({ selected }) => selected).length;

	const getAvailableFiles = () => selectionStore.filter(({ selected }) => selected === true)
			.filter(({ status }) => status === 'Available');

	return {
		toggleCheckbox,
		updateSelectAll,
		updateCheckbox,
		toggleAlert,
		handleCounter,
		getAvailableFiles
	}

}

export default useHook;

