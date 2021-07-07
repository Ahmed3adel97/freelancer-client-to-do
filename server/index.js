const express = require('express')
const app = express()
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "TODO",
});

app.get('/', (req, res) =>{
    db.query( "INSERT INTO task (description, state, title, price) VALUES (?,?,?,?)",
    ["descriptopm", 'notfinished', "tas1", 14],
    (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }

})})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });