import React from 'react';
import ChosenTeams from './ChosenTeams';

const Division = props => {
    const mappedTeams = props.chosenTeams.map((team, i) => (
        <ChosenTeams
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