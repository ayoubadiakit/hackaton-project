import NavigationBar from './components/NavigationBar.js';
import Loading from './components/Loading.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Footer from './components/Footer.tsx';
import ProductSection from './components/ProductSection.tsx';
import ProductPopulary from './components/ProductPopulary.tsx';
import FeaturSection from './components/FeaturSection.tsx';
import ClientSatisfait from './components/ClientSatisfait.tsx';
import Investisseur from './components/Investisseur';

function App() {
  return (
    <>
      <div>
        <Loading />
        <NavigationBar />
        <Dashboard />
        
        <Footer />
      </div>
    </>
  )
}

export default App
