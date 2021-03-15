import React from 'react';
import ChosenTeams from './ChosenTeams';
import TeamList from './TeamList';

const Division = props => {
    const mappedTeams = props.chosenTeams.map((team, i) => (
        <TeamList
        key={i}
        team={team}
        nameFn={props.nameFn}
        releaseFn={props.releaseFn}/>
    ))

    return (
        <div>
            <h1>Division</h1>
            <div className='hockey-flex'>
                {mappedTeams}
            </div>
        </div>
    )
}

export default Division;