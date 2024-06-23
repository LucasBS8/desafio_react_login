//referencia: https://github.com/lucinaldocosta/CRUD-Fullstack/blob/master/Backend/server.js

import { createServer } from "http";
const sqlite3 = require("sqlite3").verbose();
const tabela = "Usuarios";

const db = new sqlite3.Database("login.db", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Conexão estabelecida com sucesso.")
    }
});

db.run(
    `CREATE TABLE IF NOT EXISTS ${tabela}(
        UsuarioID INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT,
        Email TEXT,
        Senha TEXT,
    )`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Tabela criada com sucesso.");
        }
    }
);

const search = (callback) => {

    db.all(`SELECT * FROM ${tabela}`, (err, rows) => {
        if (err) {
            console.error(err);
        } else {
            callback(rows);
        }
    });
};


const insertData = db.prepare(
    `INSERT INTO ${tabela} (Nome, Email, Senha)
    VALUES (?, ?, ?)`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados inseridos com sucesso.");
        }
    }
);


const deleteData = db.prepare(
    `DELETE FROM ${tabela} WHERE UsuarioID == ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados excluídos com sucesso.");
        }
    }
);


const modifyData = db.prepare(
    `UPDATE ${tabela}
      SET Nome = ?,
          Email = ?,
          Senha = ?,
     WHERE UsuarioID = ?`,
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dados modificados com sucesso.");
        }
    }
);

// Agora vamos criar o servidor e trazer as informações do bd para o servidor.
const server = createServer((req, res) => {
    // Para permitir os CORS e que não tenha problema en este exemplo.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Retorna todas as informações para o servidor.
    search((result) => {
        res.write(JSON.stringify(result));
        res.end();
    });


    // Verifica se é uma solicitação com o método POST.
    if (req.method === "POST") {
        let body = "";
        // Recebe as informações enviadas para o servidor.
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // Deserializa as informações.
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usa a consulta preparada para inserir os dados recebidos do Frontend.
            insertData.run(
                parsedBody.Nome,
                parsedBody.Email,
                parsedBody.Senha,
            );
            console.log("Dados criados com sucesso.");
        });


        // Verifica se é uma solicitação com o método DELETE.
    } else if (req.method === "DELETE") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para excluir os dados que o Frontend indicar.
            deleteData.run(parsedBody.UsuarioID);
            console.log("Dados excluídos com sucesso.");
        });
        // Verifica se é uma solicitação com o método PUT.
    } else if (req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usamos a consulta preparada para modificar os dados recebidos do Frontend.
            modifyData.run(
                parsedBody.Nome,
                parsedBody.Email,
                parsedBody.Senha,
                parsedBody.UsuarioID
            );
            console.log("Dados modificados com sucesso.");
        });
    }

});
const port = 3000;
server.listen(port);
console.log(`Servidor escutando no porto ${port}`)