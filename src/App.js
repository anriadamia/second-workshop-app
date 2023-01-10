import logo from './logo.svg';
import './App.css';

function App() {
  {/* პირველი სავარჯიშო რაც მივხვდი */}
  // const Users=[
  //  {name: "anri", age:22, surname:"adamia", id:1},
  //  {name:"giorgi", age:21, surname:"tkeshelashvili",id:2},
  //  {name:"levani", age:23, surname:"tavdgiridze", id:3},
  //  {}
  // ]
   
  // მეორე სავარჯიშო
  const Navbar=()=>{
    return <nav>
      <ul>
         <li>Home</li>
         <li>About</li>
         <li>Gallery</li>
         <li>Contact Us</li>
      </ul>
    </nav>
  }

  const Footer=()=>{
    return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, adipisci atque repudiandae corporis iusto sit doloribus similique voluptates distinctio vitae fuga praesentium quia quisquam autem, temporibus a necessitatibus laboriosam. Earum.
</p>
}

const Wrapper=()=>{
 return <>
 <Navbar/>
 <Footer/>
 </>
 
}
  
   return (
     <div className="App">
      <>
      {/* {Users.map((userInfo)=>{
       return <div>
         <p>Name: {userInfo.name}</p>
         <p>Surname: {userInfo.surname}</p>
         <p>Age: {userInfo.age}</p>
         <p>ID: {userInfo.id}</p>
 
       </div>
       
      })} */}
      {/* პირველი სავარჯიშო რაც მივხვდი */}
     
     {/* მეორე სავარჯიშო, ესაა ამ დროისთვის რისი გაკეთებაც შევძელი და დანარჩენს კი განვიხილავთ ვორქშოფზე*/}
     <Wrapper/>
      </>
     </div>
 
   );
 }
export default App;
