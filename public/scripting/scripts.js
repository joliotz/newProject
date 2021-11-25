function insertData() {

    fetch('http://localhost:3002/bd')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => processTbl(data))
        .catch(function(err) {
            alert('Ocorreu um problema')
        })

}

/*function processData(data){
    const divCidades = document.getElementById('cidades')
    divCidades.innerHTML = ''
    console.log('WAIT')
    for(let i = 0; i < 200; i++){
        let nome = data[i].Name
        divCidades.innerHTML += `<p> ${nome} </p>`
    }
    console.log('complete')
}*/


function processTbl(data){
    const linhaCidade = document.getElementById('tblCidades')
    linhaCidade.innerHTML = ''
    console.log('WAIT')
    for(let i = 0; i < 200; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let ID = data[i].ID
        linhaCidade.innerHTML += `<tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop} Pessoas</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" onclick="showId(${ID});"><i class="far fa-eye"></i></button>
                                        <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn btn-danger" onclick="deleteRow();"><i class="far fa-trash-alt"></i></button>
                                    </td>
                                </tr>`
    }
    console.log('complete')
}
function editRow(ID){

}
//https://mdbootstrap.com/docs/standard/components/modal/
function showId(ID){
    console.log(ID)
}

function deleteRow(data){

}