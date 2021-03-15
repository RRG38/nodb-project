import React, {Component} from 'react';

class ChosenTeams extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleEdit = (id) => {
        this.props.nameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render(){
        return (
            <div>
                {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.team.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.team.name}</p>
                        <button onClick={this.handleToggle}>Edit Division Name</button>
                    </div>
                )}
                <button onClick={() => this.props.releaseFn(this.props.team.id)}>Release</button>
            </div>
        )
    }
}

export default ChosenTeams;
                    