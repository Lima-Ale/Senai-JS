import promptSync from 'prompt-sync';
const prompt = promptSync();

let senha;

const usuario =prompt("Entre com o usuário");

do{
    senha = prompt('Digite a senha: ');
} while (senha !== "1234")

    if (usuario !== 'admin')
        console.log('Acesso negado!')
else        
    console.log('Login bem-sucedido!')
    
    
