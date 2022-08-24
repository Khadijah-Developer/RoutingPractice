import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,  Routes, Route,Link } from "react-router-dom";
import Home from "./components/Home";
import Number from './components/Number';
import Word from './components/Word';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 

          {/* <Route exact path="/home" >
            <Home />
          </Route> */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/:id" element={<Number />} />
          <Route exact path="/:word/:textColor/:backgroundColor" element={<Word />}/>
{/* 
          <Route exact  path="/:id">
              <Number />
          </Route> */}
{/* 
          <Route exact path="/:word/:textColor/:backgroundColor" >
            <Word />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
 }
export default App;


// material try for router 

// const Home = (props) => {
//   return (
//     <h1 style={{color: "red"}}>Home Component</h1>
//   );
// }
    
// const About = (props) => {
//   return (
//     <h1 style={{color: "blue"}}>About Component</h1>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//           <BrowserRouter>
//       <h1>Routing Example</h1>
//       <p>
//         <Link to="/">Home</Link>
//          | 
//         <Link to="/about">About</Link>   
//         </p>
//        <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </BrowserRouter>

//     </div>
//   );
// }

// export default App;
