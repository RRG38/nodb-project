import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Division from './Components/Division';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosenTeams: []
    }
  }
  render(){
    return (
      <body>
        <Header />
        <Finder />
        <Division />
      </body>
    )
  }
}

export default App;
