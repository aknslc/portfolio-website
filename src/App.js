

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>

    </>
  );
}

export default App;
