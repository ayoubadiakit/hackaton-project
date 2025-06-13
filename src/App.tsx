import NavigationBar from './components/NavigationBar.js';
import Loading from './components/Loading.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Footer from './components/Footer.tsx';
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
