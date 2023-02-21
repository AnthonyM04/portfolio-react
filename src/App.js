import Header from './components/Header';
import Trident from './components/Trident';
import Grid from './components/Grid';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Trident />
        <Grid />
        <Footer />
      </header>
    </div>
  );
}

export default App;
