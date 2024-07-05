const express =  require('express');
const mysql =  require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())
const PORT = 3000; 

function connection_func() {
    console.log("conectando...");
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbfinanca'
    });

    connection.connect(function (err) {
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ' + err.stack);
            return;
        }
        else {
            console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
        }
        // create_tables(connection); // Chama a função para criar a tabela
    });
    
    return connection;
} 

// muda o nome da rota
app.get('/tblUsuario', (req, res) => {
    const connection = connection_func()

    connection.execute(
        // muda o que ta aqui dentro
        'select * from tblUsuario',
        (erro, resposta, campos) => res.json(resposta)
        // ate aqui
    );

    connection.end()
});

app.post('/tblUsuario', (req,res) => {
    const connection = connection_func()

    connection.execute(
        'INSERT INTO tblUsuario (codUsuario, nomUsuario, numTelefone, dscEmail, dscSenha) VALUES (?, ?, ?, ?, ?)',
        [req.body.codUsuario, req.body.nomUsuario, req.body.numTelefone, req.body.dscEmail, req.body.dscSenha],
        (erro, resposta, campos) => res.json('Usuario inserido com sucesso!')
    );

    connection.end()

});

app.put('/tblUsuario/:id', (req,res) => {
    const connection = connection_func()

    connection.execute(
        'UPDATE tblUsuario SET nome = ?, idade = ?, matricula = ? WHERE id = ?',
        [req.body.nome, req.body.idade, req.body.matricula, req.params.id],
        (erro, resposta, campos) => res.json('Aluno atualizado com sucesso!')
    );
});

app.delete('/tblUsuario/:id', (req,res) => {
    const connection = connection_func()

    connection.execute(
        'DELETE FROM tblUsuario WHERE codUsuario = ?',
        [req.params.id],
        (erro, resposta, campos) => res.json('Usuario excluido com sucesso!')
    );
});

app.get('/tblTransacao', (req, res) => {
    const connection = connection_func()

    connection.execute(
        'select * from tblTransacao',
        (erro, resposta, campos) => res.json(resposta)
    );
});

app.post('/tblTransacao', (req,res) => {
    const connection = connection_func()

    connection.execute(
        'INSERT INTO tblTransacao (categoria, valor, data) VALUES (?, ?, ?)',
        [req.body.categoria, req.body.valor, req.body.data],
        (erro, resposta, campos) => res.json('Transação feita com sucesso!')
    );
});




app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));