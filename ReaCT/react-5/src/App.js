
import React, {useState, useEffect} from "react";
import './App.css';
import Dropdown from "./Dropdown/Dropdown";
import Form from "./Dropdown/Form";


//
// const Dropdownn = ({item}) => {
//     const  [Dopen, setDopen] = useState(false);
//     const toggleDropdown = () =>{
//         setDopen((prvVal) => !prvVal)
//     }
//
//     return (
//         <div>
//             <button onClick={toggleDropdown}>click</button>
//             {!!Dopen &&(
//                 <div>
//                 <ul>
//                     {item.map(el => <li>{el}</li>)}
//                 </ul>
//             </div>)}
//         </div>
//     )
// }



function App() {
  // const [count, setValFun] = useState(1);
  // const [todo, setTodo] = useState(null);
  //
  // const FetchTodo = async (count ) => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
  //     const data = await response.json();
  //     setTodo(data);
  //     console.log(data);
  // }
  // useEffect(() => {
  //     FetchTodo(count);
  //
  // }, [count]);

  return (
<div><h1>(APP)</h1>
    <hr/>
    <Dropdown/>
    <br/>
    <div className="flex">
      <Form/>
    </div>

</div>
    // <div>
    //     <Dropdownn item={[1,2,3,4]}/>
    //     <h1>{count}</h1>
    //   <button onClick={() => setValFun(count+1)}>++</button>
    //
    //     <>
    //         {
    //             !!todo && (
    //                 <> <h3>{todo.id} <br/> {todo.title}</h3>  <h2>{todo.completed ? 'True' : 'False'}</h2> </>
    //             )
    //         }
    //         </>
    //     <Dropdown/>
    // </div>
  );
}

export default App;
