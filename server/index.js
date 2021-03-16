const express = require('express'),
    tlCtrl = require('./controllers/TeamList'),
    ctCtrl = require('./controllers/ChosenTeams'),
    port = 4747,
    app = express();

app.use(express.json());

//TeamList (tlCtrl) endpoint
app.get('/api/teams', tlCtrl.getAvailableTeams);

//ChosenTeams (ctCtrl) endpoints
app.get('/api/chosenTeams', ctCtrl.getChosenTeams);
app.post('/api/chosenTeams', ctCtrl.chooseTeams);
app.delete('/api/chosenTeams/:id', ctCtrl.removeTeam);



app.listen(port, () => console.log(`Server is running on ${port}`));