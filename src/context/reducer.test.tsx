import { expect, describe, it, } from "vitest";
import reducer from './reducer';
import mockData from '../tests/mockData'
const state = mockData;

describe("Table Reducer Logic", () => {

	it('should toggle showAlert from false to true when "TOGGLE_ALERT" action is dispatched with a payload of true ', async () => {
		// arrange
		const initialState = state;
		// act
		const { showAlert } = reducer(initialState, { type: 'TOGGLE_ALERT', payload: true });
		// assert
		expect(showAlert).toEqual(true);
	});


	it('should return the number of selected files when "UPDATE_COUNT" action is dispatched', () => {
		// arrange
		const nextState = {
			...state, selectionStore: [{
				id: 0,
				name: 'prince',
				device: 'apple',
				path: '/documents/folder',
				status: 'Scheduled',
				selected: true,
			},
			{
				id: 1,
				name: 'king',
				device: 'windows',
				path: '/library/folder',
				status: 'Scheduled',
				selected: false,
			},
			]
		};
		// act
		const { count } = reducer(nextState, { type: 'UPDATE_COUNT' });
		// assert
		expect(count).toEqual(1);
	});


	it('should show indeterminate checkbox when there is at least one selected file and one file selected when "UPDATE_SELECT_ALL_CHECKBOX"  action is dispatched', () => {
		// arrange
		const nextState = {
			...state, selectionStore: [{
				id: 0,
				name: 'prince',
				device: 'apple',
				path: '/documents/folder',
				status: 'Available',
				selected: true,
			},
			{
				id: 1,
				name: 'king',
				device: 'windows',
				path: '/library/folder',
				status: 'Scheduled',
				selected: false,
			}]
		};
		// act
		const { selectAll } = reducer(nextState, { type: 'UPDATE_SELECT_ALL_CHECKBOX' });
		// assert
		expect(selectAll).toEqual('indeterminate');
	});


	it('should show the number of available files for download when "UPDATE_AVAILABLE_FILES" is dispatched', () => {
		// arrange
		const nextState = {
			...state, selectionStore: [{
				id: 0,
				name: 'prince',
				device: 'apple',
				path: '/documents/folder',
				status: 'Available',
				selected: true,
			},
			{
				id: 1,
				name: 'king',
				device: 'windows',
				path: '/library/folder',
				status: 'Scheduled',
				selected: true,
			}]
		};
		// act
		const { availableFiles } = reducer(nextState, { type: 'UPDATE_AVAILABLE_FILES' });
		// assert
		expect(availableFiles).toEqual(1);
	});



	it('should toggle the checkbox from false to true when "TOGGLE_CHECKBOX" is dispatched with a payload of the checkbox id ', () => {
		// arrange
		const nextState = state;
		// act
		const { selectionStore } = reducer(nextState, { type: 'TOGGLE_CHECKBOX', payload: 2 });
		// assert
		expect(selectionStore[2].selected).toEqual(true);
	});


	it('should select all checkboxes if selectALL is false and "UPDATE_CHECKBOX" is dispatched', () => {
		// arrange
		const nextState = { ...state };
		// act
		const { selectionStore } = reducer(nextState, { type: 'UPDATE_CHECKBOX' });
		// assert
		expect(selectionStore[0].selected).toEqual(true);
		expect(selectionStore[1].selected).toEqual(true);
		expect(selectionStore[2].selected).toEqual(true);

	});

	it('should deselect all checkboxes if selectALL is true and "UPDATE_CHECKBOX" is dispatched', () => {
		// arrange
		const nextState = { ...state, selectAll: true };
		// act
		const { selectionStore } = reducer(nextState, { type: 'UPDATE_CHECKBOX' });
		// assert
		expect(selectionStore[0].selected).toEqual(false);
		expect(selectionStore[1].selected).toEqual(false);
		expect(selectionStore[2].selected).toEqual(false);

	});

});