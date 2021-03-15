const chosenTeams = [];
let id = 1;

module.exports = {

    getChosenTeams: (req, res) => {
        res.status(200).send(chosenTeams);
    },

    chooseTeams: (req, res) => {
        const {team} = req.body;

        team.id = id;
        id++;

        chosenTeams.push(team);
        res.status(200).send(chosenTeams);
    },

    removeTeam: (req, res) => {
        const {id} = req.params;

        const index = chosenTeams.findIndex(element => element.id === +id);
        chosenTeams.splice(index, 1);
        res.status(200).send(chosenTeams);
    }

}