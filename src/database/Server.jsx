import express from "express";
import sqlite3 from "sqlite3";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Conecte ao banco de dados SQLite
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS Usuario (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            email TEXT,
            senha TEXT
        );
    `);
  console.log("Table Usuario created");
});

// Endpoint para obter todos os usuários
app.get("/usuarios", (req, res) => {
  db.all("SELECT * FROM Usuario", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Endpoint para procurar um usuário pelo email e senha
app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  db.get(
    "SELECT * FROM Usuario WHERE email = ? AND senha = ?",
    [email, senha],
    (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (row) {
        res.json({ data: row });
      } else {
        res.status(401).json({ error: "Credenciais inválidas" });
      }
    }
  );
});

// Endpoint para atualizar um usuário pelo ID
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    
    db.run(
        'UPDATE Usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
        [nome, email, senha, id],
        function (err) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({ message: `Usuário com ID ${id} atualizado com sucesso.` });
        }
    );
});


// Endpoint para adicionar um usuário
app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  db.run(
    "INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Endpoint para deletar um usuário pelo ID
app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM Usuario WHERE id = ?", id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: `Usuário com ID ${id} deletado com sucesso.` });
  });
});

// Rota básica para o endpoint raiz
app.get("/", (req, res) => {
  res.send("Servidor Express está rodando.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
