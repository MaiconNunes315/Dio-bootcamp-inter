import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Routes, Route} from 'react-router-dom';
import Contact from './pages/Contato';


function App() {
 
  return (
    <div>
    
     <Header/>
     
     <Routes>
       <Route path='/' element={<Section/>} />

        <Route path='/contato' element={<Contact/>}/>

     </Routes>
     
     
     <Footer/>
    </div>
  );
}


export default App;
