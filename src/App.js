import {useEffect} from "react";

import './App.css';
import { fetchUserAction } from "./actions/fetchUserAction";
import { deleteUserAction } from "./actions/deleteUserAction";
import { useDispatch, useSelector } from "react-redux";

function App() {

const { userList } = useSelector((state) => state.userReducer);
const dispatch = useDispatch();


const getEmployees = () => {
  dispatch(fetchUserAction());
};

const deleteUser = (id) => {
  dispatch(deleteUserAction(id));
}


useEffect(() => {
  getEmployees();
}, []);



 
  

  return (
    <div className="App">
      {/* <form onSubmit={HandleCreate}>
        <h1>Create new user</h1>
        <input 
        onChange={(event) => setName(event.target.value)} 
        value={name}
        placeholder="name"
        />
        <br/>
        <input 
        onChange={(event) => setUsername(event.target.value)} 
        value={username}
        placeholder="username"
        />
        <br/>
        <input 
        onChange={(event) => setEmail(event.target.value)} 
        value={email}
        placeholder="email"
        />
        <br/>
        <button type="submit">CREATE</button>
      </form> */}
      
      {userList.map((el) => (
        <div key={el.id} className="employees">
        <div>{el.id}</div>
        <div>{el.name}</div>
        <button onClick={() => deleteUser(el.id)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default App;
