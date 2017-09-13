
const API_ROOT = 'http://localhost:3001/api/';

export function getList( entity ) {
  return fetch( API_ROOT + entity);
}
export function getItem( entity,id ) {
  return fetch( API_ROOT + entity + '/' + id);
}
export function saveItem( entity, data  ) {
  return fetch( API_ROOT + entity,{method: 'POST',headers: {'Content-Type': 'application/x-www-form-urlencoded'},body: convertToQS(data)});
}
export function updateItem( entity, data  ) {
  return fetch( API_ROOT + entity + '/' + data.id,{method: 'PUT',headers: {'Content-Type': 'application/x-www-form-urlencoded'},body: convertToQS(data)});
}
export function deleteItem( entity, id  ) {
  return fetch( API_ROOT + entity + '/' + id,{method: 'DELETE',headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
}


export function convertToQS( data ){
	const params = Object.keys(data).map((key) => {return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);}).join('&');
	return params
}