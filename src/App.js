import './App.css';
import FooterMain from './Pages/Shared/Footer/FooterMain';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Navbar/>
      <FooterMain/>
    </div>
  );
}

export default App;
