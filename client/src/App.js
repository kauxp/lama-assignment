import logo from './logo.svg';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import CreateNewProject from './components/CreateNewProject';
import NavBar from './components/NavBar';
import ProjectWindow from './components/ProjectWindow';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/create-new-project" element={<CreateNewProject />} />
        <Route path="/project/:id" element={<ProjectWindow />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>

    </div>
  );
}

export default App;
