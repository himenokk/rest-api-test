import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {

const [state, setState] = useState([]);
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");

const getEmployees = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setState(response.data);
    });
};

//"name": "Ervin Howell",
// "username": "Antonette",
// "email": "Shanna@melissa.tv"
  
const handleEmployeeDelete = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
    setState((prevState) => prevState.filter((el) => el.id !== id));
  });
};

const HandleCreate = (e) => {
  e.preventDefault();
  let body = {

    name,
    username,
    email,
  }
  axios.post(`https://jsonplaceholder.typicode.com/users/1/posts`, body)
  .then(response => {
    console.log(response)
  });
  console.log("submit");
}

useEffect(() => {
  getEmployees();
}, []);

 
  

  return (
    <div className="App">
      <form onSubmit={HandleCreate}>
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
      </form>
      
      {state.map((el) => (

        <div key={el.id} className="employees">
        <div>{el.id}</div>
        <div>{el.name}</div>
        <button onClick={() => handleEmployeeDelete(el.id)}>Delete</button>
        </div>
      ))}

    </div>
  );
}

export default App;
