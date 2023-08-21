import styles from'./App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PretendentCard from './components/card/PretendentCard';
import WorksList from './components/works/WorksList';
import CoursesList from './components/courses/CoursesList';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <div className={styles.background_image}></div>
        <div className={styles.wrapper}>
          <div className={styles.app}>
            <Routes>
              <Route path='/' element={<PretendentCard />} />
              <Route path='/works' element={<WorksList />} />
              <Route path='/courses' element={<CoursesList />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
