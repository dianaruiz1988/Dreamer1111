import { useState } from 'react';

//* means import everything as usersService
//what is userservice that is being imported??
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)

    // after having the credentials we do usersServe.login
    //because inside userservice there is login- the actual functions we are importing here
    const user = await usersService.login(credentials); // this is the bridge that connects component to user-service.js
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}