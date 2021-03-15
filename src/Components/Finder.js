import React, {Component} from 'react';
import axios from 'axios';
import TeamList from './TeamList';

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            availableTeams: []
        }
    }

    componentDidMount(){
        this.getAvailableTeams();
    }

    getAvailableTeams = () => {
        axios.get('/api/')
            .then(res => {
                this.setState({availableTeams: res.date});
            })
            .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.availableTeams)
        const mappedTeams = this.state.availableTeams.map((team, i) => (
            <TeamList
                key={i}
                team={team}
                addFn={this.props.addFn}
                refreshFn={this.getAvailableTeams}/>
        ))
        return (
            <div className='hockey-flex'>
                {mappedTeams}
            </div>
        )
    }
}

export default Finder;