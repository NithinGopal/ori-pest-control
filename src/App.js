import { Routes, Route } from 'react-router-dom';
import './App.css';

// import { Hero, About, Services, Blog, Guarantee, CallToAction, Footer } from './containers'
import { Navbar, Home, ContactPage, PestControl, PestLibrary, TermiteControl } from './routes'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/termite-control' element={<TermiteControl />} />
          <Route path='/pest-control' element={<PestControl />} />
          <Route path='/pest-library' element={<PestLibrary />} />
          <Route path='/contact-page' element={<ContactPage />} />
        </Route>
        {/* <Route path='/' element={<Home />} />
        <Route path='termitecontrol' element={<TermiteControl />} />
        <Route path='pestcontrol' element={<PestControl />} />
        <Route path='pestlibrary' element={<PestLibrary />} />
        <Route path='contactpage' element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
