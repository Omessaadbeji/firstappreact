
import './App.css';
import Karroussel from './karroussel';
import Karte from './karte';
import NavBarr from './NavBarr';
import PhotosT from './PhotosT';

function App() {
  return (
    <>
    <NavBarr/>
    <div className='Karou'><Karroussel/></div>
    <Karte/>
    <PhotosT/>
    </>
  );
}

export default App;
