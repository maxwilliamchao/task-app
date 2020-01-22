const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// Database
const db = mysql.createConnection({
  Host: 'localhost',
  Port: '3306',
  User: 'root',
  Password: 'root',
  Socket: '~/Applications/MAMP/tmp/mysql/mysql.sock'
  // database: 'user'
});

db.connect(function(err){
  if (err){
    console.log('DB error');
    throw err;
    return false;
  }
});