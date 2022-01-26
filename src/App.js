import React from 'react';
import AddUser from './component/AddUser';
``
function App() {
  const [userList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  
  return (
   <>
     <AddUser onAddUser={addUserHandler} />
     <userList users={userList} />
    </>
  );

  }
    


export default App;
