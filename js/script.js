function inicio(){
    alert("Cadastre uma viagem");
}

function CadastrarViagem(){
    let lugar = document.getElementById("lugar").value;
    let pessoas = document.getElementById("pessoas").value;
    let valor = document.getElementById("valor").value;
    let dias = document.getElementById("dias").value;

    let tblViagem = document.getElementById("tabela");
    let linha = tblViagem.insertRow();

    let cel1 = linha.insertCell(0);
    let cel2 = linha.insertCell(1);
    let cel3 = linha.insertCell(2);
    let cel4 = linha.insertCell(3);
    let cel5 = linha.insertCell(4);
    let cel6 = linha.insertCell(5);

    cel1.innerHTML = lugar;
    cel2.innerHTML = pessoas;
    cel3.innerHTML = valor;
    cel4.innerHTML = dias;
    cel5.innerHTML = "<input type='button' class='botaoEditar' value='Editar' onclick='EditarCel(this)'>"
    cel6.innerHTML = "<input type='button' class='botaoExcluir' value='Excluir' onclick='ExcluirCel(this)'>"

    console.log(lugar);
    console.log(pessoas);
    console.log(valor);
}

function ExcluirCel(obj){
    let confirmarExclusao = confirm("Deseja excluir a viagem?");

    if(confirmarExclusao && obj.parentNode != undefined && obj.parentNode.parentNode != undefined){
        obj.parentNode.parentNode.remove()
    }
}

var arrayCels = "";
function EditarCel(obj){
    arrayCels = obj.parentNode.parentNode.childNodes;

    let lugar= arrayCels[0].innerText;
    let pessoas = arrayCels[1].innerText;
    let valor = arrayCels[2].innerText;
    let dias = arrayCels[3].innerText;

    document.getElementById("lugar").value = lugar;
    document.getElementById("pessoas").value = pessoas;
    document.getElementById("valor").value = valor;
    document.getElementById("dias").value = dias

    document.getElementById("btnCriar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";
}

function EditarViagem(){
    let lugar = document.getElementById("lugar").value;
    let pessoas = document.getElementById("pessoas").value;
    let valor = document.getElementById("valor").value;
    let dias = document.getElementById("dias").value;

    arrayCels[0].innerText = lugar;
    arrayCels[1].innerText = pessoas;
    arrayCels[2].innerText = valor;
    arrayCels[3].innerText = dias;

    document.getElementById("btnCriar").style.display = "block";
    document.getElementById("btnEditar").style.display = "none";
}