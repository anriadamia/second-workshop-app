import logo from './logo.svg';
import './App.css';

function App() {
 const Users=[
  {name: "anri", age:22, surname:"adamia", id:1},
  {name:"giorgi", age:21, surname:"tkeshelashvili",id:2},
  {name:"levani", age:23, surname:"tavdgiridze", id:3},
  {}
 ]
  
 
  return (
    <div className="App">
     <>
     {Users.map((userInfo)=>{
      return <div>
        <p>Name: {userInfo.name}</p>
        <p>Surname: {userInfo.surname}</p>
        <p>Age: {userInfo.age}</p>
        <p>ID: {userInfo.id}</p>

      </div>
      
     })}
     </>
    </div>

  );
}

export default App;
