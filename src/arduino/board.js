const j5 = require('johnny-five');
const EtherPort = require('etherport');

const board = new j5.Board({ port: new EtherPort(3030) })

module.exports = { board, j5 };