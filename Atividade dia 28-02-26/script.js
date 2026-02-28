document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-idade");
    formulario.addEventListener("submit", calcularIdade);
    carregarUsuarios();
});

function calcularIdade(event) {
    event.preventDefault();

    const dadosUsuario = pegarValores();

    const idadeCalculada = calcular(
        dadosUsuario.dia,
        dadosUsuario.mes,
        dadosUsuario.ano
    );

    const classificacao = classificarIdade(idadeCalculada);

    const usuarioFinal = organizarDados(
        dadosUsuario,
        idadeCalculada,
        classificacao
    );

    cadastrarUsuario(usuarioFinal);
    carregarUsuarios();

    document.getElementById("form-imc").reset();
}

function pegarValores() {
    const nome = document.getElementById("nome").value.trim();
    const dia = parseFloat(document.getElementById("dia").value);
    const mes = parseFloat(document.getElementById("mes").value);
    const ano = parseFloat(document.getElementById("ano").value);

    return {
        nome: nome,
        dia: dia,
        mes: mes,
        ano: ano
    };
}

function calcular(dia, mes, ano) {
    
    const diaN = new Date();
    const mesN = new Date();
    const anoN = new Date();
    const d = diaN.getDate();
    const m = mesN.getMonth();
    const a = anoN.getFullYear();



    return idade = (a - ano);
}

function classificarIdade(idade) {
    if (idade < 13) return "Criança";
    if (idade < 18) return "Adolescente";
    if (idade < 65) return "Adulto";
    
    return "Idoso";
}

function organizarDados(dadosUsuario, imc, classificacao) {
    const dataAtual = new Date().toLocaleString("pt-BR");

    return {
        ...dadosUsuario, 
        idade: idade.toFixed(2),
        classificacao: classificacao,
        dataCadastro: dataAtual
    };
}

function cadastrarUsuario(usuario) {
    let lista = [];
    const dadosSalvos = localStorage.getItem("usuariosCadastrados");

    if (dadosSalvos) {
        lista = JSON.parse(dadosSalvos);
    }

    lista.push(usuario);

    localStorage.setItem(
        "usuariosCadastrados",
        JSON.stringify(lista)
    );
}

function carregarUsuarios() {
    const tabela = document.getElementById("corpo-tabela");
    const dadosSalvos = localStorage.getItem("usuariosCadastrados");

    let lista = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    if (lista.length === 0) {
        tabela.innerHTML = `
            <tr class="linha-mensagem">
                <td colspan="6">Nenhum registro encontrado!</td>
            </tr>
        `;
        return;
    }

    montarTabela(lista);
}

function montarTabela(lista) {
    const tabela = document.getElementById("corpo-tabela");
    let linhas = "";

    lista.forEach(function (pessoa) {
        linhas += `
        <tr>
            <td data-cell="Nome">${pessoa.nome}</td>
            <td data-cell="dia">${pessoa.dia}</td>
            <td data-cell="mes">${pessoa.mes}</td>
            <td data-cell="ano">${pessoa.ano}</td>
            <td data-cell="Classificação">${pessoa.classificacao}</td>
            <td data-cell="Data">${pessoa.dataCadastro}</td>
        </tr>
        `;
    });

    tabela.innerHTML = linhas;
}

function deletarRegistro(){
    if(confirm("Deseja realmente apagar todo histórico?")){
        localStorage.removeItem("usuariosCadastrados");
        carregarUsuarios();
    }
}