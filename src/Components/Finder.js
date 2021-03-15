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
    }
}