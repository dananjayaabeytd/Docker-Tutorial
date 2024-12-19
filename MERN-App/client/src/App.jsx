import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  //Fetch users
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <>
      <div className='App'>
        <div>
          <h2>Users List</h2>
          {users.length > 0 ? (
            <ul>
              {users.map(user => (
                <li key={user._id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No users found...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
