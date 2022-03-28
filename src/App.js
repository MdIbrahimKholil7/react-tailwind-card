import logo from './logo.svg';
import { BeakerIcon } from '@heroicons/react/solid'
import './App.css';
import Header from './component/header/Header';
import CardContainer from './component/cardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;
