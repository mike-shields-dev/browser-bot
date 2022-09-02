const server = require('./src/server');
const PORT = process.env.port || 3000;

server.listen(PORT, () => console.log('listening on port ' + PORT));