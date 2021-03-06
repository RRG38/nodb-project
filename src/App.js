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
    this.addTeam = this.addTeam.bind(this);
  }

  componentDidMount(){
    axios.get('/api/teams')
      .then(res => {
        this.setState({ chosenTeams: res.data})
      })
      .catch(err => console.log(err))
  }

addTeam(team){
  axios.post('/api/chosenTeams', {team: team})
    .then(res => {
      this.setState({ chosenTeams: res.data })
    })
    .catch(err => console.log(err))
}

removeTeam = (id) => {
  axios.delete(`/api/chosenTeams/${id}`)
    .then(res => {
      this.setState({ chosenTeams: res.data })
    })
    .catch(err => console.log(err))
}

  render(){
    return (
      <div className="App">
        <Header />
        <Finder 
          addFn={this.addTeam}/>
        <Division 
          chosenTeams={this.state.addTeam}
          removeFn={this.removeTeam}/>
      </div>
    )
  }
}

export default App;
