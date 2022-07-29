import './App.css';
import Header from './Header'

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
        </div>
    )
}

export default App;
