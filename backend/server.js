
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");



const app = express();

app.use(express.json());
app.use(cors());
port = 3002;

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})


app.post("/stafflogin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.body.userId;
    con.query("SELECT * FROM stafflogin WHERE id = ? AND username = ? AND password = ?", [id, username, password], 
    (err, result) => {
        if (err) {
            console.error(err); // Log the error to the console
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            if (result.length > 0) {
                res.send({message: "Success" });
            
            
            } else {
                res.send({ message: "WRONG USERNAME OR PASSWORD!" });
               
            }
        }
    }
);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})