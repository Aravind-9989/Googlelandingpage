import './App.css';
import Cards from './Google/Card';
import Fast from './Google/Fast';
import GoogleFooter from './Google/Footer';
import Home from './Google/home';
import ColorSchemesExample from './Google/Navbar';
import RoundedNavBar from './Google/Roundednavbar';
import Update from './Google/Udateimages';

function App() {
  return (
   <div>
    <ColorSchemesExample/>
    <Home/>
    <RoundedNavBar/>
    <Update/>
    <Cards/>
    <Fast/>
  <GoogleFooter/>
   </div>
  );
}

export default App;
