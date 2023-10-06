const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@Clown9703",
    database: "crudatto"
})

app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
    const { razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado } = req.body;
    let SQL = "INSERT INTO person ( razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado ) VALUES ( ?,?,?,?,?,? )"
    db.query(SQL, [razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado], (err, result) => {
        if(err)
        console.log(err);
    else 
    res.send({data: result, status: 200})
    })
})

app.get("/user", (req, res) => {
    let SQL = "SELECT * from person"
    db.query(SQL, (err, result) => {
        if(err)
            console.log(err);
        else 
            res.send({data: result, status: 200})
    })
})

app.delete("/user/:idperson", (req, res) => {
    const { idperson } = req.params
    let SQL = "DELETE from person WHERE idperson = ?"
    db.query(SQL, idperson, (err, result) => {
        if(err)
            console.log(err);
        else 
            res.send({data: result, status: 200})
    })
})

app.put("/user/:idperson", (req, res) => {
    const { idperson } = req.params
    const { razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado } = req.body;
    let SQL = "UPDATE person SET razaoSocial = ?, nomeFantasia = ?, cnpjCpf = ?, celular = ?, cidade = ?, estado = ? WHERE idperson = ?"
    db.query(SQL, [razaoSocial, nomeFantasia, cnpjCpf, celular, cidade, estado, idperson], (err, result) => {
        if(err)
            console.log(err);
        else 
            res.send({data: result, status: 200})
    })
})

app.listen(3001, () => {
    console.log("rodando servidor");
});

