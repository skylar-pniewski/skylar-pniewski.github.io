import './App.css';
import Portfolio from './Portfolio';
import Home from './Home';
import {BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div id="Unity"></div>
//     </div>
//   );
// }

function App() {
  return (
        <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        <div id="rendertarget">
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route exact path="/portfolio" element={<Portfolio />}>
          </Route>
        </Routes>
        </div>
        </BrowserRouter>
  );
}


export default App;
