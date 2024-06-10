import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount, ...rest] = useState(0);
  const [users, setUsers] = useState([
    { id: 101, name: "David", salary: 200000 },
    { id: 102, name: "Anna", salary: 100000 },
    { id: 103, name: "Valod", salary: 350000 },
    { id: 104, name: "Ramzes", salary: 90000 },
  ]);

  const salaryUp = (id) => {
    
    // // let temp = [...users]
    // // let found = temp.find(x=>x.id == id)
    // // found.salary+=50000
    // // setUsers(temp)
    setUsers(
      users.map((el) => 
        el.id == id ? { ...el, salary: el.salary + 50000 } : el
      )
    );
  };
  const salaryDown = (id) => {
    
    // // let temp = [...users]
    // // let found = temp.find(x=>x.id == id)
    // // found.salary+=50000
    // // setUsers(temp)
    setUsers(
      users.map((el) => 
        el.id == id ? { ...el, salary: el.salary - 50000 } : el
      )
    );
  };
  function remove(id){
setUsers(users.filter(el=>el.id != id))
  }
  return (
    <>
      <h1>Barev {count}</h1>
      <h2>Hajox</h2>
      <button onClick={() => setCount((count) => count + 1)}>Up</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((el) => {
            
            return (
              <tr key={crypto.randomUUID()}>
                {" "}
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.salary}</td>
                <td>
                  <button onClick={() => salaryUp(el.id)}>Up salary</button>
                  <button onClick={() => salaryDown(el.id)}>Down salary</button>
                  <button onClick={() =>remove(el.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
