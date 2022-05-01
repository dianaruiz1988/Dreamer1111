import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials); //bridge that connects user-api to send-requests.js
}

//const BASE_URL = api/goals
//send request will be (`${BASE_URL}/newgoal`, 'POST', credentials);
//find in routes if you forget path


//the credentials in the login function we got them from the users-service.js that we got from login form component -> to user-service -> user-api ->send-requests.js

//Start from Component- (example login component)
//users-service
//user api
//send requests - last stop in the front end - then its going to go the backend 
//first stop in backend is server.js