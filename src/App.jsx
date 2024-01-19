import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Nav from './components/Nav';
import Footer from './components/UI/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
        <Outlet />
      <Footer />
    </>
  );
}

export default App
