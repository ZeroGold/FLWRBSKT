import logo from './logo.svg';
import './App.css';
import MainMenu from './Components/MainMenu';
import MainCarousel from './Components/MainCarousel';
import ItemBox from './Components/ItemBoxes';

function App() {
  return (
    <div className="App">
      <MainMenu />
      <MainCarousel />
      <ItemBox />
    </div>
  );
}

export default App;
