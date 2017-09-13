import { getList,getItem,saveItem,updateItem,deleteItem } from '../api';

export const DATA_IS_LOADING = 'DATA_IS_LOADING'
export const DATA_HAS_ERROR = 'DATA_HAS_ERROR'
export const ENTITY_LIST = 'ENTITY_LIST'
export const ENTITY_ITEM = 'ENTITY_ITEM'
export const ENTITY_ITEM_CREATED = 'ENTITY_ITEM_CREATED'
export const ENTITY_ITEM_UPDATED = 'ENTITY_ITEM_UPDATED'
export const ENTITY_ITEM_DELETED = 'ENTITY_ITEM_DELETED'

// ------------------------------------
// Actions
// ------------------------------------
export function loadItemList ( entity ) {
  return (dispatch, getState) => {
		dispatch(dataIsLoading(true));
		getList(entity)
		.then((response) => {if (!response.ok) {throw Error(response.statusText);}return response;})
		.then((response) => response.json())
		.then((response) => dispatch({type: ENTITY_LIST, response}))
		.catch(() => dispatch(dataHasError(true)));
  }
}
export function loadItemData ( entity, id) {
  return (dispatch, getState) => {
		dispatch(dataIsLoading(true));
		getItem(entity,id)
		.then((response) => {if (!response.ok) {throw Error(response.statusText);}return response;})
		.then((response) => response.json())
		.then((response) => dispatch({type: ENTITY_ITEM, response}))
		.catch(() => dispatch(dataHasError(true)));
  }
}
export function saveItemData ( entity, data ) {
  return (dispatch, getState) => {
		dispatch(dataIsLoading(true));
		saveItem( entity, data )
		.then((response) => {if (!response.ok) {throw Error(response.statusText);}return response;})
		.then((response) => response.json())
		.then((status) => dispatch({type: ENTITY_ITEM_CREATED, status}))
		.catch(() => dispatch(dataHasError(true)));
  }
}
export function updateItemData ( entity, data ) {
  return (dispatch, getState) => {
		dispatch(dataIsLoading(true));
		updateItem( entity, data )
		.then((response) => {if (!response.ok) {throw Error(response.statusText);}return response;})
		.then((response) => response.json())
		.then((status) => dispatch({type: ENTITY_ITEM_UPDATED, status}))
		.catch(() => dispatch(dataHasError(true)));
  }
}
export function deleteItemData ( entity, id ) {
  return (dispatch, getState) => {
		dispatch(dataIsLoading(true));
		deleteItem( entity, id )
		.then((response) => {if (!response.ok) {throw Error(response.statusText);}return response;})
		.then((response) => response.json())
		.then((status) => dispatch({type: ENTITY_ITEM_DELETED, status}))
		.catch(() => dispatch(dataHasError(true)));
  }
}
/*DATA IS LOADING*/
export const dataIsLoading = ( bool ) => { return {type: DATA_IS_LOADING, bool}; }
/*DATA HAVE ERROR*/
export const dataHasError = ( bool ) => {return {type: DATA_HAS_ERROR, bool};}


const ACTION_HANDLERS = {
  [ENTITY_LIST]    : (state, action) => Object.assign({}, state, {dataList: action.response}),
	[ENTITY_ITEM] : (state, action) => Object.assign({}, state, {dataItem: action.response}),
	[DATA_IS_LOADING]: (state, action) => Object.assign({}, state, {isLoading: action.bool}),
	[ENTITY_ITEM_CREATED]: (state, action) => Object.assign({}, state, {isCreated: true}),
	[ENTITY_ITEM_DELETED]: (state, action) => Object.assign({}, state, {isDeleted: true}),
	[ENTITY_ITEM_UPDATED]: (state, action) => Object.assign({}, state, {isUpdated: true}),
}

export default function productReducer (state = {}, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
