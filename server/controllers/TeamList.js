const axios = require('axios');

module.exports = {
    getAvailableTeams: (req, res) => {
        const teamsArray = [];

        axios.get('/api/teams')
            .then(response => {
                teamsArray.push(response.data);
                res.status(200).send(teamsArray);
            })
            .catch(err => res.status(500).send(err));

    }
}