
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Movies from './components/Movies/Movies'
import Search from './components/search/Search'
import './resources/sass/App.scss'

function App() {
  return (
    <div>
      <Hero/>
      <Search/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
