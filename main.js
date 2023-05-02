const form = document.getElementById('form-contatos');
const contato = [];
const telefone = [];



let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaAgenda();

})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (contato.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} ja foi salvo com sucesso`);
    }else{
            contato.push(inputNomeContato.value);
            telefone.push(parseFloat(inputNumeroTelefone.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroTelefone.value}</td>`;
            
            linha += '</td>';
        
            linhas += linha;
        }
    

        inputNomeContato.value = '';
        inputNumeroTelefone.value = '';
}

function atualizaTabela() { 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

