import './App.css';
import AppRoutes from './router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  
  return (
    <div className="App" style={{backgroundColor: '#CCCCCC', color:'white'}}>
      <Header />
      <div style={{padding: '0 16px 0 16px'}}>
        <AppRoutes />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
