import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);

  function AddUserData(userName, userAge) {
    setUsersList((prevUsers) => {
      return [...prevUsers, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUser onAddUser={AddUserData} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
