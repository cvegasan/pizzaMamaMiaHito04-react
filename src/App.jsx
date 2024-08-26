import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
//import Cart from './components/Cart';
import Home from './components/Home';
import Pizza from './components/Pizza';

// Componentes LOGIN y REGISTRO
// import FormRegistro from './components/FormRegistro';
// import FormLogin from './components/FormLogin';

function App() {
  return (
    //App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        {/* <Home/> */}
        {/* <FormRegistro/> */}
        {/* <FormLogin/> */}
        {/* <Cart/> */}
        <Pizza/>
        <Footer></Footer>
    </>
  )
}
export default App;
