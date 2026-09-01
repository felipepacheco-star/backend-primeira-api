const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let ALUNOS = [
    { id: 1, nome: "Brenno",  curso: "Desenvolvimento de sistemas" },
    { id: 2, nome: "Pedro",   curso: "Redes de computadores" },
    { id: 3, nome: "Larissa", curso: "Banco de dados" },
    { id: 4, nome: "Carlos",  curso: "Administração" },
]

app.get("/", (req, res) => {
    res.json({ mensagem: "API Alunos funcionando!" });
});

app.get("/alunos",(req, res)=>{
    res.json(ALUNOS)
});

app.post("/alunos/cadastrar",(req, res)=>{
    // console.log(req.body);
    const {nome , curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({mensagem: "Nome e curso são obrigatorios"});
    }

    const novoAluno = {
        id : ALUNOS.length > 0 ? ALUNOS[ALUNOS.length - 1].id + 1 : 1,
        nome : nome,
        curso: curso
    }

    ALUNOS.push(novoAluno);

    res.status(201).json({mensagem: "Aluno cadastrado com sucesso"});
});

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso");
    console.log(`http://localhost:${PORTA}`);
})