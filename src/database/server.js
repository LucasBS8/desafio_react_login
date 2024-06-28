const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('login.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Conexão estabelecida com sucesso.');
        db.run(`CREATE TABLE IF NOT EXISTS Usuarios (
            UsuarioID INTEGER PRIMARY KEY AUTOINCREMENT,
            Nome TEXT,
            Email TEXT,
            Senha TEXT
        )`);
    }
});

app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
    db.all('SELECT * FROM Usuarios', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

app.post('/usuarios', (req, res) => {
    const { Nome, Email, Senha } = req.body;
    db.run(`INSERT INTO Usuarios (Nome, Email, Senha) VALUES (?, ?, ?)`,
        [Nome, Email, Senha],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'Dados inseridos com sucesso',
                data: { UsuarioID: this.lastID, Nome, Email, Senha }
            });
        });
});

app.put('/usuarios/:id', (req, res) => {
    const { Nome, Email, Senha } = req.body;
    const { id } = req.params;
    db.run(`UPDATE Usuarios SET Nome = ?, Email = ?, Senha = ? WHERE UsuarioID = ?`,
        [Nome, Email, Senha, id],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ message: 'Dados modificados com sucesso', data: { UsuarioID: id, Nome, Email, Senha } });
        });
});

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM Usuarios WHERE UsuarioID = ?`,
        id,
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ message: 'Dados excluídos com sucesso', data: { UsuarioID: id } });
        });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
