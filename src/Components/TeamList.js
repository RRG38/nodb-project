import React, {Component} from 'react';

class TeamList extends Component {
    handleSelect = () => {
        const {team} = this.props;
        let newTeam = {
            name: team.name,
        }

        this.props.addFn(newTeam);
        this.props.refreshFn();     
    }

    render(){
        return (
            <div onClick={this.handleSelect}>
                <p>{this.props.team.name}</p>
            </div>
        )
    }
    
}

export default TeamList;