import logo from './logo.svg';
import './App.css';
import { Navbar ,NavbarBrand } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary"></Navbar>
      <div ClassName="container">
      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      
      </div>
    </div>
  );
}

export default App;
