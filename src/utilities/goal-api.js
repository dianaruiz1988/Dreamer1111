import sendRequest from './send-request';

const BASE_URL = '/api/goal';

export function goals() {
  return sendRequest(BASE_URL);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}


//make this request to the backend 
//react gets data when making fetch requests 
// this is 

//you have to tell front end that you want to create