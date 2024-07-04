const express =  require('express');
const mysql2 =  require('mysql2');

const app = express();
const PORT = 80; 

const connection = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbfinanca'
});

// Alunos
app.get('/tblUsuario', (req, res) => {
    connection.execute(
        'select * from tblUsuario',
        (erro, resposta, campos) => res.json(resposta)
    );
});

app.post('/tblUsuario', (req,res) => {
    connection.execute(
        'INSERT INTO tblUsuario (nome, idade, matricula) VALUES (?, ?, ?)',
        [req.body.nome, req.body.idade, req.body.matricula],
        (erro, resposta, campos) => res.json('Aluno inserido com sucesso!')
    );
});

app.put('/tblUsuario/:id', (req,res) => {
    connection.execute(
        'UPDATE tblUsuario SET nome = ?, idade = ?, matricula = ? WHERE id = ?',
        [req.body.nome, req.body.idade, req.body.matricula, req.params.id],
        (erro, resposta, campos) => res.json('Aluno atualizado com sucesso!')
    );
});

app.delete('/tblUsuario/:id', (req,res) => {
    connection.execute(
        'DELETE FROM tblUsuario WHERE id=?',
        [req.params.id],
        (erro, resposta, campos) => res.json('Aluno excluido com sucesso!')
    );
});

app.post('/tblTransacao', (req,res) => {
    connection.execute(
        'INSERT INTO tblTransacao (categoria, valor, data) VALUES (?, ?, ?)',
        [req.body.categoria, req.body.valor, req.body.data],
        (erro, resposta, campos) => res.json('Transação feita com sucesso!')
    );
});




app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));