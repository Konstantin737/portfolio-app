import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PretendentCard from './components/card/PretendentCard';
import WorksList from './components/works/WorksList';
import CoursesList from './components/courses/CoursesList';

function App() {
  return (
    <BrowserRouter>
      <>
      <div className='background_image'></div>
      <div className="App">
        <Routes>
          <Route path='/' element={<PretendentCard />} />
          <Route path='/works' element={<WorksList />} />
          <Route path='/courses' element={<CoursesList />} />
        </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
