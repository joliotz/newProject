function insertData() {
    fetch('http://localhost:3001/bd')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(function(err) {
            alert('Ocorreu um problema');

        })
}