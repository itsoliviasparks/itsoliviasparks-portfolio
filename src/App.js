import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Error404 from './Views/Error404';
import FashionInfo from './Views/FashionInfo';
import Main from './Views/Main';
import TheCollabLabInfo from './Views/TheCollabLabInfo';

import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/tech-design-work' element={<FashionInfo />}></Route>
          <Route path='/the-collab-lab-info' element={<TheCollabLabInfo />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
