import React, {Component} from 'react';

class ChosenTeams extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <button onClick={() => this.props.releaseFn(this.props.team.id)}>Release</button>
            </div>
        )
    }
}

export default ChosenTeams;
                    