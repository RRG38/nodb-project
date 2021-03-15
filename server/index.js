const express = require('express'),
    port = 3000,
    app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server is running on ${port}`));