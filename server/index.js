const express = require('express'),
    tlCtrl = require('./controllers/TeamList'),
    ctCtrl = require('./controllers/ChosenTeams'),
    port = 4747,
    app = express();

app.use(express.json());

let teams = [
    {
        "id": 1,
        "team_name": "Anaheim Ducks"
    },
    {
        "id": 2,
        "team_name": "Arizona Coyotes"
    },
    {
        "id": 3,
        "team_name": "Boston Bruins"
    },
    {
        "id": 4,
        "team_name": "Buffalo Sabres"
    },
    {
        "id": 5,
        "team_name": "Calgary Flames"
    },
    {
        "id": 6,
        "team_name": "Carolina Hurricanes"
    },
    {
        "id": 7,
        "team_name": "Chicago Blackhawks"
    },
    {
        "id": 8,
        "team_name": "Colorado Avalanche"
    },
    {
        "id": 9,
        "team_name": "Columbus Blue Jackets"
    },
    {
        "id": 10,
        "team_name": "Dallas Stars"
    },
    {
        "id": 11,
        "team_name": "Detroit Red Wings"
    },
    {
        "id": 12,
        "team_name": "Edmonton Oilers"
    },
    {
        "id": 13,
        "team_name": "Florida Panthers"
    },
    {
        "id": 14,
        "team_name": "Los Angeles Kings"
    },
    {
        "id": 15,
        "team_name": "Minnesota Wild"
    },
    {
        "id": 16,
        "team_name": "Montreal Canadiens"
    },
    {
        "id": 17,
        "team_name": "Nashville Predators"
    },
    {
        "id": 18,
        "team_name": "New Jersey Devils"
    },
    {
        "id": 19,
        "team_name": "New York Islanders"
    },
    {
        "id": 20,
        "team_name": "New York Rangers"
    },
    {
        "id": 21,
        "team_name": "Ottawa Senators"
    },
    {
        "id": 22,
        "team_name": "Philadelphia Flyers"
    },
    {
        "id": 23,
        "team_name": "Pittsburgh Penguins"
    },
    {
        "id": 24,
        "team_name": "San Jose Sharks"
    },
    {
        "id": 25,
        "team_name": "St. Louis Blues"
    },
    {
        "id": 26,
        "team_name": "Tampa Bay Lightning"
    },
    {
        "id": 27,
        "team_name": "Toronto Maple Leafs"
    },
    {
        "id": 28,
        "team_name": "Vancouver Canucks"
    },
    {
        "id": 29,
        "team_name": "Vegas Golden Knights"
    },
    {
        "id": 30,
        "team_name": "Washington Capitals"
    },
    {
        "id": 31,
        "team_name": "Winnipeg Jets"
    }
];

//TeamList (tlCtrl) endpoint
app.get('/api/teams', tlCtrl.getAvailableTeams);

//ChosenTeams (ctCtrl) endpoints
app.get('/api/', ctCtrl.getChosenTeams);
app.post('/api/', ctCtrl.chooseTeams);
app.delete('/api/', ctCtrl.removeTeam);



app.listen(port, () => console.log(`Server is running on ${port}`));