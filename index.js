const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// this is so we can use the socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Connecting the Postgresql
const {
  Client
} = require("pg");

const connectionString = "postgres://postgres:root@localhost:5432/chat-app";

const client = new Client({
  connectionString: connectionString
});
client.connect();

// body parser middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
});

module.exports = {
  app,
  client,
  router,
  jwt,
  io
};