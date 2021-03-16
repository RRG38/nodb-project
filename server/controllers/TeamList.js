const axios = require('axios');
const data = require("../../data.json")
const teamsArray = [];

module.exports = {
    getAvailableTeams: (req, res) => {
                res.status(200).send(data);

    }
}