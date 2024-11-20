import {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {

const [state, setState] = useState([]);



const getEmployees = () => {
  
  
  axios.get("https://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      console.log(response);
    });
};

  
  

  useEffect(() => {
    getEmployees();
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
