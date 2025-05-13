import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>User Management System</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;