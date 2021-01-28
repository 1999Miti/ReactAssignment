//import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Body from './componentbody/Body'
import Header from './componentHeader/Header';
import Footer from './componentfooter/Footer'

class App extends Component {
  render(){
        return (
             <div className="App">
               <Header/>
               <Body/> 
               <Footer/>
               
    </div>
  );
}
}

export default App;
