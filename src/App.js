import './App.css';
import Header from './Header'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="App">
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}

function Footer() {
    return (
        <footer>2022</footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>好宝宝Crystal</h1>
            <Button>Button</Button>
        </div>
    )
}

export default App;
