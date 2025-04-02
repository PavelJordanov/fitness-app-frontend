import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import page components
import Home from './pages/Home';
import UserProgram from './pages/UserProgram';
import PhaseSelection from './pages/PhaseSelection';
import WeekSelection from './pages/WeekSelection';
import Workout from './pages/Workout';
import ExerciseDetail from './pages/ExerciseDetail';
import NutritionLogger from './pages/NutritionLogger';
import Profile from './pages/Profile';

import BottomNav from './components/BottomNav'; 

function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: '60px '}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<UserProgram />} />
          <Route path='/weeks' element={<WeekSelection />} />
          <Route path='/workout' element={<Workout />} />
          <Route path='/exercise' element={<ExerciseDetail />} />
          <Route path='/nutrition' element={<NutritionLogger />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/phases/:phaseId' element={<PhaseSelection/>}/>
          <Route path='/phases/:phaseId/weeks/:weekId' element={<WeekSelection/>}/>
          <Route path='/phases/:phaseId/weeks/:weekId/workout/:workoutId' element={<Workout/>}/>
        </Routes>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App
