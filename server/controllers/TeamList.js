const axios = require('axios');

module.exports = {
    getAvailableTeams: (req, res) => {
        const teamsArray = [];

        axios.get(teamsArray)
            .then(response => {
                teamsArray.push(response.data);
            })
            .catch(err => res.status(500).send(err));

    }
}