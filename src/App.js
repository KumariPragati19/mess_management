// import logo from './logo.svg';
// import './App.css';

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
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Navbar'; 
import Login from './Login';
import MessManagement from './MessManagement';
import Home from './Home';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [registeredUsers, setRegisteredUsers] = React.useState([]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegistration = (registrationData) => {
    setUser(registrationData.name); 
    setRegisteredUsers([...registeredUsers, registrationData]);
  };

  return (
    <Router>
      <div>
        {user && <CustomNavbar />}
        <Routes>
          {user ? (
            <>
              <Route
                path="/subscription"
                element={<MessManagement username={user} registeredUsers={registeredUsers} />}
              />
              <Route path="/" element={<Home onRegistration={handleRegistration} />} />
            </>
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


