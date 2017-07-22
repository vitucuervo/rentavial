express = require('express'),
app     = express(),
server  = require('http').Server(app);

app.use(express.static('./prod/'));
server.listen(3000);
