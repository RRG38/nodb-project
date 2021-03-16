const express = require('express'),
    tlCtrl = require('./controllers/TeamList'),
    ctCtrl = require('./controllers/ChosenTeams'),
    port = 4747,
    app = express();

app.use(express.json());

let teams = [
    {
        "id": 1,
        "team_name": "Anaheim_Ducks"
    },
    {
        "id": 2,
        "team_name": "Arizona_Coyotes"
    },
    {
        "id": 3,
        "team_name": "Boston_Bruins"
    },
    {
        "id": 4,
        "team_name": "Buffalo_Sabres"
    },
    {
        "id": 5,
        "team_name": "Calgary_Flames"
    },
    {
        "id": 6,
        "team_name": "Carolina_Hurricanes"
    },
    {
        "id": 7,
        "team_name": "Chicago_Blackhawks"
    },
    {
        "id": 8,
        "team_name": "Colorado_Avalanche"
    },
    {
        "id": 9,
        "team_name": "Columbus_Blue_Jackets"
    },
    {
        "id": 10,
        "team_name": "Dallas_Stars"
    },
    {
        "id": 11,
        "team_name": "Detroit_Red_Wings"
    },
    {
        "id": 12,
        "team_name": "Edmonton_Oilers"
    },
    {
        "id": 13,
        "team_name": "Florida_Panthers"
    },
    {
        "id": 14,
        "team_name": "Los_Angeles_Kings"
    },
    {
        "id": 15,
        "team_name": "Minnesota_Wild"
    },
    {
        "id": 16,
        "team_name": "Montreal_Canadiens"
    },
    {
        "id": 17,
        "team_name": "Nashville_Predators"
    },
    {
        "id": 18,
        "team_name": "New_Jersey_Devils"
    },
    {
        "id": 19,
        "team_name": "New_York_Islanders"
    },
    {
        "id": 20,
        "team_name": "New_York_Rangers"
    },
    {
        "id": 21,
        "team_name": "Ottawa_Senators"
    },
    {
        "id": 22,
        "team_name": "Philadelphia_Flyers"
    },
    {
        "id": 23,
        "team_name": "Pittsburgh_Penguins"
    },
    {
        "id": 24,
        "team_name": "San_Jose_Sharks"
    },
    {
        "id": 25,
        "team_name": "St_Louis_Blues"
    },
    {
        "id": 26,
        "team_name": "Tampa_Bay_Lightning"
    },
    {
        "id": 27,
        "team_name": "Toronto_Maple_Leafs"
    },
    {
        "id": 28,
        "team_name": "Vancouver_Canucks"
    },
    {
        "id": 29,
        "team_name": "Vegas_Golden_Knights"
    },
    {
        "id": 30,
        "team_name": "Washington_Capitals"
    },
    {
        "id": 31,
        "team_name": "Winnipeg_Jets"
    }
];

//TeamList (tlCtrl) endpoint
app.get('/api/teams', tlCtrl.getAvailableTeams);

//ChosenTeams (ctCtrl) endpoints
app.get('/api/', ctCtrl.getChosenTeams);
app.post('/api/', ctCtrl.chooseTeams);
app.delete('/api/', ctCtrl.removeTeam);



app.listen(port, () => console.log(`Server is running on ${port}`));