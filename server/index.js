const express = require('express'),
    tlCtrl = require('./controllers/TeamList'),
    ctCtrl = require('./controllers/ChosenTeams'),
    port = 3000,
    app = express();

app.use(express.json());


//TeamList (tlCtrl) endpoint
app.get('/api/', tlCtrl.getAvailableTeams);

//ChosenTeams (ctCtrl) endpoints
app.get('/api/', ctCtrl.getChosenTeams);
app.post('/api/', ctCtrl.chooseTeams);
app.delete('/api/', ctCtrl.removeTeam);



app.listen(port, () => console.log(`Server is running on ${port}`));