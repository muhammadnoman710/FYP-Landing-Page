import NavBar from './Components/NavBar/NavBar';
import Container from './Components/FrontContainer/Container';
import TopSellers from './Components/TopSellers/TopSellers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Container></Container>
      <TopSellers></TopSellers>
    </div>
  );
}

export default App;
